import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/HamuHome.vue")
  },
  {
    path: "/player-login",
    name: "player-login",
    component: () => import("@/views/PlayerLogin.vue")
  },
];

const router = new VueRouter({
  mode: "hash",
  routes
});

export default router;
