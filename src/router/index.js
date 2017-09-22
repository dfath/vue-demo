import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Tables from '@/components/Tables';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/table',
      name: 'Table',
      component: Tables,
    },
  ],
});
