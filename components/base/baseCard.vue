<template>
  <div
    ref="card"
    class="flex flex-row gap-4 px-4 py-3 rounded-lg hover:bg-light-white hover:shadow-card transition-colors duration-300"
  >
    <div class="text-xs text-center min-w-[55px]">
      {{ experience.endYear }} <hr> {{ experience.startYear }}
    </div>
    <div class="grow">
      <div
        class="text-lg font-semibold transition-colors duration-300"
        :class="{
          'text-secondary': isOutside,
          'text-light-green': !isOutside
        }"
      >
        {{ experience.position }} | {{ experience.company }}
      </div>
      <div class="text-sm">
        {{ experience.description }}
      </div>
      <div
        v-if="experience.links"
        class="flex flex-row flex-wrap gap-2 my-3"
      >
        <div v-for="(item, index) in experience.links" :key="index">
          <base-icon v-slot="{ color }">
            <a
              :href="item.url"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center hover:text-light-green"
            >
              <IconLink :size="15" :color="color" class="mr-1" />
              <span class="text-sm">
                {{ item.name }}
              </span>
            </a>
          </base-icon>
        </div>
      </div>
      <div
        class="flex flex-row flex-wrap gap-2"
        :class="{
          'mt-4': !experience.links
        }"
      >
        <div
          v-for="(item, index) in experience.stack" :key="index"
          class="flex text-xs text-light-green bg-opacity-green rounded-full px-3 py-1 w-max"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Experience } from '@/types/experience';
import { IconLink } from '@tabler/icons-vue';

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