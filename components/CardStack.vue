<template>
  <UTooltip>
    <template #text>
      {{ techName }}
    </template>
    <div
      class="scale-[1.75] inline-flex p-[1px] rounded-md shadow-md shadow-black/20 hover:bg-gradient-to-r ease-in-out duration-300 from-gradient1 to-gradient2 items-center justify-center"
    >
      <span class="bg-card px-3 py-2 rounded-md">
        <UIcon
          :name="logo"
          dynamic
        />
      </span>
    </div>
  </UTooltip>
</template>

<script setup lang="ts">
defineProps<{ logo: string; techName: string }>();
</script>
