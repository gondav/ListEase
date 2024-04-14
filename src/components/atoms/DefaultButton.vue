<script setup lang="ts">

  interface DefaultButtonProps {
    label: string;
    type?: 'primary' | 'secondary';
  }

  withDefaults(defineProps<DefaultButtonProps>(), {
    type: 'primary'
  });

</script>

<template>
  <button :class="type">{{ label }}</button>
</template>

<style scoped lang="scss">

  @mixin btn($bg-color, $color) {
    background-color: $bg-color;
    color: $color;
    font-family: 'Lexend Deca Variable', Arial, sans-serif;
    font-weight: 500;
    font-size: 14px;
    padding: 11px 16px;
    border: none;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      background-color: darken($bg-color, 5%);
    }
  }

  .primary {
    @include btn($c-accent, $c-base);
  }

  .secondary {
    @include btn($c-secondary, $c-dark);
  }

</style>