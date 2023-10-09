<template>
  <div>
    <NuxtLayout>
      <LazyNuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - Drigo Alexander`
      : "Drigo Alexander - Personal Portofolio";
  },
});
</script>

<style>
html,
body {
  cursor: none;
}
.v-enter-active:before,
.v-leave-active:before {
  z-index: 40;
  content: "";
  height: 100vh;
  width: 100vw;
  background-size: 300% 300%;
  left: 0;
  top: 0;
  position: absolute;
  background-image: linear-gradient(
    to bottom right,
    transparent 0%,
    #ffc371 50%,
    #ff5f6d 100%
  );

  transition-property: all;
  transition-duration: 500ms;
  transition-timing-function: ease-out;
}

.v-enter-from:before {
  background-position: 0%;
}
.v-leave-to:before {
  background-position: 100%;
}
</style>
