<template>
  <div style="font-family: Roboto, sans-serif">
    <div
      class="w-full fixed top-0 h-[10px] bg-gradient-to-r from-gradient1 to-gradient2 z-20"
    />

    <NuxtPage />
  </div>
</template>

<script setup>
const nuxtApp = useNuxtApp();

const position = ref("");
const display = ref("");
const X = ref(0);
const Y = ref(0);
const mappedMouseX = ref(0);

onMounted(() => {
  if (nuxtApp.$isComputer) {
    position.value = "fixed";
    display.value = "block";
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
  } else {
    display.value = "none";
  }
});
</script>
