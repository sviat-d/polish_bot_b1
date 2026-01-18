# Как посмотреть данные пользователей в Railway Volume

## Способ 1: Railway Web Shell (САМЫЙ ПРОСТОЙ)

### Шаги:

1. **Открой Railway Dashboard** → твой проект
2. **Deployments** (слева в меню)
3. Кликни на последний деплой (самый верхний)
4. Нажми **View Logs**
5. Справа вверху нажми кнопку **"Shell"** (иконка терминала)

### Команды в Shell:

```bash
# Посмотреть всех пользователей (список файлов)
ls -la /app/data/users/

# Количество пользователей
ls /app/data/users/ | wc -l

# Посмотреть данные конкретного пользователя (замени на реальный chat ID)
cat /app/data/users/123456789.json

# Красиво отформатировать JSON (если есть jq)
cat /app/data/users/123456789.json | jq

# Посмотреть первого попавшегося пользователя
cat /app/data/users/$(ls /app/data/users/ | head -1)

# Найти пользователя по username
grep -l '"username":"john_doe"' /app/data/users/*.json

# Посмотреть только имена всех пользователей
for file in /app/data/users/*.json; do
  echo "File: $(basename $file)"
  cat $file | grep -o '"firstName":"[^"]*"' | head -1
  echo "---"
done

# Посмотреть последнего зарегистрировавшегося
ls -t /app/data/users/ | head -1 | xargs -I {} cat /app/data/users/{}
```

---

## Способ 2: Команда /admin в Telegram (УЖЕ ГОТОВО!)

### Настройка (если ещё не сделал):

