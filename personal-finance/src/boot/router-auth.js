<<<<<<< HEAD
=======
/* eslint-disable */
>>>>>>> 2ab81b6a3b31a47913fa5eefeb82a7e5c9210adc
import { LocalStorage } from 'quasar';

export default async ({ router, store }) => {
  const user = LocalStorage.getItem('user');
  if (user !== null) {
    store.dispatch('app/loggedIn', user, { root: true });
  }

  router.beforeEach((to, from, next) => {
    const currentUser = store.getters['users/currentUser'];

    if (!currentUser && to.path !== '/login') {
      next('/login');
    } else if (currentUser && to.path === '/login') {
      next('/');
    } else {
      next();
    }
  });
<<<<<<< HEAD
};
=======
};
>>>>>>> 2ab81b6a3b31a47913fa5eefeb82a7e5c9210adc
