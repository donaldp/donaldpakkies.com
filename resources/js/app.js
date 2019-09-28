require('./bootstrap');

// Dependencies
import VueRouter from 'vue-router';
import routes from './routes.js';
import NProgress from 'nprogress';
import { loadProgressBar } from 'axios-progress-bar';
import '../../node_modules/nprogress/nprogress.css';

loadProgressBar();

// Components
Vue.component('example-component', require('./components/example.vue').default);
Vue.component('home-view', require('./components/home/index.vue').default);
Vue.component('intro', require('./components/home/intro.vue').default);
Vue.component('portfolio', require('./components/home/portfolio.vue').default);
Vue.component('education', require('./components/home/education.vue').default);
Vue.component('interest', require('./components/home/interest.vue').default);

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: routes
});

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start();
  }

  next();
});

router.afterEach((to, from) => {
  NProgress.done();
});

const app = new Vue({
  router,
  el: '#app'
});
