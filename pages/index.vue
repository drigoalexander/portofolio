<template>
  <div>
    <div
      v-if="!isVisited"
      class="bg-neutral-100 w-full h-screen fixed items-center justify-center z-30 bumper"
    >
      <svg
        class="fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="150px"
        height="150px"
        viewBox="0 0 128 128"
        version="1.1"
      >
        <g id="surface1">
          <path
            style="stroke: black; fill: black; fill-opacity: 0"
            d="M 128 88.941406 L 128 102.398438 L 95.335938 102.398438 L 84.597656 88.941406 L 72.878906 74.261719 L 61.164062 88.941406 L 50.414062 102.398438 L 9.601562 102.398438 C 4.296875 102.398438 0 97.882812 0 92.308594 L 0 74.460938 C 0 70.347656 2.375 66.644531 6 65.105469 L 12.800781 62.21875 L 23.476562 57.6875 L 29.476562 55.132812 C 33.339844 53.5 37.75 54.652344 40.433594 58 L 44.601562 63.226562 L 46.441406 65.523438 L 38.085938 76 L 33.617188 70.40625 C 32.757812 69.296875 31.261719 68.902344 29.96875 69.449219 L 14.800781 75.878906 C 13.570312 76.425781 12.785156 77.652344 12.800781 79 L 12.800781 85.578125 C 12.800781 87.4375 14.234375 88.941406 16 88.941406 L 44.453125 88.941406 L 44.738281 88.589844 L 57.957031 72.023438 L 64.523438 63.796875 L 48.941406 44.265625 C 44.707031 38.960938 37.707031 37.125 31.601562 39.71875 L 12.800781 47.703125 L 0 53.140625 L 0 38.628906 L 25.191406 27.929688 C 37.398438 22.75 51.398438 26.414062 59.863281 37.015625 L 72.878906 53.328125 L 81.234375 63.796875 L 101.300781 88.941406 Z "
          />
        </g>

        <g id="surface2">
          <path
            style="stroke: black; fill: black; fill-opacity: 0"
            d="M 94.875 25.773438 L 84.125 39.234375 L 77.089844 48.050781 L 85.453125 58.5 L 100.84375 39.21875 L 128 39.21875 L 128 25.769531 Z "
          />
        </g>
        <g id="surface2">
          <path
            style="stroke: black; fill: black; fill-opacity: 0"
            d="M 94.875 25.773438 "
          />
        </g>
      </svg>
    </div>
    <div
      style="font-family: MuseoModerno"
      class="bg-neutral-100 dark:bg-gray-950 text-black w-full h-screen relative z-10 flex flex-col justify-between py-24"
    >
      <div
        style="font-family: Montserrat"
        :class="{
          'translate-y-[120%]': !modals,
          'translate-y-0': modals,
        }"
        class="left-[1%] bottom-[1%] flex justify-between items-start ease-in-out duration-300 transition fixed rounded-lg w-auto p-4 bg-neutral-100 dark:bg-neutral-950 shadow-xl text-neutral-950 dark:text-neutral-200 z-20"
      >
        <span class="text-sm">
          Searching for developer to help you build your website? <br />
          Well, maybe i can help you 😁 <br />
          <br />
          Go checkout to my
          <NuxtLink :to="tenantAgency" class="bg-gradient2 font-bold"
            >agency!!</NuxtLink
          >
          🚀
        </span>

        <div class="relative w-auto group cursor-none" @click="modals = false">
          <svg
            width="20"
            height="20"
            class="stroke-2 group"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="rotate-0 origin-center group-hover:rotate-[45deg] duration-500 ease-in-out stroke-neutral-950 dark:stroke-neutral-100"
              d="M18 6L6 18"
              stroke=""
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              class="rotate-0 origin-center group-hover:rotate-[-45deg] duration-500 ease-in-out stroke-neutral-950 dark:stroke-neutral-100"
              d="M6 6L18 18"
              stroke=""
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div class="text-2xl flex justify-between px-[5%] items-center w-full">
        <svg
          class="fill-black dark:fill-white"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="40px"
          height="40px"
          viewBox="0 0 40 40"
          version="1.1"
        >
          <g id="surface1">
            <path
              style="
                stroke: none;
                fill-rule: nonzero;

                fill-opacity: 1;
              "
              d="M 40 27.792969 L 40 32 L 29.792969 32 L 26.4375 27.792969 L 22.773438 23.207031 L 19.113281 27.792969 L 15.753906 32 L 3 32 C 1.34375 32 0 30.589844 0 28.847656 L 0 23.269531 C 0 21.984375 0.742188 20.828125 1.875 20.34375 L 4 19.441406 L 7.335938 18.027344 L 9.210938 17.230469 C 10.417969 16.71875 11.796875 17.078125 12.636719 18.125 L 13.9375 19.757812 L 14.511719 20.476562 L 11.902344 23.75 L 10.503906 22 C 10.238281 21.65625 9.769531 21.53125 9.363281 21.703125 L 4.625 23.710938 C 4.242188 23.882812 3.996094 24.265625 4 24.6875 L 4 26.742188 C 4 27.324219 4.449219 27.792969 5 27.792969 L 13.890625 27.792969 L 13.980469 27.683594 L 18.113281 22.507812 L 20.164062 19.9375 L 15.292969 13.832031 C 13.972656 12.175781 11.785156 11.601562 9.875 12.410156 L 4 14.90625 L 0 16.605469 L 0 12.070312 L 7.871094 8.726562 C 11.6875 7.109375 16.0625 8.253906 18.707031 11.566406 L 22.773438 16.664062 L 25.386719 19.9375 L 31.65625 27.792969 Z M 22.789062 16.648438 L 22.773438 16.664062 L 25.386719 19.9375 L 25.398438 19.921875 Z M 29.648438 8.054688 L 26.289062 12.261719 L 24.089844 15.015625 L 26.703125 18.28125 L 31.511719 12.253906 L 40 12.253906 L 40 8.054688 Z M 29.648438 8.054688 "
            />
          </g>
        </svg>
        <DarkSwitch />
      </div>
      <NuxtLink to="/projects">
        <div
          class="group cursor-none relative w-full font-bold text-[15vw] pl-[10vw] border-t-2 text-neutral-800 dark:text-zinc-300 dark:border-zinc-300 border-b-2 border-neutral-800 z-10"
        >
          <div
            class="before:content-[''] before:h-full before:left-0 top-0 before:bg-gradient-to-r before:from-transparent before:to-[#ffc371] before:via-[#ff5f6d] before:w-[0%] before:group-hover:w-full before:absolute before:-z-10 before:ease-out before:duration-500 before:transition-all"
          ></div>
          Projects
        </div>
      </NuxtLink>
      <div
        class="text-[5vw] lg:text-xl flex flex-col lg:flex-row justify-between px-[5%] items-start lg:pt-0 space-y-4 lg:items-center w-full"
      >
        <p class="text-neutral-800 dark:text-zinc-300">
          Drigo Alexander <br />Portofolio {{ browserName }}
        </p>
        <div class="flex gap-4 items-center">
          <NuxtLink to="https://github.com/drigoalexander" target="_blank">
            <svg
              class="cursor-none fill-neutral-800 dark:fill-zinc-300 hover:scale-125 duration-300 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="30px"
              height="30px"
              viewBox="0 0 30 30"
              version="1.1"
            >
              <g id="surface1">
                <path
                  style="
                    stroke: none;
                    fill-rule: evenodd;

                    fill-opacity: 1;
                  "
                  d="M 14.957031 0.9375 C 6.6875 0.9375 0 7.382812 0 15.359375 C 0 21.730469 4.285156 27.128906 10.226562 29.03125 C 10.972656 29.179688 11.242188 28.726562 11.242188 28.34375 C 11.242188 28.007812 11.214844 26.863281 11.214844 25.671875 C 7.054688 26.527344 6.1875 23.949219 6.1875 23.949219 C 5.523438 22.28125 4.535156 21.847656 4.535156 21.847656 C 3.171875 20.96875 4.628906 20.96875 4.628906 20.96875 C 6.136719 21.0625 6.9375 22.449219 6.9375 22.449219 C 8.269531 24.644531 10.421875 24.023438 11.292969 23.640625 C 11.410156 22.710938 11.8125 22.066406 12.230469 21.707031 C 8.914062 21.371094 5.417969 20.132812 5.417969 14.589844 C 5.417969 13.015625 6.011719 11.726562 6.957031 10.722656 C 6.8125 10.363281 6.292969 8.882812 7.105469 6.90625 C 7.105469 6.90625 8.371094 6.527344 11.214844 8.386719 C 12.4375 8.070312 13.6875 7.910156 14.957031 7.910156 C 16.214844 7.910156 17.503906 8.078125 18.691406 8.386719 C 21.539062 6.527344 22.808594 6.90625 22.808594 6.90625 C 23.621094 8.882812 23.101562 10.363281 22.953125 10.722656 C 23.921875 11.726562 24.484375 13.015625 24.484375 14.589844 C 24.484375 20.132812 21 21.351562 17.652344 21.707031 C 18.199219 22.164062 18.667969 23.019531 18.667969 24.382812 C 18.667969 26.316406 18.648438 27.867188 18.648438 28.34375 C 18.648438 28.726562 18.917969 29.179688 19.65625 29.03125 C 25.605469 27.128906 29.882812 21.730469 29.882812 15.359375 C 29.914062 7.382812 23.203125 0.9375 14.957031 0.9375 Z M 14.957031 0.9375 "
                />
              </g>
            </svg>
          </NuxtLink>
          <NuxtLink
            to="https://www.linkedin.com/in/drigo-alexander-9a36a01a8/"
            target="_blank"
          >
            <svg
              class="cursor-none fill-neutral-800 dark:fill-zinc-300 hover:scale-125 duration-300 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="30px"
              height="30px"
            >
              <path
                d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"
              />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useBuildTenantUrl } from "~/services/url";
