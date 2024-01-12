<template>
  <div
    @click="active = !active"
    class="relative bg-white dark:bg-black rounded-lg duration-300 ease-in-out flex w-full max-w-2xl items-start justify-between p-4 group"
  >
    <div class="flex flex-col gap-2">
      <span
        class="ease-in-out capitalize duration-300 transition-all text-[clamp(0.875rem,4vw+1rem,1.125rem)] font-semibold leading-5 tracking-wide"
        >This is accordion header</span
      >
      <Transition name="list">
        <span
          v-if="active"
          class="duration-300 ease-in-out text-[clamp(0.75rem,4vw+1rem,0.875rem)] font-normal leading-6 tracking wider"
        >
          This is accordion collapse! so cool🚀
        </span>
      </Transition>
      <div
        :class="{
          'w-full': active,
          'w-0': !active,
        }"
        class="ease-in-out duration-300 absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-gradient1 to-gradient2"
      ></div>
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-[clamp(1.125rem,4vw+1rem,1.5rem)] rotate-90 group-hover:rotate-0 duration-300 ease-in-out"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
      />
    </svg>
  </div>
</template>

<script setup>
let active = ref(false);
</script>

<style scoped>
.list-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
