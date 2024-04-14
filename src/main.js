import { createApp } from 'vue';
import {createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'
import Login from "./views/Login.vue";
import Page from "./views/Page.vue";

const routes = [
    { path: '/login', component:Login },
    { path: '/page', component: Page},
];
const router = createRouter({
    history: createWebHistory(),
    routes
});

createApp(App).use(router).use(vuetify).mount("#app");