1. Узнай свой Chat ID:
   - Отправь `/start` боту
   - Или используй [@userinfobot](https://t.me/userinfobot)

2. Добавь в Railway:
   - **Settings** → **Variables**
   - Добавь переменную:
     - Name: `ADMIN_CHAT_IDS`
     - Value: `123456789` (твой chat ID)

3. Railway автоматически перезапустится

### Команды в боте:

```
/admin              - общая статистика
/admin top          - топ-10 пользователей
/admin recent       - новые за 7 дней
/admin dates        - регистрации по дням
/admin help         - справка
```

**Пример вывода:**
```
📊 СТАТИСТИКА БОТА

👥 Пользователи:
   Всего: 15
   Новые (0 ответов): 3
   Активные: 12

📝 Ответы:
   Всего ответов: 234
   ✅ Правильных: 198 (85%)
   ❌ Неправильных: 36
```

---

## Способ 3: Railway CLI (для продвинутых)

### Установка:

```bash
# Установить Railway CLI
npm install -g @railway/cli

# Войти
railway login

# Подключиться к проекту
railway link
```

### Использование:

```bash
# Запустить команду на сервере
railway run ls /app/data/users/

# Посмотреть файл
railway run cat /app/data/users/123456789.json

# Запустить скрипт аналитики
railway run node scripts/analytics.js

# Интерактивный shell
railway shell
# Внутри shell:
ls /app/data/users/
cat /app/data/users/123456789.json
```

---

## Способ 4: Скрипт analytics.js

Я уже создал скрипт для детальной аналитики!

```bash
# Через Railway CLI
railway run node scripts/analytics.js

# С разными опциями:
railway run node scripts/analytics.js --detailed    # Подробно
railway run node scripts/analytics.js --users       # Список всех
railway run node scripts/analytics.js --export      # Экспорт в JSON
```

**Пример вывода:**

```
============================================================
📊  POLISH B1 EXAM BOT — ANALYTICS
============================================================

📈 OVERALL STATISTICS:
   Total Users:        15
   New Users (0 ans):  3
   Active Users:       12
   Total Answers:      234
   Correct:            198 (85%)
   Incorrect:          36
   Avg Progress:       15 tasks

🏆 TOP 10 USERS (by completed tasks):
   Rank | Chat ID    | Username      | Tasks | Accuracy | Lang
   ------------------------------------------------------------
      1 | 123456789  | john_doe      |    45 |     92%  | ru
      2 | 987654321  | anna_pol      |    38 |     88%  | pl
```

---

## Способ 5: Скачать данные локально

### Через Railway CLI:

```bash
# Создать архив на сервере
railway run tar -czf /tmp/users-backup.tar.gz /app/data/users

# Скачать (требует дополнительных шагов)
railway run cat /tmp/users-backup.tar.gz > users-backup.tar.gz

# Распаковать
tar -xzf users-backup.tar.gz
```

### Или использовать экспорт:

```bash
# Экспортировать в JSON
railway run node scripts/analytics.js --export

# Файл создастся: users-export.json
# Скачать через SFTP или копипастом из Shell
```

---

## Примеры полезных команд

### Статистика в реальном времени:

```bash
# Количество пользователей
ls /app/data/users/ | wc -l

# Пользователи с языком PL
grep -l '"language":"pl"' /app/data/users/*.json | wc -l

# Средний прогресс (приблизительно)
grep -h '"completedTasks"' /app/data/users/*.json | \
  grep -o '\[.*\]' | \
  grep -o ',' | \
  wc -l

# Последние 5 зарегистрировавшихся
ls -t /app/data/users/ | head -5

# Самые активные (с большим количеством ответов)
for file in /app/data/users/*.json; do
  answers=$(cat $file | grep -o '"answers":\[.*\]' | grep -o ',' | wc -l)
  echo "$answers $file"
done | sort -rn | head -5
```

### Поиск конкретного пользователя:

```bash
# По username
grep -l '"username":"john_doe"' /app/data/users/*.json

# По имени
grep -l '"firstName":"John"' /app/data/users/*.json

# По Chat ID (если знаешь)
cat /app/data/users/123456789.json
```

### Посмотреть конкретные поля:

```bash
# Только username и firstName
cat /app/data/users/123456789.json | \
  grep -E '"username"|"firstName"'

# Сколько заданий выполнил
cat /app/data/users/123456789.json | \
  grep '"completedTasks"' | \
  grep -o ',' | \
  wc -l

# Какой язык предпочитает
cat /app/data/users/123456789.json | \
  grep '"language"'
```

---

## Структура данных пользователя

Каждый файл содержит:

```json
{
  "chatId": 123456789,
  "username": "john_doe",
  "firstName": "John",
  "lastName": "Doe",
  "languageCode": "ru",
  "isBot": false,

  "createdAt": "2026-01-18T10:00:00.000Z",
  "updatedAt": "2026-01-18T15:30:00.000Z",

  "completedTasks": [
    "pdf_B1_REKCJA_001",
    "B1_ASPEKT_004",
    "..."
  ],

  "answers": [
    {
      "taskId": "pdf_B1_REKCJA_001",
      "topic": "Rekcja czasowników",
      "isCorrect": true,
      "userAnswer": "C",
      "rating": 5,
      "answeredAt": "2026-01-18T10:05:00.000Z"
    }
  ],

  "language": "ru",
  "ratingEnabled": false,
  "currentTaskId": null,
  "weakTopicMode": {
    "active": false,
    "topic": null
  }
}
```

---

## Быстрая справка

| Что нужно | Команда |
|-----------|---------|
| Количество пользователей | `ls /app/data/users/ \| wc -l` |
| Список всех | `ls /app/data/users/` |
| Данные пользователя | `cat /app/data/users/123456789.json` |
| Красивый вывод | `cat /app/data/users/123456789.json \| jq` |
| Поиск по username | `grep -l '"username":"john"' /app/data/users/*.json` |
| Последний зарегистрировавшийся | `ls -t /app/data/users/ \| head -1` |

---

## Рекомендация

**Для быстрого просмотра**: используй `/admin` в Telegram

**Для детального анализа**: используй Railway Web Shell или `railway run node scripts/analytics.js`

**Для экспорта данных**: `railway run node scripts/analytics.js --export`
