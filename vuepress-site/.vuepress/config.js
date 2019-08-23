
const consonants = require('./consonants');
const vowels = require('./vowels');

module.exports = {
  title: "Pavach Trainer",
  themeConfig: {
    nav: [
      { text: "Home", link: '/' },
      { text: "Lessons", link: '/lessons/pre/alphabet' }
    ],
    sidebar: [
      { title: "Pre", children: ['/lessons/pre/alphabet'] }
    ],
    customData: {
      pavachAlphabet: { consonants, vowels }
    }
  }
}