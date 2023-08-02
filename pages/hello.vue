<template>
  <div class="container mx-auto">
    <div class="flex justify-between min-h-screen flex-wrap px-4 py-12 lg:max-xl:py-0">
      <div
        class="lg:flex lg:flex-col lg:sticky lg:top-0 lg:max-h-screen w-full lg:w-1/2 xl:w-1/2 lg:justify-between lg:py-24"
      >
        <div>
          <div class="text-3xl font-semibold text-secondary text-center lg:text-left xl:text-left">
            Guilherme Amado da Silva
          </div>
          <div class="text-xl font-medium text-secondary text-center lg:text-left xl:text-left">
            Fullstack Developer
          </div>

          <div class="flex justify-center lg:justify-start xl:justify-start my-4">
            <img class="max-w-none h-64 rounded-full" src="~/assets/images/profile.jpg" alt="Example Image" width="auto" height="250px" />
          </div>

          <div>
            <nav-list />
          </div>

          
        </div>
        <div class="flex items-end gap-6 mb-4 lg:max-xl:mb-0 justify-center lg:justify-start xl:justify-start">
          <IconBrandGithub :size="30" color="#D3D1C1"  class="cursor-pointer"/>
          <IconBrandLinkedin :size="30" color="#D3D1C1" class="cursor-pointer" />
          <IconMail :size="30" color="#D3D1C1" class="cursor-pointer" />
          <IconBrandWhatsapp :size="30" color="#D3D1C1" class="cursor-pointer" />
        </div>
      </div>
      <div class="text-white/60 lg:w-1/2 lg:py-24">
        <section ref="aboutRef">
          <div class="mb-6">
            <div v-html="about" />
          </div>
        </section>
        <section ref="experienceRef">
          <div v-for="(item, index) in experiences" :key="index">
            <base-card :experience="item"/>
          </div>
        </section>
      </div>
    </div>
    <div
      ref="el"
      class="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute min-h-screen"
      :style="styledCursor"
    />
  </div>
</template>

<script setup lang="ts">
import { IconBrandGithub, IconBrandLinkedin, IconMail, IconBrandWhatsapp } from '@tabler/icons-vue';
import { Experience } from 'types';

const el = ref(null);
const styledCursor = ref(`radial-gradient(600px at 100px 100px, rgb(15 118 110 / 20%), transparent 80%);`);

const { x, y } = useMouse();
watch([x, y], ([x, y]) => {
  styledCursor.value = `background: radial-gradient(600px at ${x}px ${y}px, rgb(92 52 137 / 20%), transparent 80%);`;
});

const experienceInfo = ref<Experience>({
  company: 'Ministry of culture',
  position: 'Intern',
  endYear: '2018',
  startYear: '2017',
  stack: [
    'Vue.js',
    'PHP',
    'Docker',
    'SQL',
    'ZendFramework 1',
  ],
  description: `
    Main activities: Development in PHP,
    VueJS, ZendFramework 1,
    Docker and SQL.
    Action on the project Salic, culture incentive.`,
});

const experiences = useExperiences();
const about = useAbout();

const aboutRef = ref(null);
const experienceRef = ref(null);

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
};

const handleIntersection = (entries: any[], observer: any) => {
  entries.forEach((entry: { isIntersecting: any; target: null; }) => {
    if (entry.isIntersecting) {
      if (entry.target === aboutRef.value) {
        console.log('Section 1 is in view');
      } else if (entry.target === experienceRef.value) {
        console.log('Section 2 is in view');
      }
    }
  });
};

let observer:IntersectionObserver;

onMounted(() => {
  observer = new IntersectionObserver(handleIntersection, options);
  observer.observe(aboutRef.value!);
  observer.observe(experienceRef.value!);
});

onUnmounted(() => {
  observer.disconnect();
});

</script>
