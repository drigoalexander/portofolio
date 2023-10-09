<template>
  <div
    @click="toggleDark()"
    class="border-[1px] dark:border-none border-gradient1 relative inline-flex items-center cursor-none w-14 h-6 bg-neutral-200 dark:bg-gradient-to-r dark:from-gradient1 dark:to-gradient2 rounded-full duration-300 ease-in-out"
  >
    <div
      class="absolute translate-x-0 left-[5%] dark:translate-x-[180%] h-[70%] aspect-square rounded-full bg-black top-1/2 -translate-y-1/2 duration-300 ease-in-out"
    ></div>
  </div>
</template>

<script setup>
import { useToggle, useDark } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
