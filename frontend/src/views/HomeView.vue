<template>
  <div class="flex flex-col">
    <div
      class="px-12 py-3 flex items-center justify-between border-b border-gray-200"
    >
      <div class="w-[250px]">
        <h1 class="font-bold text-green-700 text-xl">Test Veterinary</h1>
      </div>
      <div>
        <ul class="menu bg-base-200 lg:menu-horizontal rounded-box">
          <li>
            <a class="active">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Home
            </a>
          </li>
          <li>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              About
            </a>
          </li>
          <li>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-phone-call h-4 w-4"
              >
                <path
                  d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                ></path>
              </svg>
              Contact
            </a>
          </li>
          <li>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-dollar-sign h-4 w-4"
              >
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path
                  d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                ></path>
              </svg>
              Pricing
            </a>
          </li>
        </ul>
      </div>
      <div class="w-[250px] flex items-center justify-end">
        <a
          class="px-4 py-1 border border-green-700 font-semibold rounded-full cursor-pointer mr-2 hover:bg-green-700 hover:text-white transition-all"
        >
          <router-link :to="{ name: 'login' }"> Login</router-link>
        </a>
        <a
          class="px-4 py-1 bg-green-700 text-white font-semibold rounded-full border border-green-700 hover:bg-white hover:text-black transtion-all cursor-pointer"
        >
          <router-link :to="{ name: 'register' }"> Register Free</router-link>
        </a>
      </div>
    </div>
    <main class="flex flex-col p-2">
      <div
        class="h-[calc(100vh-93px)] flex flex-col items-center justify-center"
      >
        <h1 class="font-[900] text-7xl text-center leading-tight">
          Your beloved pets,
          <br />
          deserve superior care
        </h1>
        <p class="mt-5 text-2xl font-semibold max-w-[550px] text-center">
          At test Veterinary Clinic, we establish a strong bond with your pets
          to ensure their optimal health and well-being."
        </p>
        <router-link :to="{ name: 'login' }">
          <button
            class="mt-6 px-6 py-2 rounded-full bg-green-700 font-semibold text-white flex items-center hover:bg-green-600 transition-all"
          >
            Book Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-arrow-right h-5 w-5 ml-2"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg></button
        ></router-link>
      </div>
    </main>
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
.menu {
  background: none !important;
}

.menu li > *:not(ul):not(.menu-title):not(details).active,
.menu li > details > summary:active {
  background-color: green;
  color: white;
}
</style>
