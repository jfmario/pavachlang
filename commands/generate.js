
const _ = require('underscore');

function exec(args) {
  
  const consonants = require('../svg-dev/site/consonants.json');
  const vowels =require('../svg-dev/site/vowels.json');
  const consonantKeys = _.keys(consonants);
  const vowelKeys = _.keys(vowels);
  
  let key = args.key;
  let val = '';
  for (let i = 0; i < key.length; ++i) {
    if (key[i] == 'c') {
      let choice = _.sample(consonantKeys);
      val += choice;
    } else if (key[i] == 'v') {
      let choice = _.sample(vowelKeys);
      val += choice;
    } else if (key[i] == '\s') {
      val += '\s';
    }
  }
  
  console.log(val);
}

exports = module.exports = exec;