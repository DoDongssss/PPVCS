import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";
import { responseMessage } from "./Response";
import { redirectTo } from "./Redirect";
import router from "../router";

export const usePetsStore = defineStore("pets", {
  state: () => ({
    petsPetsData: ref([]),
    petsPetsForm: ref({
      id: null,
      user_id: 2,
      name: "",
      gender: "",
      species: "",
      breed: "",
      color: "",
      birthdate: "",
      weight: "",
      picture_path: "",
    }),
    petsModalStatus: ref(false),
    petsErrors: ref([]),
    petsLoading: ref(false),
  }),

  getters: {
    petsData: (state) => state.petsPetsData,
    petsForm: (state) => state.petsPetsForm,
    modalStatus: (state) => state.petsModalStatus,
    errors: (state) => state.petsErrors,
    loading: (state) => state.petsLoading,
  },

  actions: {
    async getPets() {
      await axios
        .get("api/v1/pets")
        .then((res) => {
          this.petsPetsData = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    async createPet(data) {
      console.log(data, "create");
      if (data.id != undefined) {
        await axios
          .put("api/v1/pets/" + data.id, data)
          .then((res) => {
            responseMessage().success("Successfully Updated");
            this.getPets();
            this.modalToggle();
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        await axios
          .post("api/v1/pets", data)
          .then((res) => {
            responseMessage().success("Successfully Registered");
            this.getPets();
            this.modalToggle();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },

    async destroyPet(data) {
      await axios
        .delete("api/v1/pets/" + data.id)
        .then((res) => {
          responseMessage().success("Successfully Deleted");
          this.getPets();
        })
        .catch((err) => {
          console.log(err);
        });
    },

    reset() {
      this.petsPetsForm.id = null;
      this.petsPetsForm.name = "";
      this.petsPetsForm.gender = "";
      this.petsPetsForm.species = "";
      this.petsPetsForm.breed = "";
      this.petsPetsForm.color = "";
      this.petsPetsForm.birthdate = "";
      this.petsPetsForm.weight = null;
      this.petsPetsForm.picture_path = "";
    },

    modalToggle(data) {
      this.petsModalStatus = true;
      this.reset();

      if (data.id != undefined) {
        this.petsPetsForm.id = data.id;
        this.petsPetsForm.name = data.name;
        this.petsPetsForm.gender = data.gender;
        this.petsPetsForm.species = data.species;
        this.petsPetsForm.breed = data.breed;
        this.petsPetsForm.color = data.color;
        this.petsPetsForm.birthdate = data.birthdate;
        this.petsPetsForm.weight = data.weight;
        this.petsPetsForm.picture_path = data.picture_path;
      }
    },
  },
});
