<<<<<<< HEAD
=======
/* eslint-disable */
>>>>>>> a1f30797d4aa47e2e06658b2bc4fa964ffe4b8ea
export default {
  methods: {
    abs(value) {
      return Math.abs(value);
    },
    formatPrice(value) {
      return `${(Math.round(value * 100) / 100).toString()}€`;
    },
  },
};
