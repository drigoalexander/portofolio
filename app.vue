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
</style>
