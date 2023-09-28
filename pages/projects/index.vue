<script setup>
const { $anime } = useNuxtApp();

const modals = ref(false);
const columns = ref(1);
const rows = ref(1);
const widthRec = ref(50);
const heightRec = ref(50);
const themes = ref(["#f5f5f5", "#171717"]);
let themeIdx = ref(0);

onMounted(() => {
  columns.value = Math.floor(document.body.clientWidth / widthRec.value);
  rows.value = Math.floor(document.body.clientHeight / heightRec.value);

  window.addEventListener("resize", () => {
    columns.value = Math.floor(document.body.clientWidth / widthRec.value);
    rows.value = Math.floor(document.body.clientHeight / heightRec.value);
  });

  setTimeout((modals.value = true), 5000);
});

const ComputedColumns = computed(() => {
  return columns.value;
});

const ComputedRows = computed(() => {
  return rows.value;
});

function animate(idx) {
  themeIdx.value++;

  if (themeIdx.value === 2) {
    themeIdx.value = 0;
  }
  $anime({
    targets: ".tiles",
    backgroundColor: themes.value[themeIdx.value],
    delay: $anime.stagger(30, {
      grid: [columns.value, rows.value],
      from: idx,
    }),
  });
}

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
    projects: "Nuxt Course",
    Description:
      "Webapp for e-learning focused on Nuxt, this project purposed is for learning nuxt in more depth",
    Tech: [
      "https://res.cloudinary.com/dxy6iowwg/image/upload/v1695909621/nuxt-logo-64E0472AA8-seeklogo.com_1_khqk5b.png",
      "https://res.cloudinary.com/dxy6iowwg/image/upload/v1695908212/tailwind-logo_m9zejr.png",
    ],
    path: "nuxt-course",
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
  <div
    :class="{
      '-translate-y-[120%]': modals === false,
      'translate-y-0': modals === true,
    }"
    class="flex justify-between items-start ease-in-out duration-300 transition fixed rounded-lg w-auto p-4 bg-neutral-950 shadow-xl text-neutral-200 left-[1%] top-[0.5%] z-20"
  >
    <span class="text-sm">
      Hi! This Portofolio Website are still <br />
      under development! Enjoy 😁 <br />
      <br />
      Oops, i forgot, use computer for better experience!! 🚀
    </span>

    <div class="relative w-auto group cursor-pointer" @click="modals = false">
      <svg
        width="20"
        height="20"
        class="stroke-2 group"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          class="rotate-0 origin-center group-hover:rotate-[45deg] duration-500 ease-in-out stroke-white dark:stroke-dark-bg"
          d="M18 6L6 18"
          stroke=""
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          class="rotate-0 origin-center group-hover:rotate-[-45deg] duration-500 ease-in-out stroke-white dark:stroke-dark-bg"
          d="M6 6L18 18"
          stroke=""
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
  <div class="flex w-full h-screen items-center justify-center">
    <div
      class="w-screen h-screen wrapper fixed z-0 top-0 left-0 gap-0"
      style="
         {
          grid-template-columns: repeat(var(--col), 1fr);
          grid-template-rows: repeat(var(--row), 1fr);
        }
      "
    >
      <div
        class="aspect-square w-[55px] tiles"
        v-for="(el, idx) in ComputedColumns * ComputedRows"
        @click="animate(idx)"
        :key="el"
      ></div>
    </div>

    <div
      style="font-family: MuseoModerno"
      class="py-10 flex flex-col gap-10 w-full min-h-screen items-center justify-center z-10 px-[5%] bg-black"
    >
      <header class="items-center flex w-full justify-end gap-4">
        <h3 class="text-[2.5vw] uppercase text-white tracking-widest">
          Currated Works
        </h3>

        <svg
          class="hover:rotate-90 duration-300 ease-in-out cursor-pointer"
          @click="$router.push('/')"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="25px"
          height="31px"
          viewBox="0 0 25 30"
          version="1.1"
        >
          <g id="surface1">
            <path
              style="
                fill: none;
                stroke-width: 5;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke: rgb(100%, 100%, 100%);
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
        <NuxtLink v-for="(el, idx) in cardDesc" :to="`/projects/${el.path}`">
          <Card
            :Projects="el.projects"
            :Description="el.Description"
            :Tech="el.Tech"
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
</style>
