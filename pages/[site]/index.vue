<template>
  <div
    style="font-family: MuseoModerno"
    class="fixed left-0 top-0 w-screen h-screen bg-neutral-100 dark:bg-neutral-950"
  >
    <svg
      class="fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 opacity-20 blur-[3px] scale-150"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="150px"
      height="150px"
      viewBox="0 0 128 128"
      version="1.1"
    >
      <g id="surface1">
        <path
          class="fill-none stroke-[1px] stroke-black dark:stroke-white"
          d="M 128 88.941406 L 128 102.398438 L 95.335938 102.398438 L 84.597656 88.941406 L 72.878906 74.261719 L 61.164062 88.941406 L 50.414062 102.398438 L 9.601562 102.398438 C 4.296875 102.398438 0 97.882812 0 92.308594 L 0 74.460938 C 0 70.347656 2.375 66.644531 6 65.105469 L 12.800781 62.21875 L 23.476562 57.6875 L 29.476562 55.132812 C 33.339844 53.5 37.75 54.652344 40.433594 58 L 44.601562 63.226562 L 46.441406 65.523438 L 38.085938 76 L 33.617188 70.40625 C 32.757812 69.296875 31.261719 68.902344 29.96875 69.449219 L 14.800781 75.878906 C 13.570312 76.425781 12.785156 77.652344 12.800781 79 L 12.800781 85.578125 C 12.800781 87.4375 14.234375 88.941406 16 88.941406 L 44.453125 88.941406 L 44.738281 88.589844 L 57.957031 72.023438 L 64.523438 63.796875 L 48.941406 44.265625 C 44.707031 38.960938 37.707031 37.125 31.601562 39.71875 L 12.800781 47.703125 L 0 53.140625 L 0 38.628906 L 25.191406 27.929688 C 37.398438 22.75 51.398438 26.414062 59.863281 37.015625 L 72.878906 53.328125 L 81.234375 63.796875 L 101.300781 88.941406 Z "
        />
      </g>

      <g id="surface2">
        <path
          class="fill-none stroke-[1px] stroke-black dark:stroke-white"
          d="M 94.875 25.773438 L 84.125 39.234375 L 77.089844 48.050781 L 85.453125 58.5 L 100.84375 39.21875 L 128 39.21875 L 128 25.769531 Z "
        />
      </g>
      <g id="surface2">
        <path
          class="fill-none stroke-[1px] stroke-black dark:stroke-white"
          d="M 94.875 25.773438 "
        />
      </g>
    </svg>
    <div class="fixed z-20 left-1/2 bottom-[3vh] -translate-x-1/2">
      <DarkSwitch />
    </div>
    <div
      class="words text-[calc((100vw*36)/375)] gap-2 text-neutral-950 dark:text-neutral-200 w-full h-full flex items-center justify-center"
      v-html="bumper"
    ></div>
  </div>
</template>

<script setup>
import useSplit from "../../composables/useSplit";
const { $anime } = useNuxtApp();

const bumper = useSplit("Coming Soon");

onMounted(() => {
  $anime({
    targets: ".words span",
    scale: [
      { value: 0.5, easing: "easeOutSine", duration: 500 },
      { value: 1, easing: "easeInOutQuad", duration: 1200 },
    ],
    rotate: [
      { value: 720, easing: "easeOutSine", duration: 500 },
      { value: -720, easing: "easeInOutQuad", duration: 1200 },
    ],
    delay: $anime.stagger(200),
    easing: "easeInOutQuad",
    loop: true,
  });
});
</script>
