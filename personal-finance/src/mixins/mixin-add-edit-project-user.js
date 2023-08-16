<<<<<<< HEAD
=======
/* eslint-disable */
>>>>>>> a1f30797d4aa47e2e06658b2bc4fa964ffe4b8ea
import Modal from 'src/components/Shared/Modals/Modal';
import ModalProjectUserWeight from 'src/components/Projects/Modals/Shared/ModalProjectUserWeight';
import ModalProjectUserSelect from 'src/components/Projects/Modals/Shared/ModalProjectUserSelect';

export default {
  data() {
    return {
      formData: {
        userId: null,
        weight: 1,
      },
    };
  },
  components: {
    Modal,
    ModalProjectUserWeight,
    ModalProjectUserSelect,
  },
};
