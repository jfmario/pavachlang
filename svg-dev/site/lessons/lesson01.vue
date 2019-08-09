
<template>
  <div class="container">
    
    <h2>Consonants</h2>
    
    <p class="lead">Here is a little description.</p>
    
    <AllConsonants :consonants="consonants" :vowels="vowels"/>
    
    <p>Here is some post-text.</p>
    
    <h2>Vowels</h2>
    
    <AllVowels :consonants="consonants" :vowels="vowels"/>
  </div>
</template>

<script>

import AllConsonants from '../_components/AllConsonants.vue';
import AllVowels from '../_components/AllVowels.vue';

export default {
  components: { AllConsonants, AllVowels },
  asyncData: async function({ req, url, user }) {
    let consonants = await fetch("/consonants.json").then(resp => resp.json());
    let vowels = await fetch("/vowels.json").then(resp => resp.json());
    return { consonants, vowels };
  }
}
</script>

<style>
@import 'bootstrap/dist/css/bootstrap.css';
</style>