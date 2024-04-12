<script setup lang="ts">
  import { ref } from 'vue';

  const isHovered = ref(false);
</script>

<template>
    <font-awesome-icon @mouseover="isHovered = true" @mouseleave="isHovered = false" :icon="['far', `square${isHovered ? '-check' : ''}`]" class="icon" />
</template>

<style scoped lang="scss">
  .icon {
    cursor: pointer;
  }
</style>
