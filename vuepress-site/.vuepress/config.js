
const consonants = require('./consonants');
const vowels = require('./vowels');

module.exports = {
  title: "Pavach Trainer",
  themeConfig: {
    nav: [
      { text: "Home", link: '/' },
      { text: "Lessons", link: '/lessons/lesson01' }
    ],
    customData: {
      pavachAlphabet: { consonants, vowels }
    }
  }
}