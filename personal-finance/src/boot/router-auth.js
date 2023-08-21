import { LocalStorage } from 'quasar';

export default async ({ router, store }) => {
    const user = await LocalStorage.getItem('user');

    if (user !== null) {
      store.dispatch('app/loggedIn', user, { root: true });
    }
    router.beforeEach((to, from, next) => {
        next();
    })
};