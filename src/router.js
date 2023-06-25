import { createWebHistory, createRouter } from "vue-router";
import Home from "./views/Home";
import Faq from "./views/Faq";
import Contact from "./views/Contact";
import App from "./views/App";
import About from "./views/About";
import NotFound from "./views/NotFound";
import Step_1 from "./views/ShopRequest/Step_1.vue";
import Step_2 from "./views/ShopRequest/Step_2.vue";
import Step_3 from "./views/ShopRequest/Step_3.vue";
import Step_4 from "./views/ShopRequest/Step_4.vue";
import privacyPolicy from "./views/privacy/privacyPolicy.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: { layout: "Dashboard" },
  },
  {
    path: "/privacy-policy",
    name: "privacy-policy",
    component: privacyPolicy,
    meta: { layout: "Dashboard" },
  },
  {
    path: "/app",
    name: "app",
    component: App,
    meta: { layout: "Dashboard" },
  },
  {
    path: "/about",
    name: "about",
    component: About,
    meta: { layout: "Dashboard" },
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
    meta: { layout: "Dashboard" },
  },
  {
    path: "/faq",
    name: "faq",
    component: Faq,
    meta: { layout: "Dashboard" },
  },
  {
    path: "/404",
    name: "404",
    component: NotFound,
    meta: { layout: "Dashboard" },
  },
  {
    path: "/shop-request/1",
    name: "step_1",
    component: Step_1,
    meta: { layout: "Dashboard" },
  },
  {
    path: "/shop-request/2",
    name: "step_2",
    component: Step_2,
    meta: { layout: "Dashboard" },
  },
  {
    path: "/shop-request/3",
    name: "step_3",
    component: Step_3,
    meta: { layout: "Dashboard" },
  },
  {
    path: "/shop-request/4",
    name: "step_4",
    component: Step_4,
    meta: { layout: "Dashboard" },
  },
  { path: "/:pathMatch(.*)*", redirect: { name: "404" } },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
  linkExactActiveClass: "active",
});

router.beforeEach((to, from, next) => {
  document.querySelector(".witvet-wrapper").classList.add("isLoading");
  to;
  from;
  setTimeout(() => {
    next();
  }, 400);
});

export default router;
