<template>
  <div
    class="flex-col gap-4 flex items-center justify-center h-screen w-full mx-auto"
  >
    <div
      class="w-full max-w-screen-md mx-auto flex items-center justify-center flex-col gap-6"
    >
      <div class="flex gap-10 text-black">
        {{ fluidFont(18, 24) }}
        <button @click.prevent="copyClipboard">
          copy
        </button>
      </div>

      <!-- <LinkCard>
        <template v-slot:paragraph>This is paragraph, so cool✌️ </template>
        <template v-slot:header> This is Header! </template>
      </LinkCard> -->
      <Accordion />
    </div>
  </div>
</template>

<script setup>
async function copyClipboard() {
  const result = fluidFont(14, 16);
  await navigator.clipboard.writeText(result).then((res) => alert(res));
}
</script>