import { useSessionStorage } from "@vueuse/core";

const tenantAgency = useBuildTenantUrl("agency");

const { $anime } = useNuxtApp();
const isVisited = useSessionStorage("isVisited", false);
const modals = ref(false);
onMounted(() => {
  const browserName = navigator.userAgent.toLowerCase();
  if (isVisited.value === false) {
    $anime.set("#surface2 path", {
      strokeDashoffset: $anime.setDashoffset,
    });

    $anime({
      targets: "#surface1 path",
      strokeDashoffset: [$anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 1500,
      delay: function (el, i) {
        return i * 250;
      },
      direction: "normal",
      complete: function (anim) {
        $anime({
          targets: "#surface2 path",
          strokeDashoffset: [$anime.setDashoffset, 0],
          easing: "easeInOutSine",
          duration: 500,
          delay: function (el, i) {
            return i * 250;
          },
          direction: "normal",
          complete: function (anim) {
            const endAnimation = $anime({
              targets: "#surface2 path",
              fillOpacity: 1,
              duration: 500,
              delay: 70,
              easing: "cubicBezier(.5, .05, .1, .3)",
            });

            endAnimation.finished.then(
              $anime({
                targets: ".bumper",
                opacity: 0,
                zIndex: -10,
                duration: 500,
                delay: 1500,
                easing: "cubicBezier(.5, .05, .1, .3)",
              })
            );
          },
        });
        $anime({
          targets: "#surface1 path",
          fillOpacity: 1,
          duration: 1500,
          delay: 500,
          easing: "cubicBezier(.5, .05, .1, .3)",
        });
      },
    });
  }
  setTimeout(() => {
    modals.value = true;
  }, 300);
  setTimeout(() => {
    isVisited.value = true;
  }, 5000);
});
</script>
