import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import LandingPage from './components/Landing';
import first_page from './components/firstpage'

const routes = [
  { path: '/landing', component: LandingPage },
  { path: '/', component: first_page},
  { path: '/register', component: first_page },
  { path: '/login', component: first_page},

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');
