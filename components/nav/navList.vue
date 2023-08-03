<template>
  <div class="flex flex-col items-center lg:items-start xl:items-start">
    <template v-for="(item, index) in items" :key="index">
      <nav-item :name="item" :is-hovered="hoveredItem === item" @nav-click="onNavClick"/>
    </template>
  </div>
</template>

<script setup lang="ts">
import { NavItemEnum } from '#imports';

defineOptions({
  name: 'NavList',
  inheritAttrs: false,
  customOptions: {},
})

const props = defineProps<{
  hoveredItem: string,
}>();

const emit = defineEmits<{
  (e: 'navChange', value: NavItemEnum): NavItemEnum
}>();

const onNavClick = (value: NavItemEnum) => {
  if (hoveredItem.value !== value) {
    emit('navChange', value)
  }
};

const hoveredItem = useVModel(props, 'hoveredItem');

const items = ref<NavItemEnum[]>([
  NavItemEnum.ABOUT,
  NavItemEnum.EXPERIENCE,
]);
</script>