<template>
  <transition enter-active-class="about-animation">
    <div
      ref="about"
      class="flex items-center w-fit py-2 pr-2 about-animation cursor-pointer"
      @click="onNavClick"
    >
      <hr class="about-animation-child" :class="aboutClass">
      <span
        class="about-animation-child"
        :class="(!isOutside || isHovered) ? 'text-white text-xs tracking-wider' : 'text-xs tracking-wider'"
      >
        {{ name }}
      </span>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { NavItemEnum } from '#imports';

defineOptions({
  name: 'NavItem',
  inheritAttrs: false,
  customOptions: {},
});

const props = defineProps<{
  name: NavItemEnum,
  isHovered: boolean,
}>();

const name = useVModel(props, 'name');
const isHovered = useVModel(props, 'isHovered');
const about = ref(null);

const emit = defineEmits<{
  (e: 'navClick', value: NavItemEnum): NavItemEnum
}>();

const onNavClick = () => {
  emit('navClick', name.value);
}

const { isOutside } = useMouseInElement(about);

const aboutClass = computed(() => {
  if (isOutside.value && !isHovered.value) {
    return 'w-8 border-0 border-t border-solid mr-2 border-white/60';
  }
  return 'w-16 border-0 border-t border-solid mr-2 border-white';
});
</script>

<style>
.about-animation .about-animation-child {
  transition-timing-function: cubic-bezier(.14,.83,.83,.67);
  transition-duration: .15s;
}
</style>