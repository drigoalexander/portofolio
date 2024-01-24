<template>
  <div
    id="footer"
    class="scale-100 relative z-0 px-12 md:px-24 mt-16 py-32 grid content-between w-full text-black min-h-screen bg-white grid-cols-2"
  >
    <div
      class="tracking-wide text-sm max-md:col-span-2 md:max-[850px]:col-span-2 col-span-1 col-start-1 md:col-start-2 flex flex-col md:flex-row gap-8 items-start justify-center"
    >
      <div class="flex flex-col gap-3">
        <h6 class="text-base footerText">Internet</h6>
        <div class="flex flex-row md:flex-col gap-3">
          <NuxtLink
            v-for="value in internet"
            :key="value.name"
            :to="value.link"
            target="_blank"
            class="text-[#989899] hover:scale-110 duration-300 ease-in-out footerText"
          >
            {{ value.name }}
          </NuxtLink>
        </div>
      </div>

      <h6 class="text-base max-w-sm footerText">
        Hi, There! 👋. <br />
        <span class="text-sm footerText">
          This is the end of my website, Hope you enjoy my website.
          <br /><br />
          <span class="footerText">
            Are you searching for someone that can help
            <UIcon name="i-fluent-emoji-index-pointing-at-the-viewer" /> with
            nuxt <UIcon name="i-fluent-emoji-eyes" />? I can help you build
            something!</span
          >
        </span>
      </h6>

      <h6 class="text-base max-w-md self-start md:self-end footerText">
        Based in Indonesia, Jakarta.
      </h6>
    </div>

    <a
      class="relative group col-span-2 md:p-8 text-[clamp(2rem,4vw+1rem,4rem)] flex justify-between items-center w-full h-auto"
    >
      <h4 class="group-hover:tracking-wide ease-in-out duration-300 footerText">
        Hit me up!
      </h4>
      <UIcon
        name="i-fluent-emoji-call-me-hand"
        class="origin-bottom-left wiggle footerText"
      />

      <div
        class="absolute bottom-0 left-0 w-0 group-hover:w-full rounded-full h-[3px] bg-gradient-to-r from-gradient1 to-gradient2 duration-300 ease-in-out"
      />
    </a>
  </div>
</template>

<script setup>
const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();

onMounted(() => {
  const targets = gsap.utils.toArray(".footerText");
  const tl = gsap.timeline();

  targets.forEach((el) => {
    tl.from(el, {
      opacity: 0,
      translateY: "300px",
      stagger: 1,
      duration: 0.5,
      ease: "bounce.inOut",
    });
  });

  ScrollTrigger.create({
    animation: tl,
    trigger: "#container",
    start: "bottom top",
    scrub: true,
    pin: true,
    pinSpacing: false,
  });
});

const internet = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/drigoasihombing/",
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/drigo-alexander-9a36a01a8/",
  },
  {
    name: "Github",
    link: "https://github.com/drigoalexander",
  },
];
</script>

<style scoped>
@keyframes wiggle {
  0%,
  100% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(-15deg);
  }
}

.wiggle {
  animation: wiggle 2s ease-in-out infinite;
}
</style>
