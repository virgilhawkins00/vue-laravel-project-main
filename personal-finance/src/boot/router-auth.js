import { LocalStorage } from 'quasar';

export default async ({ router, store }) => {
<<<<<<< HEAD
  const user = LocalStorage.getItem('user');
  if (user !== null) {
    store.dispatch('app/loggedIn', user, { root: true });
  }

  router.beforeEach((to, from, next) => {
    // const currentUser = store.getters['users/currentUser'];

    // if (!currentUser && to.path !== '/login') {
    //   next('/login');
    // } else if (currentUser && to.path === '/login') {
    //   next('/');
    // } else {
      next();
  //   }
  });
};
=======
    const user = await LocalStorage.getItem('user');
    if (user !== null) {
      store.dispatch('app/loggedIn', user, { root: true });
    }


  
    router.beforeEach((to, from, next) => {
      // const currentUser = store.getters['users/currentUser'];

      // if (!currentUser && to.path !== '/login') {
      //   next('/login');
      // } else if (currentUser && to.path === '/login') {
      //   next('/');
      // } else {
        next();
      // }
    })
  
}
>>>>>>> 94e056a (i don't know)
