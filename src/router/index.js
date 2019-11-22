import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "../components/Landing.vue";
import Login from "../views/Login.vue";
import Form from "../views/Form.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/Home",
    name: "home",
    component: Landing
  },
  {
    path: "/About",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },{
    path: "/Login",
    name: "login",
    component: Login
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
