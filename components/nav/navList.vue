<template>
  <div class="flex flex-col items-center lg:items-start xl:items-start">
    <template v-for="(item, index) in items" :key="index">
      <nav-item :name="item" />
    </template>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'NavList',
  inheritAttrs: false,
  customOptions: {},
})

const items = ref<string[]>([
  'ABOUT',
  'EXPERIENCE',
]);
</script>