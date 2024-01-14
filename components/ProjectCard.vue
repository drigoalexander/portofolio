<template>
  <div
    class="w-[20vmax] rounded-md cursor-none aspect-[1/1.6] border-neutral-950 dark:border-white relative border-[1px] group hover:border-transparent dark:hover:border-transparent duration-500 ease-in-out"
  >
    <div
      class="before:z-0 before:content-[''] before:h-full before:w-full before:bg-[length:300%_300%] before:bg-[0%_0%] group-hover:before:bg-[100%_100%] group-hover:before:scale-105 before:duration-500 before:transition-all before:ease-out before:left-0 before:top-0 before:absolute before:bg-gradient-to-br before:from-transparent before:from-50% before:via-[#ffc371] before:to-[#ff5f6d]"
    />

    <div
      class="flex flex-col z-10 text-neutral-950 dark:text-neutral-200 p-6 lg:p-10 relative gap-4 h-full justify-between"
    >
      <div class="flex flex-col gap-4">
        <h4
          class="font-semibold text-[4vw] md:text-[2vw] lg:text-xl leading-6 tracking-widest"
        >
          {{ projects }}
        </h4>
        <p
          class="font-light text-[2vw] md:text-[1.5vw] lg:text-base leading-5 tracking-wider"
        >
          {{ description }}
        </p>
      </div>

      <div class="flex items-center gap-4 grayscale">
        <img
          v-for="(el, idx) in techList"
          :key="idx"
          class="w-1/5"
          :src="el"
          alt=""
        >
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  techList: {
    type: Array,
  },
  projects: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
});
</script>
