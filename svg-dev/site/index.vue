
<template>
  <div class="container">
    
    <h1>Letters</h1>
    
    <div v-for="(value, n) in consonants">
      
      <h4>{{ n }}</h4>
      
      <div class="row">
        <div class="col-md-4">
          <PavachLetterSingle :path="value.standard" />
        </div>
        <div class="col-md-4">
          <PavachLetterSingle :path="value.form1" />
        </div>
        <div class="col-md-4">
          <PavachLetterSingle :path="value.form2" />
        </div>
      </div>
    </div>
    <div v-for="(value, n) in vowels">
      
      <h4>{{ n }}</h4>
      
      <div class="row">
        <div class="col-md-4">
          <PavachLetterSingle :path="value.standard" />
        </div>
        <div class="col-md-4">
          <PavachLetterSingle :path="value.form1" />
        </div>
        <div class="col-md-4">
          <PavachLetterSingle :path="value.form2" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import PavachLetterSingle from './_components/PavachLetterSingle.vue';

export default {
  components: { PavachLetterSingle },
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