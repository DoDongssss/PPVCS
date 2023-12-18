<template>
  <div class="bg-gray-100">
    <ClientSidebar />
    <main class="h-screen w-full pl-[220px]">
      <div class="p-5 flex flex-col">
        <ClientHeader />
        <div class="flex gap-4 mt-5">
          <div
            class="flex w-[calc(100%/4-6px)] items-center justify-between rounded-md border p-4 bg-white border-gray-300 shadow-sm"
          >
            <div class="flex w-fit flex-col justify-between">
              <div class="mb-2 w-fit rounded-md bg-gray-100 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2c.5 99.2 41.3 280.7 213.6 363.2c16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2L269.4 2.9zM160.9 286.2c4.8 1.2 9.9 1.8 15.1 1.8c35.3 0 64-28.7 64-64V160h44.2c12.1 0 23.2 6.8 28.6 17.7L320 192h64c8.8 0 16 7.2 16 16v32c0 44.2-35.8 80-80 80H272v50.7c0 7.3-5.9 13.3-13.3 13.3c-1.8 0-3.6-.4-5.2-1.1l-98.7-42.3c-6.6-2.8-10.8-9.3-10.8-16.4c0-2.8 .6-5.5 1.9-8l15-30zM160 160h40 8v32 32c0 17.7-14.3 32-32 32s-32-14.3-32-32V176c0-8.8 7.2-16 16-16zm128 48a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z"
                  />
                </svg>
              </div>

              <span class="text-3xl font-extrabold">5</span>
              <h1 class="text-md text-gray-400">Total Products</h1>
            </div>
            <div class="h-full">
              <span
                class="flex items-center gap-2 text-sm font-semibold cursor-pointer"
                >See More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-3 w-3"
                  viewBox="0 0 320 512"
                >
                  <path
                    d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
                  /></svg
              ></span>
            </div>
          </div>
          <div
            class="flex w-[calc(100%/4-6px)] items-center justify-between rounded-md border p-4 bg-white border-gray-300 shadow-sm"
          >
            <div class="flex w-fit flex-col justify-between">
              <div class="mb-2 w-fit rounded-md bg-gray-100 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 448 512"
                >
                  <path
                    d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"
                  />
                </svg>
              </div>

              <span class="text-3xl font-extrabold">5</span>
              <h1 class="text-md text-gray-400">Total Appointments</h1>
            </div>
            <div class="h-full">
              <span
                class="flex items-center gap-2 text-sm font-semibold cursor-pointer"
                >See More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-3 w-3"
                  viewBox="0 0 320 512"
                >
                  <path
                    d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
                  /></svg
              ></span>
            </div>
          </div>
        </div>
        <div class="mt-5 flex">
          <div
            class="w-full rounded-md border border-gray-300 bg-white p-3 shadow-sm"
          >
            <span class="mb-5 mt-5 text-lg font-bold">Appointments</span>
            <el-table stripe style="width: 100%" class="mt-3">
              <el-table-column prop="" sortable label="Date" />
              <el-table-column prop="" sortable label="Concern" />
              <el-table-column prop="" sortable label="Pet" />
              <el-table-column prop="" sortable label="Action" />
            </el-table>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { useAuthStore } from "@/stores/Auth";
import ClientSidebar from "@/components/ClientSidebar.vue";
import ClientHeader from "@/components/ClientSidebar.vue";

export default {
  components: {
    ClientSidebar,
    ClientHeader,
  },
  setup() {
    const authStore = useAuthStore();
    return {
      authStore,
    };
  },
};
</script>

<style lang="scss" scoped></style>
