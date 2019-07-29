
<template>
  <table class="table">
    <thead>
      <tr>
        <th>Character</th>
        <th>Name</th>
        <th>Transliteration</th>
        <th>Sound</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><PavachText :size="20" text="ii" :consonants="consonants" :vowels="vowels"/></td>
        <td><i>&#x012b;</i></td>
        <td><b><i>m</i></b></td>
        <td><b>ea</b>st, fr<b>ee</b></td>
      </tr>
    </tbody>
  </table>
</template>

<script>

import PavachText from './PavachText.vue';

export default {
  components: { PavachText },
  props: ['consonants', 'vowels']
}
</script>