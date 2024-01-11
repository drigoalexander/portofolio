<template>
  <div
    :class="{
      '-translate-y-[120%]': !modals,
      'translate-y-0': modals,
    }"
    class="left-[1%] top-[0.5%] flex justify-between items-start ease-in-out duration-300 transition fixed rounded-lg w-auto p-4 bg-neutral-100 dark:bg-neutral-950 shadow-xl text-neutral-950 dark:text-neutral-200 z-20"
  >
    <span class="text-sm leading-5 tracking-wide">
      Hi! This Portofolio Website are still <br>
      under development! Enjoy 😁 <br>
      <br>
      Oops, i forgot, use computer for better experience!! 🚀
    </span>

    <div
      class="relative w-auto group cursor-none"
      @click="modals = false"
    >
      <svg
        width="20"
        height="20"
        class="stroke-2 group"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          class="rotate-0 origin-center group-hover:rotate-[45deg] duration-500 ease-in-out stroke-neutral-950 dark:stroke-neutral-100"
          d="M18 6L6 18"
          stroke=""
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          class="rotate-0 origin-center group-hover:rotate-[-45deg] duration-500 ease-in-out stroke-neutral-950 dark:stroke-neutral-100"
          d="M6 6L18 18"
          stroke=""
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
</template>

<script setup>
const modals = ref(false);
defineProps({
  position: {
    type: String,
    default: "top-left",
    validator: (positionCard) =>
      ["top-left", "top-right", "bottom-left", "bottom-right"].includes(
        positionCard
      ),
  },
});
onMounted(() => {
  setTimeout((modals.value = true), 5000);
});
</script>
