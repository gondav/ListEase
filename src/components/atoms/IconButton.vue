<script setup lang="ts">

  interface IconButtonProps {
    type?: 'primary' | 'secondary';
  }

  withDefaults(defineProps<IconButtonProps>(), {
    type: 'primary'
  });

</script>

<template>
  <button :class="type">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">

$btn-size: 32px;

@mixin btn($bg-color, $color) {
  background-color: $bg-color;
  color: $color;
  width: $btn-size;
  height: $btn-size;
  font-size: 22px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: grid;
  place-items: center;

  &:hover {
    background-color: darken($bg-color, 5%);
  }
}

.primary {
  @include btn($c-accent, $c-base);
}

.secondary {
  @include btn($c-secondary, $c-accent);
}

</style>