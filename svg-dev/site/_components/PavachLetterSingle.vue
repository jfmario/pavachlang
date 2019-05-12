
<template>
  <div>
    <svg height="100" width="100" viewBox="0 0 100 100">
      <path
        :d="path"
        fill="none"
        stroke="#000"
        stroke-width="5"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: ['path']
}
</script>