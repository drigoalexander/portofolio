<template>
  <div class="divide-y-[1px] divide-paragraph w-fit flex flex-col">
    <div class="space-y-1 mb-3">
      <h4 class="text-sm font-medium leading-none">
        Link To
      </h4>
    </div>

    <div
      class="flex h-5 items-center text-sm pt-4 divide-x-[1px] divide-paragraph"
    >
      <NuxtLink
        v-if="sourceCodeLink !== null"
        :to="sourceCodeLink"
        target="_blank"
        class="pr-3"
      >
        Source Code
      </NuxtLink>
      <div
        v-else
        class="line-through cursor-not-allowed pr-3"
      >
        No Link To Source Code
      </div>

      <NuxtLink
        v-if="projectLink !== null"
        :to="projectLink"
        target="_blank"
        class="pl-3"
      >
        Projects
      </NuxtLink>
      <div
        v-else
        class="line-through cursor-not-allowed pl-3"
      >
        No Link To Projects
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  sourceCodeLink: string;
  projectLink: string;
}>();
</script>
