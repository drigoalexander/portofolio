<template>
  <div class="w-full relative z-10">
    <!-- Bumper -->
    <div
      v-if="!isVisited"
      v-once
      class="bg-neutral-100 w-full h-screen fixed items-center justify-center z-30 bumper"
    >
      <svg
        class="fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="150px"
        height="150px"
        viewBox="0 0 128 128"
        version="1.1"
      >
        <g id="surface1">
          <path
            style="stroke: black; fill: black; fill-opacity: 0"
            d="M 128 88.941406 L 128 102.398438 L 95.335938 102.398438 L 84.597656 88.941406 L 72.878906 74.261719 L 61.164062 88.941406 L 50.414062 102.398438 L 9.601562 102.398438 C 4.296875 102.398438 0 97.882812 0 92.308594 L 0 74.460938 C 0 70.347656 2.375 66.644531 6 65.105469 L 12.800781 62.21875 L 23.476562 57.6875 L 29.476562 55.132812 C 33.339844 53.5 37.75 54.652344 40.433594 58 L 44.601562 63.226562 L 46.441406 65.523438 L 38.085938 76 L 33.617188 70.40625 C 32.757812 69.296875 31.261719 68.902344 29.96875 69.449219 L 14.800781 75.878906 C 13.570312 76.425781 12.785156 77.652344 12.800781 79 L 12.800781 85.578125 C 12.800781 87.4375 14.234375 88.941406 16 88.941406 L 44.453125 88.941406 L 44.738281 88.589844 L 57.957031 72.023438 L 64.523438 63.796875 L 48.941406 44.265625 C 44.707031 38.960938 37.707031 37.125 31.601562 39.71875 L 12.800781 47.703125 L 0 53.140625 L 0 38.628906 L 25.191406 27.929688 C 37.398438 22.75 51.398438 26.414062 59.863281 37.015625 L 72.878906 53.328125 L 81.234375 63.796875 L 101.300781 88.941406 Z "
          />
        </g>

        <g id="surface2">
          <path
            style="stroke: black; fill: black; fill-opacity: 0"
            d="M 94.875 25.773438 L 84.125 39.234375 L 77.089844 48.050781 L 85.453125 58.5 L 100.84375 39.21875 L 128 39.21875 L 128 25.769531 Z "
          />
        </g>
        <g id="surface2">
          <path
            style="stroke: black; fill: black; fill-opacity: 0"
            d="M 94.875 25.773438 "
          />
        </g>
      </svg>
    </div>
    <!-- End Bumper -->

    <UContainer class="py-16 grid grid-cols-4 gap-8">
      <!-- Identity -->
      <div
        class="content space-y-6 col-span-4 md:col-span-2 bg-card rounded-xl p-8 text-white row-span-2 divide-y-2 divide-[#989899]/50"
      >
        <h1
          class="text-[clamp(1rem,4vw+1rem,1.25rem)] font-thin capitalize tracking-wide text-[#989899]"
        >
          <span
            class="text-white font-normal tracking-tight text-[clamp(1.25rem,4vw+1rem,1.5rem)]"
          >Drigo Alexander</span>
          ⌜ Junior Developer Who Loves
          <span class="hover:text-[#00DC82] ease-in-out duration-300">Nuxt</span>
          and
          <span class="hover:text-gradient1 ease-in-out duration-300">Frontend</span>
          things ✌️
        </h1>

        <p class="tracking-wide pt-6 leading-7 text-[#989899]">
          Hey there! Just graduated from Institut Teknologi Sepuluh Nopember,
          I'm a Frontend Developer crafting wonders with
          <UTooltip text="Nuxt 3 Are My On The Go JS Framework">
            <span
              class="border-b-[1px] hover:text-[#00DC82] ease-in-out duration-300"
            >
              Nuxt</span>
          </UTooltip>
          , and currently exploring the backend universe with
          <UTooltip text="Currently, Building App With Go">
            <span
              class="border-b-[1px] hover:text-[#29BEB0] ease-in-out duration-300"
            >Go</span>
          </UTooltip>.
        </p>
      </div>
      <!-- End Identity -->

      <!-- Framework -->
      <div
        class="content col-span-4 md:col-span-2 bg-card p-8 rounded-xl space-y-8 row-span-1"
      >
        <h2
          class="text-[clamp(1.25rem,4vw+1rem,1.5rem)] font-normal text-white"
        >
          Tech Stack
          <span
            class="text-[clamp(1rem,4vw+1rem,1.25rem)] font-thin capitalize tracking-wide text-[#989899]"
          >⌜ for Daily Coding</span>
        </h2>

        <div class="flex flex-wrap items-center justify-around gap-10">
          <LazyCardStack
            v-for="el in icon"
            :key="el.techName"
            :tech-name="el.techName"
            :logo="el.icon"
          />
        </div>
      </div>
      <!-- End Framework -->

      <a
        href="/Drigo_Alexander-Resume.pdf"
        download
        class="content cursor-none col-span-4 md:col-span-2 flex justify-between items-center row-span-1 group bg-card p-8 rounded-xl relative text-[clamp(1rem,4vw+1rem,1.25rem)] capitalize tracking-wide text-white overflow-hidden"
        @click="
          toast.add({
            title: 'Downloading! Hope You Interested With My Resume',
            color: 'orange',
            timeout: 2000,
          })
        "
      >
        <div
          class="absolute left-1/2 -translate-x-1/2 -bottom-10 bg-stone-900 z-10 w-0 h-full scale-0 duration-500 ease-in-out group-hover:scale-[2] group-hover:w-full"
        />
        <span class="z-20 relative"> Download my resume here </span>
        <UIcon
          name="i-system-uicons-document"
          class="scale-150 relative z-20"
        />
      </a>

      <div
        id="projects"
        class="content h-auto col-span-4 md:col-span-3 row-span-2 bg-card rounded-xl p-8 divide-y-[1px] divide-[#989899] text-white"
      >
        <h1 class="font-semibold text-[clamp(1.25rem,4vw+1rem,1.5rem)]">
          Personal Portfolio
          <span
            class="tracking-wide pt-6 leading-7 text-[#989899] text-[clamp(1rem,4vw+1rem,1.25rem)]"
          >
            ⌜ Showcasing Varied Projects I've Successfully Developed and
            Implemented.
          </span>
        </h1>

        <div class="w-full mt-6 flex flex-col gap-6">
          <LazyLinkCard
            v-for="value in content"
            :key="value._id"
            :header="value.title"
            :paragraph="value.description"
            :path="value._path"
          />
        </div>
      </div>

      <div
        class="content col-span-4 md:col-span-1 row-span-2 bg-card p-8 rounded-xl divide-y-[1px] divide-[#989899]"
      >
        <h1
          class="text-[clamp(1.25rem,4vw+1rem,1.5rem)] font-semibold capitalize text-white"
        >
          Tools
          <span
            class="tracking-wide pt-6 leading-7 text-[#989899] text-[clamp(0.75rem,4vw+1rem,1rem)]"
          >⌜ Something That I Found on the internet, and why not making it to
            help others?
          </span>
        </h1>
        <div class="w-full mt-6 flex flex-col gap-6">
          <LazySmallLinkCard
            disabled
            class="cursor-not-allowed"
            header="Fluid Element"
            paragraph="Generate Tailwind / CSS Code For Responsive Text / Width"
          />
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup>
import { useSessionStorage } from "@vueuse/core";

