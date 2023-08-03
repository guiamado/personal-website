<template>
  <div class="container mx-auto">
    <div class="flex justify-between min-h-screen flex-wrap px-4 py-12 lg:py-0">
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
            <nav-list :hovered-item="hoveredNav" @nav-change="onNavChange" />
          </div>

          
        </div>
        <div class="flex items-end gap-6 mb-4 lg:max-xl:mb-0 justify-center lg:justify-start xl:justify-start">
          <base-icon v-slot="{ color }">
            <IconBrandGithub :size="30" :color="color" />
          </base-icon>
          <base-icon v-slot="{ color }">
            <IconBrandLinkedin :size="30" :color="color" />
          </base-icon>
          <base-icon v-slot="{ color }">
            <IconMail :size="30" :color="color" />
          </base-icon>
          <base-icon v-slot="{ color }">
            <IconBrandWhatsapp :size="30" :color="color" />
          </base-icon>
        </div>
      </div>
      <div class="text-white/60 lg:w-1/2 lg:py-24">
        <section ref="aboutRef" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
          <div>
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
      class="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute min-h-screen"
      :style="styledCursor"
    />
  </div>
</template>

<script setup lang="ts">
import { IconBrandGithub, IconBrandLinkedin, IconMail, IconBrandWhatsapp } from '@tabler/icons-vue';
import { NavItemEnum } from '#imports';

const styledCursor = ref(`radial-gradient(600px at 100px 100px, rgb(15 118 110 / 20%), transparent 80%);`);

const { x, y } = useMouse();
watch([x, y], ([x, y]) => {
  styledCursor.value = `background: radial-gradient(600px at ${x}px ${y}px, rgb(92 52 137 / 20%), transparent 80%);`;
});

const experiences = useExperiences();
const about = useAbout();

const aboutRef = ref<HTMLElement | null>(null);
const experienceRef = ref<HTMLElement | null>(null);

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
};

const hoveredNav = ref<NavItemEnum>(NavItemEnum.ABOUT);

const onNavChange = (value: NavItemEnum) => {
  if (value === NavItemEnum.EXPERIENCE && experienceRef.value) {
    experienceRef.value.scrollIntoView({ behavior: 'smooth' });
  }

  if (value === NavItemEnum.ABOUT && aboutRef.value) {
    aboutRef.value.scrollIntoView({ behavior: 'smooth' });
  }
}

const handleIntersection = (entries: any[], observer: any) => {
  entries.forEach((entry: { isIntersecting: any; target: null; }, index) => {
    if (entry.isIntersecting) {
      if (entry.target === aboutRef.value) {
        hoveredNav.value = NavItemEnum.ABOUT;
      } else if (entry.target === experienceRef.value) {
        hoveredNav.value = NavItemEnum.EXPERIENCE;
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
