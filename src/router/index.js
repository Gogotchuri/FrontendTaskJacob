import Vue from 'vue';
import VueRouter from 'vue-router';
import Settings from '../views/Settings.vue';
import { extend } from 'vee-validate';
import {
  required,
  email
} from 'vee-validate/dist/rules';

extend('required', required);
extend('email', email);
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Settings',
    component: Settings
  }
];

const router = new VueRouter({
  history: true,
  routes
});

export default router;
