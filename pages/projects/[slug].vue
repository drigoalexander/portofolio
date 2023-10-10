<template>
  <div>
    <main
      class="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-neutral-100 dark:bg-neutral-950 antialiased min-h-screen"
    >
      <div class="flex justify-between px-4 mx-auto max-w-screen-xl flex-col">
        <div
          class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue"
        >
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
          <article class="">
            <ContentDoc />
          </article>
        </div>
        <NuxtLink
          @click="back"
          class="text-xl mt-20 px-4 mx-auto max-w-screen-xl cursor-none hover:scale-105 duration-300 ease-in-out text-neutral-950 dark:text-neutral-200"
          >Back
        </NuxtLink>
      </div>
    </main>
  </div>
</template>

<script setup>
import { useToggle, useDark } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
const router = useRouter();

function back() {
  router.go(-1);
}
</script>

<style>
article h1 {
  @apply text-neutral-600 dark:text-neutral-200 text-5xl font-bold pb-4 capitalize;
}

article h2 {
  @apply text-neutral-600 dark:text-neutral-200 text-2xl font-bold pb-4 capitalize;
}

article a {
  @apply text-neutral-600 dark:text-neutral-200 italic no-underline  inline-block relative z-20 before:z-0 before:content-[''] before:h-[4px] before:hover:w-full before:bottom-0  before:w-0 before:duration-300 before:ease-in-out before:bg-teal-300  before:absolute before:left-0;
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
