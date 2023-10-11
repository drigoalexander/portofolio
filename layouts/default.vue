<template>
  <div
    class="w-full fixed top-0 h-[10px] bg-gradient-to-r from-gradient1 to-gradient2 z-20"
  ></div>
  <div
    id="rectangle"
    :style="`left: ${X}px; top: ${Y}px; rotate: ${mappedMouseX}deg`"
    class="origin-top-left pointer-events-none fixed w-8 aspect-square border-[1.5px] border-gradient1 z-[999] duration-300 ease-in-out transition -translate-x-1/2 -translate-y-1/2"
  ></div>
  <div
    :style="`left: ${X}px; top: ${Y}px`"
    class="pointer-events-none fixed w-1.5 aspect-square rounded-full bg-neutral-700 dark:bg-white left-1/2 -translate-x-1/2 -translate-y-1/2 dot-tracker z-[999] ease-in-out transition duration-300"
  ></div>
  <NuxtPage />
</template>

<script setup>
import { useToggle, useDark } from "@vueuse/core";

const isDark = useDark();
const X = ref(0);
const Y = ref(0);
const mappedMouseX = ref(0);
// const mouseClicked = ref(false);
onMounted(() => {
  const rec = document.getElementById("rectangle");
  window.onmousemove = (event) => {
    const windowWidth = window.innerWidth;
    mappedMouseX.value = (event.clientX / windowWidth) * 1440;
    X.value = event.clientX;
    Y.value = event.clientY;

    rec.animate(
      {
        left: `${X.value}px`,
        top: `${Y.value}px`,
      },
      {
        duration: 1000,
        easing: "ease",
      }
    );
  };
});
</script>
