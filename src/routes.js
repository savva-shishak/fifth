import VueRouter from 'vue-router';
import Home from './pages/home.vue';
import CheckIn from './pages/check-in.vue';
import SingIn from './pages/sing-in.vue';
import Users from './pages/users.vue';
import CreateNews from './pages/create-news.vue';
import News from './pages/news.vue'

export default new VueRouter ({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/sing-in',
      component: SingIn
    },
    {
      path: '/check-in',
      component: CheckIn
    },
    {
      path: '/users',
      component: Users
    },
    {
      path: '/create-news',
      component: CreateNews
    },
    {
      path: '/news',
      component: News
    }
  ],
  mode: 'history'
});
