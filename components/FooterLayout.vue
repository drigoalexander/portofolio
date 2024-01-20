<template>
  <div
    id="footer"
    class="px-24 mt-16 py-32 grid content-between w-full min-h-screen bg-black grid-cols-2 text-white"
  >
    <div
      class="tracking-wide text-sm col-span-2 md:col-span-1 col-start-1 md:col-start-2 flex flex-col md:flex-row gap-8 items-start justify-center"
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

      <h6 class="text-base max-w-sm capitalize footerText">
        Hi, There! 👋. <br />
        <span class="text-sm">
          This is the end of my website, i hope you enjoy my website.
          <br /><br />
          Are you searching for someone that can help 🫵 with nuxt 🫨? I can help
          you with it
        </span>
      </h6>

      <h6 class="text-base max-w-md self-start md:self-end footerText">
        Based in Indonesia, Jakarta.
      </h6>
    </div>

    <a
      class="relative group uppercase col-span-2 p-8 text-[clamp(1.5rem,4vw+1rem,4rem)] flex justify-between items-center justify-self-end place-content-end self-end w-full h-auto"
    >
      <h4 class="group-hover:tracking-wide ease-in-out duration-300">
        CONTACT ME
      </h4>
      <span
        class="group-hover:translate-x-2 group-hover:-translate-y-2 duration-300 ease-in-out"
        >🚀</span
      >
      <div
        class="absolute bottom-0 left-0 w-0 group-hover:w-full rounded-full h-[1px] bg-gradient-to-r from-gradient1 to-gradient2 duration-300 ease-in-out"
      ></div>
    </a>
  </div>
</template>

<script setup lang="ts">
const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();
const selected = ref(false);

onMounted(() => {
  const tl = gsap.timeline();
  tl.from(".footerText", {
    opacity: 0,
    translateY: "100px",
    ease: "sine.in",
  });

  ScrollTrigger.create({
    animation: tl,
    trigger: "#hitpoint",
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
