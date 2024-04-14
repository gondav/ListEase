<script setup lang="ts">

  interface H1Props {
    text: string
  }

  defineProps<H1Props>();

</script>

<template>
  <h1>{{ text }}</h1>
</template>

<style scoped lang="scss">

  h1 {
    font-family: Poppins, 'Arial Narrow', Arial, sans-serif;
    font-size: 2em;
    color: $c-dark;
  }

</style>