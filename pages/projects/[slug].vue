<template>
  <div
    class="relative z-10 gap-4 pb-16 pt-14 lg:pt-0 lg:pb-24 bg-white dark:bg-black antialiased min-h-screen mx-auto max-w-screen-5xl"
  >
    <main class="relative">
      <aside
        v-if="viewport.isGreaterThan('desktop')"
        class="py-6 sticky ml-0 lg:ml-16 flex top-1/4 flex-col w-fit"
      >
        <span class="text-xl font-semibold">Table of Content</span>
        <ul class="flex flex-col gap-2 pt-6">
          <NuxtLink
            v-for="el in toc.links"
            :key="el.id"
            class="relative group"
            :to="`#${el.id}`"
          >
            <span
              class="before:content-[''] before:h-full before:duration-300 before:ease-in-out before:w-[2px] before:bg-black before:absolute before:left-0 pr-2"
            />
            {{ el.text }}
          </NuxtLink>
        </ul>
        <NuxtLink
          style="font-family: MuseoModerno"
          to="/projects"
          class="text-xl mt-20 cursor-none before:z-0 before:content-[''] before:h-[4px] before:hover:w-full before:bottom-0 before:w-0 before:duration-300 before:ease-in-out before:bg-gradient-to-r before:from-gradient1 before:to-gradient2 before:absolute before:left-0 text-neutral-950 dark:text-neutral-200"
        >
          Back
        </NuxtLink>
      </aside>
      <div class="flex justify-between px-4 mx-auto flex-col ml-0 lg:ml-64">
        <div class="mx-auto w-full max-w-5xl">
          <div
            class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-neutral-100 pb-20"
          >
            <div class="mr-4 w-16 h-16 rounded-full overflow-hidden">
              <img
                class="-translate-y-4"
                src="https://res.cloudinary.com/dxy6iowwg/image/upload/v1695915093/23hr97hgbou2qiva_zbwr9t.png"
                alt="Drigo Alexander"
              />
            </div>

            <div>
              <NuxtLink
                to="https://www.linkedin.com/in/drigo-alexander-9a36a01a8/"
                class="text-xl font-bold text-gray-900 dark:text-neutral-200"
              >
                Drigo Alexander
              </NuxtLink>

              <p class="text-base text-gray-500 dark:text-neutral-200">
                Frontend Developer, Jakarta Indonesia
              </p>
              <p class="text-base text-gray-500 dark:text-neutral-200">
                <time
                  pubdate=""
                  datetime="2023-09-28"
                  title="February 8th, 2022"
                  >28 September 2023</time
                >
              </p>
            </div>
          </div>
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
                class="max-sm:col-span-2 cursor-none block px-6 py-8 border not-prose rounded-lg border-gray-200 dark:border-gray-800 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 group"
              >
                <div
                  class="inline-flex items-center rounded-full p-1.5 bg-gray-100 dark:bg-gray-800 group-hover:bg-primary/10 ring-1 ring-gray-300 dark:ring-gray-700 mb-4 group-hover:ring-primary/50"
                >
                  <span
                    class="w-5 h-5 text-gray-900 dark:text-white group-hover:text-primary flex items-center justify-center"
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
                <p
                  class="font-medium text-gray-900 dark:text-white text-[15px] mb-1"
                >
                  {{ prev?.title }}
                </p>
                <p
                  class="text-sm font-normal text-gray-500 dark:text-gray-400 line-clamp-2"
                >
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
                class="max-sm:col-span-2 cursor-none block px-6 py-8 border not-prose rounded-lg border-gray-200 dark:border-gray-800 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 group"
              >
                <div
                  class="inline-flex items-center rounded-full p-1.5 bg-gray-100 dark:bg-gray-800 group-hover:bg-primary/10 ring-1 ring-gray-300 dark:ring-gray-700 mb-4 group-hover:ring-primary/50"
                >
                  <span
                    class="w-5 h-5 text-gray-900 dark:text-white group-hover:text-primary flex items-center justify-center"
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
                <p
                  class="font-medium text-gray-900 dark:text-white text-[15px] mb-1"
                >
                  {{ next?.title }}
                </p>
                <p
                  class="text-sm font-normal text-gray-500 dark:text-gray-400 line-clamp-2"
                >
                  {{ next?.description }}
                </p>
              </NuxtLink>
              <NuxtLink
                v-if="viewport.isLessThan('desktop')"
                style="font-family: MuseoModerno, sans-serif"
                to="/projects"
                class="text-xl pb-2 mt-20 cursor-none before:z-0 before:content-[''] before:h-[4px] before:hover:w-full before:bottom-0 before:w-0 before:duration-300 before:ease-in-out before:bg-gradient-to-r before:from-gradient1 before:to-gradient2 before:absolute before:left-0 text-neutral-950 dark:text-neutral-200"
              >
                Back to projects page
              </NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
const viewport = useViewport();
const route = useRoute();
const { toc } = useContent();
const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();

onMounted(() => {
  const tl = gsap.timeline();

  tl.from("#footer", {
    translateY: "100%",
    scale: 1.5,
    opacity: 0,
    ease: "sine.inOut",
  });
  ScrollTrigger.create({
    trigger: "#container",
    animation: tl,
    start: "center top ",
    pinSpacing: false,
    scrub: true,
  });
});

const [prev, next] = await queryContent().findSurround(route.fullPath);
</script>

<style>
article h1 {
  @apply text-neutral-600 dark:text-neutral-200 text-5xl font-bold pb-4 capitalize;
}

article h2 {
  @apply text-neutral-600 dark:text-neutral-200 text-2xl font-bold pb-4 capitalize;
}

article a {
  @apply text-neutral-600 dark:text-neutral-200 italic no-underline  inline-block relative z-20 before:z-0 before:content-[''] before:h-[4px] before:hover:w-full before:bottom-0  before:w-0 before:duration-300 before:ease-in-out before:bg-gradient-to-r before:from-gradient1 before:to-gradient2  before:absolute before:left-0;
}

article pre {
  @apply text-neutral-600 dark:text-neutral-200 p-10  bg-[#242526] rounded-md  my-10 overflow-auto;
}

article p {
  @apply text-neutral-600 dark:text-neutral-200  py-4;
}

article blockquote {
  @apply text-neutral-600 dark:text-neutral-200 text-xl font-bold border-t-[1px] border-b-[1px] text-center text-green-300 my-4;
}

article ol {
  @apply text-neutral-600 dark:text-neutral-200 list-decimal space-y-4 py-6;
}

article ol li {
  @apply underline underline-offset-1;
}
</style>
