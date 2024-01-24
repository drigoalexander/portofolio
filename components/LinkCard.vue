<template>
  <NuxtLink
    :to="path"
    class="cursor-none w-full max-w-screen-lg relative bg-card ease-in-out duration-300 py-4 flex items-center justify-between group"
  >
    <div
      class="w-0 group-hover:w-full ease-in-out duration-300 bg-gradient-to-r from-gradient1 to-gradient2 transition-all h-[1px] bg-white absolute bottom-0"
    />
    <div class="flex flex-col gap-2 items-start">
      <span
        class="text-white font-semibold text-[clamp(1rem,4vw+1rem,1.25rem) ]"
      >{{ header }}</span>
      <span
        class="capitalize text-[#8A8A8E] text-[clamp(0.875rem,4vw+1rem,1rem)) font-light] group-hover:text-[#989899] ease-in-out duration-300"
      >{{ paragraph }}</span>
    </div>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="size-6 ease-in-out duration-300 me-1 group-hover:stroke-[#989899] stroke-transparent"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
      />
    </svg>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  header: string;
  paragraph: string;
  path: string;
}>();
</script>
