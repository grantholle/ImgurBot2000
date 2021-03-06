'use strict'

const s = require('sentencer'),
      random = require('./random'),
      giphy = require('./giphy')

module.exports = () => {
  const templates = [
    '{{nouns}} of {{noun}}!!',
    'What the {{adjective}} {{noun}}?!',
    'It\'s like when a {{noun}} sees a {{noun}}',
    'More like six {{nouns}} ate a box of {{noun}}',
    'What the what',
    '{{nouns}}!',
    'That {{noun}} is {{adjective}}!',
    'These {{nouns}} are {{adjective}}',
    'Wow',
    'That is... {{adjective}}?',
    'Is that what I think it is?',
    'Nice, OP. Nice.',
    'OP got mad skills',
    '{{nouns}}',
    '{{noun}}',
    '{{adjective}} {{adjective}} {{noun}}',
    '{{adjective}} {{noun}}',
    '{{adjective}} {{nouns}}',
    '{{adjective}} {{adjective}} {{nouns}}',
    'This is {{an_adjective}} post',
    'Insert {{an_adjective}} pun here',
    'Why all the downvotes?',
    'The FP deserves this',
    'I wish I had never seen this',
    'Up up and away!',
    'Spoiler alert',
    'Thanks OP',
    'Stay strong OP',
    'Ducks fly together',
    'Spoiler alert: it was OP\'s {{noun}}',
    'Plot twist: it was OP\'s {{noun}}',
    'Plot twist: it wasn\'t the OP',
    'Meow',
    'This doggo... this doggo',
    'Cute OP',
    'Cats amirite',
    'Dogs amirite',
    'Ok...',
    'Amen',
    'OP deserves {{a_noun}}, {{a_noun}}, and {{a_noun}}',
    'High five!',
    'Let\'s see those upvotes',
    'Watch this makes it to FP',
    'What am I looking at here',
    'Looks like a dozen {{nouns}}',
    'I can\'t believe my eyes',
    '{{an_adjective}} post OP',
    'Pack it up',
    'Insert witty comment here',
    'Insert {{adjective}} comment here',
    'Dank',
    'Burn level 100',
    'Nice',
    'Chin up OP',
    '[pun]',
    '[dad joke]',
    'Kids these days',
    'What {{an_adjective}} day',
    'Dumperoony',
    'Thanks Obama',
    'Take my upvote',
    'I cannot upvote this enough',
    'Coolio',
    'High five a million angels',
    'SMH',
    'I\'m loving it',
    'Thank you',
    'Now we\'re on to something',
    'What a time to be alive',
    '2/5 would try again',
    'My new favorite',
    'Wait a sec',
    'There are some things that you can\'t unsee',
    'LNI already?',
    'CAN YOU DIG IT?',
    'I dig, I dig'
  ],
  textComment = () => {
    return new Promise(resolve => resolve(s.make(templates[random(0, templates.length)])))
  }

  return true ? textComment() : giphy.random()
}
