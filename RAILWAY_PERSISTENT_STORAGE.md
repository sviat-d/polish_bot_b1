# Решение проблемы сброса прогресса пользователей

## Проблема

После каждого деплоя на Railway **прогресс пользователей сбрасывается**.

### Почему это происходит?

1. **Текущая архитектура**:
   - Данные пользователей хранятся в файлах: `data/users/{chatId}.json`
   - Эти файлы находятся на локальной файловой системе контейнера

2. **Как работает Railway**:
   - При каждом деплое создаётся **новый контейнер**
   - Файловая система контейнера **эфемерная** (временная)
   - При новом деплое старый контейнер удаляется
   - Все файлы в `data/users/` **теряются**

3. **Что НЕ помогает**:
   - `.gitignore` правильно настроен (данные не коммитятся в Git)
   - Но это НЕ сохраняет данные между деплоями

## Решение: Railway Volumes (Persistent Storage)

Railway Volumes — это постоянное хранилище, которое сохраняется между деплоями.

### Шаг 1: Создать Volume в Railway

1. Открой проект на Railway Dashboard
2. Перейди в раздел **Settings** → **Volumes**
3. Нажми **+ New Volume**
4. Заполни:
   - **Name**: `user-data-volume`
   - **Mount Path**: `/app/data/users`
   - **Size**: 1 GB (достаточно для тысяч пользователей)

### Шаг 2: Обновить код (не требуется!)

Код уже правильно настроен:
- `src/services/userService.js` использует `config.PATHS.USERS_DIR`
- `config.PATHS.USERS_DIR` указывает на `data/users/`
- Railway Volume подключится к этому пути автоматически

### Шаг 3: Редеплой

После создания Volume:
1. Railway автоматически перезапустит приложение
2. Все новые данные будут сохраняться в Volume
3. При следующих деплоях данные сохранятся

## Альтернативное решение: База данных

Если Volume недостаточно или нужна более надёжная система:

### Вариант 1: Railway PostgreSQL

```javascript
// package.json
{
  "dependencies": {
    "pg": "^8.11.0"
  }
}

// src/services/userService.js
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

async function saveUser(user) {
  await pool.query(
    'INSERT INTO users (chat_id, data) VALUES ($1, $2) ON CONFLICT (chat_id) DO UPDATE SET data = $2',
    [user.chatId, JSON.stringify(user)]
  );
}
```

### Вариант 2: Railway Redis

```javascript
// package.json
{
  "dependencies": {
    "ioredis": "^5.3.0"
  }
}

// src/services/userService.js
const Redis = require('ioredis');
const redis = new Redis(process.env.REDIS_URL);

async function saveUser(user) {
  await redis.set(`user:${user.chatId}`, JSON.stringify(user));
}
```

## Рекомендация

Для текущего проекта **Railway Volume — лучший выбор**:

✅ Преимущества:
- Простая настройка (без изменений кода)
- Бесплатно в пределах лимитов Railway
- Надёжно для малых и средних проектов
- Файловая система остаётся как есть

❌ Недостатки:
- Привязка к одному серверу (нет распределённости)
- Если Volume повредится, данные потеряются (нужны бэкапы)

## Бэкапы (опционально)

Для надёжности можно добавить автоматические бэкапы:

```javascript
// scripts/backup.js
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

function backupUsers() {
  const timestamp = new Date().toISOString().replace(/:/g, '-');
  const backupDir = `/app/backups/${timestamp}`;

  exec(`mkdir -p ${backupDir} && cp -r /app/data/users ${backupDir}`, (err) => {
    if (err) {
      console.error('Backup failed:', err);
    } else {
      console.log('Backup created:', backupDir);
    }
  });
}

// Запускать каждые 24 часа
setInterval(backupUsers, 24 * 60 * 60 * 1000);
```

## Проверка работы Volume

После настройки Volume:

1. Пройди несколько заданий в боте
2. Проверь статистику: `/stats`
3. Задеплой новую версию на Railway
4. Проверь статистику снова — **она должна остаться**

## Миграция существующих данных (если нужно)

Если у тебя уже есть пользовательские данные на локальной машине:

```bash
# 1. Запаковать данные
tar -czf users-backup.tar.gz data/users/

# 2. Загрузить на сервер через Railway CLI
railway run bash
mkdir -p /app/data/users
# Загрузить архив и распаковать
```

Но обычно это не нужно, потому что данные хранятся только на Railway.

## Что делать при добавлении новых заданий

После настройки Volume:

1. Добавляй задания как обычно (см. TASK_ADDITION_GUIDE.md)
2. Коммить и пушить изменения
3. **Прогресс пользователей сохранится автоматически!**

Volume работает независимо от кода — он хранит файлы между деплоями.

## Текущая структура хранения

```
/app/data/users/
  ├── 123456789.json  (пользователь 1)
  ├── 987654321.json  (пользователь 2)
  └── ...
```

Каждый файл содержит:
```json
{
  "chatId": 123456789,
  "completedTasks": ["pdf_B1_REKCJA_001", "B1_ASPEKT_004"],
  "answers": [...],
  "language": "ru",
  ...
}
```

**Важно**: ID заданий хранятся в массиве `completedTasks`. При добавлении новых заданий с новыми ID старые задания остаются выполненными!
