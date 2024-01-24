<template>
  <div style="font-family: Roboto, sans-serif">
    <div
      class="w-full fixed top-0 h-[10px] bg-gradient-to-r from-gradient1 to-gradient2 z-40"
    />
    <div
      v-if="$isComputer"
      id="rectangle"
      :style="`left: ${X}px; top: ${Y}px; rotate: ${mappedMouseX}deg; position: ${position}; display: ${display}`"
      class="fixed block origin-top-left pointer-events-none size-8 border-[1.5px] border-gradient1 z-[999] duration-300 ease-in-out transition -translate-x-1/2 -translate-y-1/2"
    />
    <div
      v-if="$isComputer"
      id="dot"
      :style="`left: ${X}px; top: ${Y}px; position: ${position}; display: ${display}`"
      class="fixed block pointer-events-none size-1.5 rounded-full bg-white left-1/2 -translate-x-1/2 -translate-y-1/2 dot-tracker z-[999] ease-in-out transition duration-300"
    />
    <NuxtPage id="container" />
  </div>
</template>

<script setup>
const { $isComputer } = useNuxtApp();
const position = ref("");
const display = ref("");
const X = ref(0);
const Y = ref(0);
const mappedMouseX = ref(0);

onMounted(() => {
  window.onmousemove = (event) => {
    const rec = document.getElementById("rectangle");
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
