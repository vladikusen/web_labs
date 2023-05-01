import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import edit from "../views/edit.vue";
import addContact from "../views/addContact.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: { newsletterPopup: false },
  },
  {
    path: "/edit",
    name: "edit",
    component: edit,
    props: (route) => ({
      ...route.params,
    }),
  },
  {
    path: "/addContact",
    name: "addContact",
    component: addContact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
