<template>
  <div
    :class="{
      '-translate-y-[150%]': !modals,
      'translate-y-0': modals,
    }"
    class="left-[1%] top-[1vh] md:top-[3dvh] flex gap-10 justify-between items-start ease-in-out duration-300 transition fixed rounded-lg w-auto p-4 bg-black border-[1px] border-card z-30"
  >
    <span class="text-sm tracking-wide text-white">
      Attention Reader!<br>
      This Project Has Taken Down Due To {{ text }} 😁
    </span>

    <div
      class="relative w-auto group cursor-none"
      @click="modals = false"
    >
      <svg
        width="20"
        height="20"
        class="stroke-2 stroke-white group"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          class="rotate-0 origin-center group-hover:rotate-[45deg] duration-500 ease-in-out"
          d="M18 6L6 18"
          stroke=""
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          class="rotate-0 origin-center group-hover:rotate-[-45deg] duration-500 ease-in-out"
          d="M6 6L18 18"
          stroke=""
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
const modals = ref(false);
defineProps<{
  text: string;
}>();
onMounted(() => {
  setTimeout(() => (modals.value = true), 5000);
});
</script>
