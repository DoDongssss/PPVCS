import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import ClientView from "../views/User/IndexView.vue";
import PetsView from "../views/User/PetsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/client",
      name: "clientIndex",
      component: ClientView,
    },
    {
      path: "/pets",
      name: "pets",
      component: PetsView,
    },
  ],
});

export default router;