const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();
const toast = useToast();
const { $anime } = useNuxtApp();
const isVisited = useSessionStorage("isVisited", false);

onMounted(async () => {
  const tl = gsap.timeline();
  const tl2 = gsap.timeline();
  if (isVisited.value === false) {
    $anime.set("#surface2 path", {
      strokeDashoffset: $anime.setDashoffset,
    });

    $anime({
      targets: "#surface1 path",
      strokeDashoffset: [$anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 1500,
      delay: function (el, i) {
        return i * 250;
      },
      direction: "normal",
      complete: function () {
        $anime({
          targets: "#surface2 path",
          strokeDashoffset: [$anime.setDashoffset, 0],
          easing: "easeInOutSine",
          duration: 500,
          delay: function (el, i) {
            return i * 250;
          },
          direction: "normal",
          complete: function () {
            const endAnimation = $anime({
              targets: "#surface2 path",
              fillOpacity: 1,
              duration: 500,
              delay: 70,
              easing: "cubicBezier(.5, .05, .1, .3)",
            });

            endAnimation.finished.then(
              $anime({
                targets: ".bumper",
                opacity: 0,
                zIndex: -10,
                duration: 500,
                delay: 1500,
                easing: "cubicBezier(.5, .05, .1, .3)",
              }),
              setTimeout(() => {
                gsap.utils.toArray(".content").forEach((content) => {
                  tl2.from(content, {
                    opacity: 0,
                    y: 50,
                    duration: 0.5,
                    stagger: 0.05,
                    ease: "power3.out",
                  });
                });
              }, 1000)
            );
          },
        });
        $anime({
          targets: "#surface1 path",
          fillOpacity: 1,
          duration: 1500,
          delay: 500,
          easing: "cubicBezier(.5, .05, .1, .3)",
        });
      },
    });
  }
  setTimeout(() => {
    isVisited.value = true;
  }, 5000);

  tl.from("#footer", {
    translateY: "200%",
    scale: 0,
    borderRadius: "9999px",
    opacity: 0,
    ease: "sine.inOut",
  });

  ScrollTrigger.create({
    trigger: "#container",
    animation: tl,
    onEnter: {},
    start: "top top ",
    pinSpacing: false,
    scrub: true,
  });
});

const icon = [
  {
    icon: "i-mdi-tailwind",
    techName: "TailwindCSS",
  },
  {
    icon: "i-simple-icons-nuxtdotjs",
    techName: "Nuxt",
  },
  {
    icon: "i-simple-icons-go",
    techName: "Go",
  },
  {
    icon: "i-simple-icons-prisma",
    techName: "Prisma",
  },
  {
    icon: "i-logos-pinia",
    techName: "Pinia",
  },
];

const content = await queryContent("projects").find();
</script>
