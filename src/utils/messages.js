/**
 * Message templates in Russian
 */

const messages = {
  // Welcome messages
  welcome: () =>
    `Привет! Добро пожаловать в бот для подготовки к экзамену по польскому В1.\n\n` +
    `Команды, которые тебе помогут:\n` +
    `/start - начать/продолжить практику\n` +
    `/stats - показать статистику\n` +
    `/weak - тренировать слабую тему\n` +
    `/rating - включить/выключить оценку заданий (это помогает нам находить слабые задания и улучшать их, а также создавать больше сильных заданий)\n` +
    `/reset - сбросить прогресс\n` +
    `/lang - сменить язык объяснений с русского на польский/с польского на русский`,

  welcomeBack: (completed, total) =>
    `С возвращением! Ты уже решил ${completed} из ${total} заданий.\n\n` +
    `Продолжаем практику!`,

  // Task display
  task: (task, taskNumber, totalTasks, topicMode = null) => {
    let text = '';

    if (topicMode) {
      text += `[Тренировка темы: ${topicMode}]\n\n`;
    }

    text += `Задание ${taskNumber}/${totalTasks}\n\n`;
    text += `${task.question}\n\n`;

    task.options.forEach(opt => {
      text += `${opt.label}) ${opt.text}\n`;
    });

    return text;
  },

  // Answer results
  correctAnswer: (task, userLanguage = 'ru') => {
    let text = `Правильно!\n\n`;

    // Choose explanation based on user language preference
    let explanation;
    let fallbackNotice = '';

    if (userLanguage === 'ru') {
      explanation = task.explanationRu;
      if (!explanation && task.explanationPl) {
        console.warn(`Task ${task.id}: RU explanation missing, falling back to PL`);
        explanation = task.explanationPl;
        fallbackNotice = '(временно на польском, скоро будет на русском)\n\n';
      }
    } else {
      explanation = task.explanationPl;
      if (!explanation && task.explanationRu) {
        console.warn(`Task ${task.id}: PL explanation missing, falling back to RU`);
        explanation = task.explanationRu;
        fallbackNotice = '(tymczasowo po rosyjsku, wkrótce będzie po polsku)\n\n';
      }
    }

    if (!explanation) {
      console.warn(`Task ${task.id}: No explanation available in any language`);
      explanation = 'Нет объяснения / Brak wyjaśnienia';
    }

    text += `Объяснение:\n${fallbackNotice}${explanation}`;
    return text;
  },

  incorrectAnswer: (task, userAnswer, userLanguage = 'ru') => {
    const correctOption = task.options.find(o => o.label === task.correctAnswer);
    let text = `Неправильно.\n\n`;
    text += `Правильный ответ: ${task.correctAnswer}) ${correctOption?.text || ''}\n\n`;

    // Choose explanation based on user language preference
    let explanation;
    let fallbackNotice = '';

    if (userLanguage === 'ru') {
      explanation = task.explanationRu;
      if (!explanation && task.explanationPl) {
        console.warn(`Task ${task.id}: RU explanation missing, falling back to PL`);
        explanation = task.explanationPl;
        fallbackNotice = '(временно на польском, скоро будет на русском)\n\n';
      }
    } else {
      explanation = task.explanationPl;
      if (!explanation && task.explanationRu) {
        console.warn(`Task ${task.id}: PL explanation missing, falling back to RU`);
        explanation = task.explanationRu;
        fallbackNotice = '(tymczasowo po rosyjsku, wkrótce będzie po polsku)\n\n';
      }
    }

    if (!explanation) {
      console.warn(`Task ${task.id}: No explanation available in any language`);
      explanation = 'Нет объяснения / Brak wyjaśnienia';
    }

    text += `Объяснение:\n${fallbackNotice}${explanation}`;
    return text;
  },

  // Completion
  allCompleted: () =>
    `Поздравляю! Ты решил все задания!\n\n` +
    `Используй /reset чтобы начать заново, или /stats чтобы посмотреть статистику.`,

  topicCompleted: (topic) =>
    `Ты решил все задания по теме "${topic}"!\n\n` +
    `Режим тренировки отключен. Продолжаем с обычным режимом.`,

  // Statistics
  stats: (stats, totalTasks, language = 'ru') => {
    let text = `Твоя статистика:\n\n`;
    text += `Всего ответов: ${stats.totalAnswered}\n`;
    text += `Правильных: ${stats.totalCorrect}\n`;
    text += `Неправильных: ${stats.totalIncorrect}\n\n`;

    if (stats.totalAnswered > 0) {
      const percent = Math.round((stats.totalCorrect / stats.totalAnswered) * 100);
      text += `Точность: ${percent}%\n\n`;
    }

    // Show current language
    const langName = language === 'ru' ? 'Русский' : 'Polski';
    text += `Язык объяснений: ${langName}\n\n`;

    if (Object.keys(stats.byTopic).length > 0) {
      text += `По темам:\n`;

      // Sort by error rate (worst first)
      const sortedTopics = Object.entries(stats.byTopic)
        .sort((a, b) => b[1].errorRate - a[1].errorRate);

      for (const [topic, data] of sortedTopics) {
        const percent = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
        const emoji = data.errorRate > 50 ? '❌' : (data.errorRate > 25 ? '⚠️' : '✅');
        text += `${emoji} ${topic}: ${data.correct}/${data.total} (${percent}%)\n`;
      }
    }

    return text;
  },

  noStats: () =>
    `У тебя пока нет статистики. Начни решать задания!`,

  // Weak topic
  weakTopicSuggestion: (topic, errorRate) =>
    `Обнаружена слабая тема!\n\n` +
    `Тема "${topic}" имеет ${errorRate}% ошибок.\n\n` +
    `Хочешь потренировать её?`,

  weakTopicStart: (topic) =>
    `Режим тренировки темы "${topic}" включен.\n\n` +
    `Теперь ты будешь получать только задания по этой теме.`,

  weakTopicExit: () =>
    `Режим тренировки отключен. Продолжаем с обычным режимом.`,

  noWeakTopic: () =>
    `У тебя нет явно слабых тем. Продолжай в том же духе!\n\n` +
    `(Слабой считается тема с >50% ошибок при >=5 ответах)`,

  // Rating
  ratingAsk: () =>
    `Хочешь помочь нам улучшить бота?\n\n` +
    `Ты можешь оценивать качество заданий (1-5) после каждого ответа.\n\n` +
    `Включить оценку заданий?`,

  ratingAskLast: () =>
    `Последний раз спрашиваем: хочешь оценивать задания?\n\n` +
    `Если передумаешь, можешь включить командой /rating`,

  ratingEnabled: () =>
    `Оценка заданий включена! Теперь после каждого ответа ты можешь оценить задание.`,

  ratingDisabled: () =>
    `Оценка заданий отключена.`,

  ratingPrompt: () =>
    `Оцени это задание (1-5):`,

  ratingThanks: () =>
    `Спасибо за оценку!`,

  // Reset
  confirmReset: () =>
    `Ты уверен, что хочешь сбросить весь прогресс?\n\n` +
    `Это действие нельзя отменить.`,

  resetDone: () =>
    `Прогресс сброшен. Начни заново с /start`,

  resetCancelled: () =>
    `Сброс отменен.`,

  // Language switching
  languageChanged: (language) => {
    if (language === 'ru') {
      return `Язык объяснений изменён на русский`;
    } else {
      return `Zmieniono język wyjaśnień na polski`;
    }
  },

  // Errors
  error: () =>
    `Произошла ошибка. Попробуй ещё раз или напиши /start`,

  unknownCommand: () =>
    `Неизвестная команда. Используй /start для начала.`
};

module.exports = messages;
