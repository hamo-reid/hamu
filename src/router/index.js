import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/HamuHome.vue")
  }
];

const router = new VueRouter({
  mode: "hash",
  routes
});

export default router;
