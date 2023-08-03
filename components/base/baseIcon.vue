<template>
  <div ref="icon" class="cursor-pointer">
    <slot :color="isOutside ? '#D3D1C1' : '#00ffb2'" ></slot>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'Icon',
  inheritAttrs: false,
  customOptions: {},
});

const icon = ref(null);

const { isOutside } = useMouseInElement(icon);
</script>