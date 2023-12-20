<template>
  <div class="bg-gray-100">
    <ClientSidebar />
    <main class="h-screen w-full pl-[220px]">
      <div class="p-5 flex flex-col">
        <ClientHeader />
        <div class="flex flex-col mt-5">
          <div class="flex h-[70px] items-center justify-between">
            <div class="relative flex items-center">
              <input
                type="text"
                class="w-[270px] rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-gray-500"
                placeholder="Search"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="absolute right-4 h-5 w-5 fill-gray-500"
                viewBox="0 0 512 512"
              >
                <path
                  d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                />
              </svg>
            </div>
            <div>
              <button
                class="flex items-center justify-center rounded bg-green-700 px-4 py-2 font-semibold text-white transition-all hover:bg-green-600"
                @click="petsStore.modalToggle()"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="mr-1 h-4 w-4 fill-white"
                  viewBox="0 0 448 512"
                >
                  <path
                    d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                  />
                </svg>
                Create Pet
              </button>
            </div>
          </div>
          <div class="flex w-full flex-wrap gap-4">
            <div
              class="p-1 rounded-md border border-gray-300 shadow-md shadow-white bg-white w-[calc(100%/4-12px)] flex flex-col"
              v-for="pet in petsStore.petsData"
              :key="pet.id"
            >
              <img
                class="h-[200px] object-cover rounded-md"
                src="data:image/jpeg;base64,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"
                alt="ARA"
              />
              <div class="flex flex-col items-center">
                <span class="p-6 font-[900] text-xl">{{ pet.name }}</span>
                <div
                  class="flex flex-col text-gray-500 font-semibold w-full gap-2"
                >
                  <p class="font-semibold">Species: {{ pet.species }}</p>
                  <p class="font-semibold">Breed: {{ pet.breed }}</p>
                  <p class="font-semibold">Birthday: {{ pet.birthdate }}</p>
                  <!-- <p class="font-semibold">Age: {{ pet.species }}</p> -->
                  <p class="font-semibold">Gender: {{ pet.gender }}</p>
                  <p class="font-semibold">Color: {{ pet.color }}</p>
                  <p class="font-semibold">Weight: {{ pet.weight }} kg</p>
                </div>
                <div class="w-full flex gap-1 items-center justify-end mt-2">
                  <button
                    class="flex items-center rounded-sm w-fit bg-green-700 px-2 py-1 text-sm text-white hover:bg-green-600 transition-all"
                  >
                    View
                  </button>
                  <button
                    @click="petsStore.modalToggle(pet)"
                    class="flex items-center rounded-sm w-fit bg-orange-700 px-2 py-1 text-sm text-white hover:bg-orange-600 transition-all"
                  >
                    Update
                  </button>
                  <button
                    @click="petsStore.destroyPet(pet)"
                    class="flex items-center rounded-sm w-fit bg-red-700 px-2 py-1 text-sm text-white hover:bg-red-600 transition-all"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- MODAL -->

    <el-dialog
      v-model="petsStore.modalStatus"
      title="Register Pet"
      append-to-body
      center
    >
      <form
        action=""
        class="flex flex-col items-center justify-center gap-3"
        @submit.prevent="petsStore.createPet(petsStore.petsForm)"
      >
        <div class="flex w-full gap-2">
          <div class="flex w-full gap-4">
            <div class="relative flex w-full flex-col">
              <label for="" class="font-semibold"
                >Name<span class="text-red-600 ml-1">*</span></label
              >
              <div class="relative flex w-full items-center justify-center">
                <input
                  v-model="petsStore.petsForm.name"
                  type="text"
                  class="mt-1 w-full min-w-[100px] rounded-md border border-gray-400 px-4 py-2 transition-[border] focus:border-[#3C2A21] focus:outline-none"
                  placeholder="Enter pet name"
                  required
                />
              </div>
            </div>
          </div>
          <div class="flex w-full gap-4">
            <div class="relative flex w-full flex-col">
              <label for="" class="font-semibold"
                >Gender<span class="text-red-600 ml-1">*</span></label
              >
              <div class="relative flex w-full items-center justify-center">
                <select
                  v-model="petsStore.petsForm.gender"
                  class="select-bordered mt-1 w-full min-w-[100px] cursor-pointer rounded-md border border-gray-400 px-4 py-2 transition-[border] focus:border-[#3C2A21] focus:outline-none"
                >
                  <option value="">-- --</option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>
          <div class="flex w-full gap-4">
            <div class="relative flex w-full flex-col">
              <label for="" class="font-semibold"
                >Weight (kg)<span class="text-red-600 ml-1">*</span></label
              >
              <div class="relative flex w-full items-center justify-center">
                <input
                  v-model="petsStore.petsForm.weight"
                  type="text"
                  class="mt-1 w-full min-w-[100px] rounded-md border border-gray-400 px-4 py-2 transition-[border] focus:border-[#3C2A21] focus:outline-none"
                  placeholder="Enter weight"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <div class="flex w-full gap-2">
          <div class="flex w-full gap-4">
            <div class="relative flex w-full flex-col">
              <label for="" class="font-semibold"
                >Specie<span class="text-red-600 ml-1">*</span></label
              >
              <div class="relative flex w-full items-center justify-center">
                <select
                  v-model="petsStore.petsForm.species"
                  class="select-bordered mt-1 w-full min-w-[100px] cursor-pointer rounded-md border border-gray-400 px-4 py-2 transition-[border] focus:border-[#3C2A21] focus:outline-none"
                >
                  <option value="">-- --</option>
                  <option value="Dog">Dog</option>
                  <option value="Cat">Cat</option>
                  <option value="Hamster">Hamster</option>
                  <option value="'Bird'">'Bird'</option>
                  <option value="Guinea Pig">Guinea Pig</option>
                  <option value="Reptile">Reptile</option>
                  <option value="Fish">Fish</option>
                </select>
              </div>
            </div>
          </div>
          <div class="flex w-full gap-4">
            <div class="relative flex w-full flex-col">
              <label for="" class="font-semibold"
                >Breed<span class="text-red-600 ml-1">*</span></label
              >
              <div class="relative flex w-full items-center justify-center">
                <input
                  v-model="petsStore.petsForm.breed"
                  type="text"
                  class="mt-1 w-full min-w-[100px] rounded-md border border-gray-400 px-4 py-2 transition-[border] focus:border-[#3C2A21] focus:outline-none"
                  placeholder="Enter Breed"
                  required
                />
              </div>
            </div>
          </div>
          <div class="flex w-full gap-4">
            <div class="relative flex w-full flex-col">
              <label for="" class="font-semibold"
                >Color<span class="text-red-600 ml-1">*</span></label
              >
              <div class="relative flex w-full items-center justify-center">
                <input
                  v-model="petsStore.petsForm.color"
                  type="text"
                  class="mt-1 w-full min-w-[100px] rounded-md border border-gray-400 px-4 py-2 transition-[border] focus:border-[#3C2A21] focus:outline-none"
                  placeholder="Enter Color"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <div class="flex w-full gap-2">
          <div class="relative flex w-full flex-col">
            <label for="" class="font-semibold"
              >Birthdate<span class="text-red-600 ml-1">*</span></label
            >
            <div class="relative flex w-full items-center justify-center">
              <input
                v-model="petsStore.petsForm.birthdate"
                type="date"
                class="mt-1 h-[40px] w-full min-w-[100px] rounded-md border border-gray-400 px-4 py-2 transition-[border] focus:border-[#3C2A21] focus:outline-none"
                required
              />
            </div>
          </div>
          <div class="flex w-full gap-4">
            <div class="relative flex w-full flex-col">
              <label for="" class="font-semibold"
                >Profile<span class="text-red-600 ml-1">*</span></label
              >
              <div class="relative flex w-full items-center justify-center">
                <input
                  type="file"
                  class="mt-1 h-[40px] w-full min-w-[100px] rounded-md border border-gray-400 px-[6px] py-[6px] flex items-center transition-[border] focus:border-[#3C2A21] focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="w-full flex items-center justify-end mt-2">
          <button
            type="submit"
            class="flex w-auto items-center justify-center rounded bg-green-600 px-4 py-2 text-lg text-white transition-all duration-300 ease-linear hover:bg-green-700"
          >
            <span>Register Pet</span>
          </button>
        </div>
      </form>

      <!-- <template #footer>
        <span class="dialog-footer">
          <el-button @click="centerDialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="centerDialogVisible = false">
            Confirm
          </el-button>
        </span>
      </template> -->
    </el-dialog>
  </div>
</template>

<script>
import { ref } from "vue";
import { useAuthStore } from "@/stores/Auth";
import { usePetsStore } from "@/stores/Pets";
import ClientSidebar from "@/components/ClientSidebar.vue";
import ClientHeader from "@/components/ClientSidebar.vue";

export default {
  components: {
    ClientSidebar,
    ClientHeader,
  },
  setup() {
    const authStore = useAuthStore();
    const petsStore = usePetsStore();
    return {
      authStore,
      petsStore,
    };
  },
  mounted() {
    this.petsStore.getPets();
  },
};
</script>

<style lang="scss" scoped></style>
