<template>
  <div
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
    class="bg-neutral-100 text-black w-full h-screen relative z-10 flex flex-col justify-between py-24"
  >
    <div class="text-2xl flex justify-between px-[5%] items-center w-full">
      <img
        class="w-[10vw] lg:w-[4vw]"
        src="https://res.cloudinary.com/dxy6iowwg/image/upload/v1695901689/512_black_ykpbtt.png"
        alt=""
      />
      <!-- <label class="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" class="sr-only peer" />
        <div
          class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
        ></div>
      </label> -->
    </div>
    <NuxtLink to="/projects/">
      <div
        class="group cursor-pointer relative w-full font-bold text-[15vw] pl-[10vw] border-t-2 text-neutral-800 border-b-2 border-neutral-800 z-10"
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
      <p>Drigo Alexander <br />Portofolio</p>
      <p>drigosihombinga@gmail.com</p>
    </div>
  </div>
</template>

<script setup>
const { $anime } = useNuxtApp();

onMounted(() => {
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
});
</script>

<style scoped></style>
