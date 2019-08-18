
<template>
  <i v-if="ready">
    <span v-for="l in letterlist" v-html="l">
    </span>
  </i>
</template>

<script>

// build list of character paths
export default {
  props: ['text', 'consonants', 'vowels', 'size'],
  data() {
    return {
      letterlist: [],
      ready: false
    }
  },
  mounted() {
    let sentences = this.text.split('|');
    for (let i = 0; i < sentences.length; ++i) {
      let sentence = sentences[i];
      let words = sentence.split(' ');
      for (let j = 0; j < words.length; ++j) {
        let word = words[j];
        let characters = word.split('-');
        for (let k = 0; k < characters.length; ++k) {
          let character = characters[k];
          if (character.indexOf('.') == -1) {
            this.letterlist.push(this.$site.themeConfig.customData.pavachAlphabet.consonants[character].trans);
            console.log(this.pathlist);
          }
          else {
            if (character.startsWith('.')) {
              this.letterlist.push(this.$site.themeConfig.customData.pavachAlphabet.vowels[character.slice(1)].trans);
            }
            else {
              
              // choose form of each and combine into string and add to pathlist
              let subs = character.split('.');
              let c = subs[0];
              let v = subs[1];
              let consonant = this.$site.themeConfig.customData.pavachAlphabet.consonants[c];
              let vowel = this.$site.themeConfig.customData.pavachAlphabet.vowels[v];
              
              this.letterlist.push(consonant.trans);
              this.letterlist.push(vowel.trans);
              
            }
          }
        }
      }
    }
    
    this.ready = true;
  }
}
</script>