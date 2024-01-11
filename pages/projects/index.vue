<script setup>
const cardDesc = ref([
  {
    projects: "Surabaya MUN",
    Description: " Website to promote and register a national scaled MUN event",
    Tech: [
      "https://res.cloudinary.com/dxy6iowwg/image/upload/v1695908165/985px-Laravel.svg_xjglxk.png",
      "https://res.cloudinary.com/dxy6iowwg/image/upload/v1695908212/tailwind-logo_m9zejr.png",
    ],
    path: "surabaya-mun",
  },
  {
    projects: "Nuxt Insight",
    Description:
      "Webapp for e-learning focused on Nuxt, this project purposed is for learning nuxt in more depth",
    Tech: [
      "https://res.cloudinary.com/dxy6iowwg/image/upload/v1695909621/nuxt-logo-64E0472AA8-seeklogo.com_1_khqk5b.png",
      "https://res.cloudinary.com/dxy6iowwg/image/upload/v1695908212/tailwind-logo_m9zejr.png",
    ],
    path: "nuxt-insight",
  },
  {
    projects: "C-Loyal",
    Description:
      "Webapp to calculate user loyalty point, part of the final project of alterra academy ",
    Tech: [
      "https://res.cloudinary.com/dxy6iowwg/image/upload/v1695909621/nuxt-logo-64E0472AA8-seeklogo.com_1_khqk5b.png",
      "https://res.cloudinary.com/dxy6iowwg/image/upload/v1695908212/tailwind-logo_m9zejr.png",
    ],
    path: "c-loyal",
  },
  {
    projects: "Blissful Beginnings",
    Description:
      "Webapp to reserve a wedding organizer and at the sametime a marketplace for third party ",
    Tech: [
      "https://res.cloudinary.com/dxy6iowwg/image/upload/v1695909621/nuxt-logo-64E0472AA8-seeklogo.com_1_khqk5b.png",
      "https://res.cloudinary.com/dxy6iowwg/image/upload/v1695908212/tailwind-logo_m9zejr.png",
    ],
    path: "blissful-beginnings",
  },
]);
</script>

<template>
  <div class="flex w-full h-screen items-center justify-center">
    <ModalsCard :position="'top-left'" />

    <div
      style="font-family: MuseoModerno, sans-serif"
      class="py-10 flex flex-col gap-10 w-full min-h-screen items-center justify-center z-10 px-[5%] bg-neutral-100 dark:bg-black"
    >
      <header class="items-center flex w-full justify-end gap-4">
        <h3
          class="text-[2.5vw] uppercase text-neutral-950 dark:text-neutral-200 tracking-widest"
        >
          Currated Works
        </h3>

        <svg
          class="hover:rotate-90 duration-300 ease-in-out cursor-none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="25px"
          height="31px"
          viewBox="0 0 25 30"
          version="1.1"
          @click="$router.push('/')"
        >
          <g id="surface1">
            <path
              class="stroke-neutral-950 dark:stroke-neutral-200"
              style="
                fill: none;
                stroke-width: 5;
                stroke-linecap: butt;
                stroke-linejoin: miter;

                stroke-opacity: 1;
                stroke-miterlimit: 4;
              "
              d="M 24.5 0.625 L 24.5 58.8125 M 24.5 58.8125 C 24.5 58.8125 29.09375 32.78125 49 32.78125 M 24.5 58.8125 C 24.5 58.8125 19.90625 32.78125 0 32.78125 "
              transform="matrix(0.510204,0,0,0.5,0,0)"
            />
          </g>
        </svg>
      </header>

      <main
        class="flex lg:flex-row justify-evenly items-center w-full gap-4 flex-wrap"
      >
        <NuxtLink
          v-for="(el, idx) in cardDesc"
          :key="idx"
          :to="`/projects/${el.path}`"
        >
          <ProjectCard
            :projects="el.projects"
            :description="el.Description"
            :tech-list="el.Tech"
          />
        </NuxtLink>
      </main>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(v-bind(ComputedColumns), 1fr);
  grid-template-rows: repeat(v-bind(ComputedRows), 1fr);
}

main {
  font-family: "Open Sans";
}
</style>
