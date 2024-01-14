<template>
  <div
    class="flex items-start gap-2 relative w-full rounded-lg border p-4 [&amp;>svg~*]:pl-7 [&amp;>svg+div]:translate-y-[-3px] [&amp;>svg]:absolute [&amp;>svg]:left-4 [&amp;>svg]:top-4 [&amp;>svg]:text-foreground bg-background text-foreground"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="size-4"
    >
      <polyline points="4 17 10 11 4 5" />
      <line
        x1="12"
        x2="20"
        y1="19"
        y2="19"
      />
    </svg>

    <div class="flex flex-col gap-1">
      <h5 class="mb-1 font-medium leading-none tracking-tight">
        Information!
      </h5>
      <div class="text-sm [&amp;_p]:leading-relaxed">
        <ContentSlot :use="$slots.default" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
