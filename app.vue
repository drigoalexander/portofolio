<template>
  <div class="bg-black min-h-screen">
    <LazyNuxtLayout>
      <LazyNuxtPage />
    </LazyNuxtLayout>
    <UNotifications color="rose" />
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

onMounted(() => {
  const nuxtApp = useNuxtApp();
  const browserName = navigator.userAgent.toLowerCase();
  const os = ["macintosh", "windows"].some((keyword) =>
    browserName.includes(keyword)
  );
  nuxtApp.provide("isComputer", os);
});
</script>

<style>
html,
body {
  cursor: none;
}
</style>
