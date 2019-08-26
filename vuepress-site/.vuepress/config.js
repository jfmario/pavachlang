
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
      { title: "Pre", children: ['/lessons/pre/alphabet'] },
      {
        title: "Unit 1",
        children: [
          "/lessons/unit01/lesson01"  
        ]
      }
    ],
    customData: {
      pavachAlphabet: { consonants, vowels }
    }
  }
}