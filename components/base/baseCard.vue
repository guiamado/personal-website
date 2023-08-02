<template>
  <div
    ref="card"
    class="flex flex-row gap-4 px-4 py-3 rounded-lg hover:bg-light-white hover:shadow-card cursor-pointer"
  >
    <div class="text-xs text-center min-w-[55px]">
      {{ experience.startYear }} <hr> {{ experience.endYear }}
    </div>
    <div class="grow">
      <div
        class="text-lg font-semibold"
        :class="{
          'text-secondary': isOutside,
          'text-light-green': !isOutside
        }"
      >
        {{ experience.position }} | {{ experience.company }}
      </div>
      <div>
        {{ experience.description }}
      </div>
      <div class="flex flex-row flex-wrap gap-2 mt-4">
        <div
          v-for="(item, index) in experience.stack" :key="index"
          class="flex text-sm text-light-green bg-opacity-green rounded-full px-3 py-1 w-max"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Experience } from '@/types/experience';
// import { Experience } from 'types';

defineOptions({
  name: 'Card',
  inheritAttrs: false,
  customOptions: {},
});

const props = defineProps<{
  experience: Experience
}>();

const experience = useVModel(props, 'experience');


const card = ref(null);

const { isOutside } = useMouseInElement(card);
</script>