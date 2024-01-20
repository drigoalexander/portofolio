<template>
  <NuxtLink
    style="font-family: 'inter', sans-serif"
    :to="path"
    class="cursor-none w-full max-w-screen-lg relative bg-card ease-in-out duration-300 py-4 flex items-center justify-between group"
  >
    <div
      class="w-0 group-hover:w-full ease-in-out duration-300 bg-gradient-to-r from-gradient1 to-gradient2 transition-all h-[1px] bg-white absolute bottom-0"
    />
    <div class="flex flex-col gap-2 items-start">
      <span
        class="text-black dark:text-white font-semibold text-[clamp(1rem,4vw+1rem,1.25rem) ]"
      >{{ header }}</span>
      <span
        class="capitalize text-[#8A8A8E] text-[clamp(0.5rem,4vw+0.5rem,0.75rem)) font-light] group-hover:text-[#989899] ease-in-out duration-300"
      >{{ paragraph }}</span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  header: string;
  paragraph: string;
  path: string;
}>();
</script>
