import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Notifications from "@kyvg/vue3-notification";
import VueCookies from "vue-cookies";
import store from "./store";


const app = createApp(App);
app.use(store)
import Navbar from "./components/Navbar";
app.component(Navbar.name, Navbar);

import Footer from "./components/Footer";
app.component(Footer.name, Footer);

import WvTextBox from "@/components/TextBox";
app.component(WvTextBox.name, WvTextBox);

import WvPassword from "@/components/Password";
app.component(WvPassword.name, WvPassword);


app.use(VueCookies, { expire: "7d" });
app.use(Notifications);
app.use(router).mount("#app");
