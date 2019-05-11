
<template>
  <template>
    <svg height="100" width="100" viewBox="0 0 100 100">
      <path
        :d="path"
        fill="none"
        stroke="#000"
        stroke-width="5"
      />
    </svg>
  </template>
</template>

<script>
export default {
  props: ['path']
}
</script>