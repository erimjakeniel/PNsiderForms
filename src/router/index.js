import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "../components/Landing.vue";
import Form from "../views/Form.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/Home",
    name: "home",
    component: Landing
  },
  {
    path: "/Form",
    name: "form",
    component: Form
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
