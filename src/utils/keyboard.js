const { Markup } = require('telegraf');

/**
 * Create answer keyboard with options A, B, C, D (bottom panel - ReplyKeyboard)
 */
function answerKeyboard(options) {
  const buttons = options.map(opt =>
    Markup.button.text(`${opt.label}) ${opt.text}`)
  );

  // Arrange: 2 buttons per row for better readability
  const rows = [];
  for (let i = 0; i < buttons.length; i += 2) {
    rows.push(buttons.slice(i, i + 2));
  }

  return Markup.keyboard(rows).resize().oneTime();
}

/**
 * Remove reply keyboard
 */
function removeKeyboard() {
  return Markup.removeKeyboard();
}

/**
 * Create rating keyboard (1-5 + skip)
 */
function ratingKeyboard() {
  return Markup.inlineKeyboard([
    [
      Markup.button.callback('1', 'rate:1'),
      Markup.button.callback('2', 'rate:2'),
      Markup.button.callback('3', 'rate:3'),
      Markup.button.callback('4', 'rate:4'),
      Markup.button.callback('5', 'rate:5'),
    ],
    [Markup.button.callback('Пропустить', 'rate:skip')]
  ]);
}

/**
 * Create yes/no keyboard for rating question
 */
function ratingAskKeyboard() {
  return Markup.inlineKeyboard([
    [
      Markup.button.callback('Да', 'rating_enable:yes'),
      Markup.button.callback('Нет', 'rating_enable:no')
    ]
  ]);
}

/**
 * Create reset confirmation keyboard
 */
function confirmResetKeyboard() {
  return Markup.inlineKeyboard([
    [
      Markup.button.callback('Да, сбросить', 'reset:confirm'),
      Markup.button.callback('Отмена', 'reset:cancel')
    ]
  ]);
}

/**
 * Create weak topic suggestion keyboard
 */
function weakTopicKeyboard() {
  return Markup.inlineKeyboard([
    [
      Markup.button.callback('Да, тренировать', 'weak:start'),
      Markup.button.callback('Нет, продолжить', 'weak:skip')
    ]
  ]);
}

/**
 * Create exit weak topic mode keyboard
 */
function exitWeakModeKeyboard() {
  return Markup.inlineKeyboard([
    [Markup.button.callback('Выйти из режима тренировки', 'weak:exit')]
  ]);
}

module.exports = {
  answerKeyboard,
  removeKeyboard,
  ratingKeyboard,
  ratingAskKeyboard,
  confirmResetKeyboard,
  weakTopicKeyboard,
  exitWeakModeKeyboard
};
