
<template>
  <div v-if="ready">
    <span v-for="p in pathlist">
      <svg :height="size" :width="size" viewBox="0 0 100 100">
        <path
          :d="p"
          fill="none"
          stroke="#000"
          stroke-width="7"
        />
      </svg>
    </span>
  </div>
</template>

<script>

// build list of character paths
export default {
  props: ['text', 'consonants', 'vowels', 'size'],
  data() {
    return {
      pathlist: [],
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
            this.pathlist.push(this.$site.themeConfig.customData.pavachAlphabet.consonants[character].standard);
            console.log(this.pathlist);
          }
          else {
            if (character.startsWith('.')) {
              this.pathlist.push(this.$site.themeConfig.customData.pavachAlphabet.vowels[character.slice(1)].standard);
            }
            else {
              
              // choose form of each and combine into string and add to pathlist
              let subs = character.split('.');
              let c = subs[0];
              let v = subs[1];
              let consonant = this.$site.themeConfig.customData.pavachAlphabet.consonants[c];
              let vowel = this.$site.themeConfig.customData.pavachAlphabet.vowels[v];
              
              if (consonant.direction > 0 && vowel.direction > 0) {
                this.pathlist.push(`${consonant.form1} ${vowel.form1}`);
              }
              else if (consonant.direction < 0 && vowel.direction < 0) {
                this.pathlist.push(`${consonant.form2} ${vowel.form2}`);
              }
              else if (consonant.direction == 0 && vowel.direction == 0) {
                this.pathlist.push(`${consonant.form1} ${vowel.form1}`);
              }
              else if (consonant.direction > vowel.direction) {
                this.pathlist.push(`${consonant.form2} ${vowel.form1}`);
              }
              else {
                this.pathlist.push(`${consonant.form1} ${vowel.form2}`);
              }
            }
          }
        }
        
        this.pathlist.push('');
      }
    }
    
    this.ready = true;
  }
}
</script>