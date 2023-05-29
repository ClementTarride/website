import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import LandingPage from './components/Landing.vue';
import first_page from './components/firstpage.vue';
import loginUser from './components/Login.vue';
import registerUser from './components/Register.vue';
import social_page from './components/Social.vue';
import my_profile from './components/MyProfile.vue';
import Support_cli from './components/Support.vue';
import blenderlearn_cli from './components/blender_learn.vue';
import LandingPage_mode from './components/firstbosspage.vue';
import social_page_mode from './components/Social_mode';
import blenderlearn_mode from './components/blender_lear_mode.vue';
import BlenderInfo from './components/aboutus.vue';
import BlenderInfo_mode from './components/aboutus_mode.vue';
import Support_mode from './components/support_mode';

const routes = [
  { path: '/support_mode', component: Support_mode},
  { path: '/aboutus_mode', component: BlenderInfo_mode},
  { path: '/Aboutus_connect', component:BlenderInfo },
  { path: '/social_mod', component : social_page_mode},
  { path: '/support', component: Support_cli},
  { path: '/landing', component: LandingPage },
  { path: '/', component: first_page},
  { path: '/register', component: registerUser },
  { path: '/login', component: loginUser},
  { path: '/social', component: social_page},
  { path: '/myprofile', component: my_profile},
  { path: '/blenderlearn_cli', component: blenderlearn_cli},
  { path: '/mode', component:LandingPage_mode},
  { path: '/blenderlearn_mode',component:blenderlearn_mode}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');
