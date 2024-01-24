<template>
  <div
    id="container"
    class="cursor-auto pointer-events-auto relative z-20 gap-4 pb-16 pt-14 lg:pt-0 lg:pb-24 bg-black min-h-screen mx-auto max-w-screen-5xl w-full justify-center items-center"
  >
    <ModalsCard v-if="page.projectStatus" :text="page.projectStatus" />
    <div
      class="relative flex flex-col text-white w-full items-center justify-center py-16 text-center"
    >
      <h1
        class="text-[clamp(1.25rem,4vw+1rem,4rem)] capitalize font-bold tracking-tight"
      >
        <span v-for="el in titleSplit" :id="el" :key="el" class="title">{{
          el
        }}</span>
      </h1>
      <p
        class="text-[clamp(0.6rem,4vw+1rem,0.9rem)] tracking-wider font-normal"
      >
        <span v-for="el in descSplit" :id="el" :key="el" class="desc">{{
          el
        }}</span>
      </p>
      <div
        class="absolute w-full bottom-0 left-0 h-[1px] bg-gradient-to-r from-gradient1 to-gradient2"
      />
    </div>

    <main class="relative mt-24">
      <div class="flex justify-between px-4 mx-auto flex-col items-center">
        <h1
          class="text-[clamp(2.5rem,4vw+1rem,3rem)] capitalize font-bold tracking-tight text-center text-white"
        >
          {{ page.opening }}
        </h1>

        <div class="flex gap-16 items-center justify-center py-24">
          <div
            v-if="page.sourceCode"
            class="flex flex-col gap-1 items-center text-center"
          >
            <h4
              class="uppercase text-[0.6rem] text-white font-semibold tracking-widest"
            >
              Source
            </h4>
            <NuxtLink
              :to="page.sourceCode"
              target="_blank"
              class="uppercase text-paragraph font-semibold tracking-widest text-[0.75rem]"
            >
              Github
            </NuxtLink>
          </div>
          <div v-if="page.project" class="flex flex-col gap-1 items-center">
            <h4
              class="uppercase text-[0.6rem] text-white font-semibold tracking-widest"
            >
              Demo
            </h4>
            <NuxtLink
              :to="page.project"
              target="_blank"
              class="uppercase text-paragraph font-semibold tracking-widest text-[0.75rem]"
            >
              Project
            </NuxtLink>
          </div>
        </div>

        <div class="mx-auto w-full max-w-5xl">
          <article class="w-full text-justify px-4 md:px-8">
            <ContentDoc />
            <hr class="my-8" />
            <div class="grid gap-8 sm:grid-cols-2 text-white">
              <NuxtLink
                v-if="prev"
                :href="prev?._path"
                :class="{
                  'col-start-1': !next,
                  'col-span-2': !next,
                  'col-start-1': next,
                  'col-span-1': next,
                }"
                class="max-sm:col-span-2 cursor-none block px-6 py-8 border-x-[1px] border-t-[1px] not-prose rounded-t-lg hover:border-white ease-in-out duration-300 border-card bg-black group"
              >
                <div
                  class="inline-flex items-center rounded-full p-1.5 bg-black group-hover:bg-black ring-1 ring-gray-300 dark:ring-gray-700 mb-4 group-hover:ring-white"
                >
                  <span
                    class="w-5 h-5 text-white group-hover:text-white flex items-center justify-center"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                      />
                    </svg>
                  </span>
                </div>
                <p class="font-medium text-white text-[15px] mb-1">
                  {{ prev?.title }}
                </p>
                <p class="text-sm font-normal text-white line-clamp-2">
                  {{ prev?.description }}
                </p>
              </NuxtLink>
              <NuxtLink
                v-if="next"
                :href="next?._path"
                :class="{
                  'col-start-1': !prev,
                  'col-span-2': !prev,
                  'col-start-2': prev,
                  'col-span-1': prev,
                }"
                class="max-sm:col-span-2 cursor-none block px-6 py-8 border-x-[1px] border-t-[1px] not-prose rounded-t-lg hover:border-white ease-in-out duration-300 border-card bg-black group"
              >
                <div
                  class="inline-flex items-center rounded-full p-1.5 bg-black group-hover:bg-black ring-1 ring-gray-300 dark:ring-gray-700 mb-4 group-hover:ring-white"
                >
                  <span
                    class="w-5 h-5 text-white group-hover:text-white flex items-center justify-center"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                  </span>
                </div>
                <p class="font-medium text-white text-[15px] mb-1">
                  {{ next?.title }}
                </p>
                <p class="text-sm font-normal text-white line-clamp-2">
                  {{ next?.description }}
                </p>
              </NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
const { $gsap: gsap } = useNuxtApp();
const { fullPath } = useRoute();
const { page } = useContent();
const [prev, next] = await queryContent().findSurround(fullPath);

const titleSplit = page.value.title.split("");
const descSplit = page.value.description.split("");

onMounted(() => {
  const header = gsap.timeline();
  const paragraph = gsap.timeline();
  gsap.utils.toArray(".title").forEach((title) => {
    header.from(title, {
      translateX: "-100%",
      opacity: 0,
      stagger: 0.1,

      duration: 0.1,
      ease: "sine.inOut",
    });
  });
  gsap.utils.toArray(".desc").forEach((desc) => {
    paragraph.from(desc, {
      rotate: 50,
      opacity: 0,
      stagger: 0.1,

      duration: 0.1,
      ease: "sine.inOut",
    });
  });
});
</script>

<style>
article h1 {
  @apply text-white text-5xl font-bold pb-4 capitalize;
}

article h2 {
  @apply text-white text-3xl font-semibold pb-4 tracking-wide capitalize;
}

article a {
  @apply text-white  no-underline  inline-block relative z-20 before:z-0 before:content-[''] before:h-[4px] before:hover:w-full before:bottom-0  before:w-0 before:duration-300 before:ease-in-out before:bg-gradient-to-r before:from-gradient1 before:to-gradient2  before:absolute before:left-0;
}

article pre {
  @apply text-white p-10  bg-card rounded-md  my-10 overflow-auto;
}

article p {
  @apply text-[#989899]  pt-2 pb-16 font-normal leading-relaxed;
}

article blockquote {
  @apply text-white text-xl font-bold border-t-[1px] border-b-[1px] text-center  my-4;
}

article ol {
  @apply text-white list-decimal space-y-4 py-6;
}

article ol li {
  @apply underline underline-offset-1;
}
</style>
