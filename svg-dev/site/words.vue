
<template>
  <div class="container">
    <PavachText
      text=".o-d._-r.a-m r.aa-w.a-gg"
      :size="100"
      :consonants="consonants"
      :vowels="vowels"
    />
  </div>
</template>

<script>

import PavachText from './_components/PavachText.vue';

export default {
  components: { PavachText },
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