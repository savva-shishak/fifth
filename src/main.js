import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import router from './routes';
import Focus from './focus';
import Card from './components/card.vue';
import News from './components/news.vue';

Vue.use(VueResource);
Vue.use(VueRouter);

Vue.directive('focus', Focus);

Vue.component('news', News);
Vue.component('card', Card);

new Vue({
  el: '#app',
  render: h => h(App),
  router
});
