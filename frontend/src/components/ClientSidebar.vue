<template>
  <div
    class="absolute left-0 h-full border-r border-gray-200 px-3 shadow-sm w-[220px] bg-white z-10"
  >
    <div class="flex h-[70px] items-center justify-center border-b">
      <h1 class="text-xl font-extrabold text-green-600">LOGO HERE</h1>
    </div>
    <div
      class="scrollable h-[calc(100%-70px)] overflow-auto overflow-x-hidden py-5"
    >
      <ul class="menu rounded-box flex flex-col gap-1 p-0 text-[15px]">
        <router-link :to="{ name: 'clientIndex' }">
          <li>
            <a
              class="nav-item py-[10px] accent-violet-50"
              :class="activePath == '/client' ? 'active' : ''"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                viewBox="0 0 576 512"
              >
                <path
                  d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
                /></svg
              >Dashboard</a
            >
          </li>
        </router-link>
        <router-link :to="{ name: 'pets' }">
          <li>
            <a
              class="nav-item py-[10px]"
              :class="activePath == '/pets' ? 'active' : ''"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                viewBox="0 0 512 512"
              >
                <path
                  d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"
                /></svg
              >Pets</a
            >
          </li>
        </router-link>
        <router-link :to="{ name: 'clientIndex' }">
          <li>
            <a class="nav-item py-[10px]"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                viewBox="0 0 448 512"
              >
                <path
                  d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"
                /></svg
              >Appointment</a
            >
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from "../stores/auth";

export default {
  setup() {
    const authStore = useAuthStore();
    return {
      authStore,
    };
  },
  computed: {
    pathName() {
      return this.$route.path.replace(/^((?:\/[^\/]+){2})\/[^\/]+/, "$1");
    },
    activePath() {
      return this.$route.path;
    },
  },
};
</script>

<style>
.nav-item.active svg {
  fill: white !important;
}
/* width */
.scrollable::-webkit-scrollbar {
  width: 3px;
  border-radius: 100%;
}

/* Track */
.scrollable::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
.scrollable::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 2px;
}

/* Handle on hover */
.scrollable::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
