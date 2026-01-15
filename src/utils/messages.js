/**
 * Message templates in Russian
 */

const messages = {
  // Welcome messages
  welcome: () =>
    `Privet! Dobro pozhalovat' v bot dlya podgotovki k ekzamenu po pol'skomu B1.\n\n` +
    `Ya budu davat' tebe zadaniya po grammatike, a ty vybiraj pravil'nyj otvet.\n\n` +
    `Komandy:\n` +
    `/start - Nachat'/prodolzhit' praktiku\n` +
    `/stats - Pokazat' statistiku\n` +
    `/weak - Trenirovat' slabuyu temu\n` +
    `/rating - Vklyuchit'/vyklyuchit' ocenku zadanij\n` +
    `/reset - Sbrosit' progress\n\n` +
    `Davaj nachnyom!`,

  welcomeBack: (completed, total) =>
    `S vozvrashcheniem! Ty uzhe reshil ${completed} iz ${total} zadanij.\n\n` +
    `Prodolzhaem praktiku!`,

  // Task display
  task: (task, taskNumber, totalTasks, topicMode = null) => {
    let text = '';

    if (topicMode) {
      text += `[Trenirovka temy: ${topicMode}]\n\n`;
    }

    text += `Zadanie ${taskNumber}/${totalTasks}\n\n`;
    text += `${task.question}\n\n`;

    task.options.forEach(opt => {
      text += `${opt.label}) ${opt.text}\n`;
    });

    return text;
  },

  // Answer results
  correctAnswer: (task) => {
    let text = `Pravil'no!\n\n`;
    text += `Ob"yasnenie:\n${task.explanationRu || task.explanationPl || 'Net ob"yasneniya'}`;
    return text;
  },

  incorrectAnswer: (task, userAnswer) => {
    const correctOption = task.options.find(o => o.label === task.correctAnswer);
    let text = `Nepravil'no.\n\n`;
    text += `Pravil'nyj otvet: ${task.correctAnswer}) ${correctOption?.text || ''}\n\n`;
    text += `Ob"yasnenie:\n${task.explanationRu || task.explanationPl || 'Net ob"yasneniya'}`;
    return text;
  },

  // Completion
  allCompleted: () =>
    `Pozdravlyayu! Ty reshil vse zadaniya!\n\n` +
    `Ispol'zuj /reset chtoby nachat' zanovo, ili /stats chtoby posmotret' statistiku.`,

  topicCompleted: (topic) =>
    `Ty reshil vse zadaniya po teme "${topic}"!\n\n` +
    `Rezhim trenirovki otklyuchen. Prodolzhaem s obychnym rezhimom.`,

  // Statistics
  stats: (stats, totalTasks) => {
    let text = `Tvoya statistika:\n\n`;
    text += `Vsego otvetov: ${stats.totalAnswered}\n`;
    text += `Pravil'nyh: ${stats.totalCorrect}\n`;
    text += `Nepravil'nyh: ${stats.totalIncorrect}\n\n`;

    if (stats.totalAnswered > 0) {
      const percent = Math.round((stats.totalCorrect / stats.totalAnswered) * 100);
      text += `Tochnost': ${percent}%\n\n`;
    }

    if (Object.keys(stats.byTopic).length > 0) {
      text += `Po temam:\n`;

      // Sort by error rate (worst first)
      const sortedTopics = Object.entries(stats.byTopic)
        .sort((a, b) => b[1].errorRate - a[1].errorRate);

      for (const [topic, data] of sortedTopics) {
        const percent = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
        const emoji = data.errorRate > 50 ? '' : (data.errorRate > 25 ? '' : '');
        text += `${emoji} ${topic}: ${data.correct}/${data.total} (${percent}%)\n`;
      }
    }

    return text;
  },

  noStats: () =>
    `U tebya poka net statistiki. Nachni reshat' zadaniya!`,

  // Weak topic
  weakTopicSuggestion: (topic, errorRate) =>
    `Obnaruzhena slabaya tema!\n\n` +
    `Tema "${topic}" imeet ${errorRate}% oshibok.\n\n` +
    `Hochesh' potreniovat' eyo?`,

  weakTopicStart: (topic) =>
    `Rezhim trenirovki temy "${topic}" vklyuchen.\n\n` +
    `Teper' ty budesh' poluchat' tol'ko zadaniya po etoj teme.`,

  weakTopicExit: () =>
    `Rezhim trenirovki otklyuchen. Prodolzhaem s obychnym rezhimom.`,

  noWeakTopic: () =>
    `U tebya net yavno slabykh tem. Prodolzhaj v tom zhe dukhe!\n\n` +
    `(Slaboj schitaetsya tema s >50% oshibok pri >=5 otvetakh)`,

  // Rating
  ratingAsk: () =>
    `Hochesh' pomoch' nam uluchshit' bota?\n\n` +
    `Ty mozhesh' ocenivat' kachestvo zadanij (1-5) posle kazhdogo otveta.\n\n` +
    `Vklyuchit' ocenku zadanij?`,

  ratingAskLast: () =>
    `Poslednij raz sprashivaem: hochesh' ocenivat' zadaniya?\n\n` +
    `Esli peredumayesh', mozhesh' vklyuchit' komandoj /rating`,

  ratingEnabled: () =>
    `Ocenka zadanij vklyuchena! Teper' posle kazhdogo otveta ty mozhesh' ocenit' zadanie.`,

  ratingDisabled: () =>
    `Ocenka zadanij otklyuchena.`,

  ratingPrompt: () =>
    `Oceni eto zadanie (1-5):`,

  ratingThanks: () =>
    `Spasibo za ocenku!`,

  // Reset
  confirmReset: () =>
    `Ty uverenn, chto hochesh' sbrosit' ves' progress?\n\n` +
    `Eto dej'stvie nel'zya otmenit'.`,

  resetDone: () =>
    `Progress sbroshen. Nachni zanovo s /start`,

  resetCancelled: () =>
    `Sbros otmenen.`,

  // Errors
  error: () =>
    `Proizoshla oshibka. Poprobuj eshchyo raz ili napishi /start`,

  unknownCommand: () =>
    `Neizvestnaya komanda. Ispol'zuj /start dlya nachala.`
};

module.exports = messages;
