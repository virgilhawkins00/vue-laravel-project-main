<<<<<<< HEAD
=======
/* eslint-disable */
>>>>>>> a1f30797d4aa47e2e06658b2bc4fa964ffe4b8ea
import Modal from 'src/components/Shared/Modals/Modal';
import ModalNameInput from 'src/components/Shared/Modals/ModalNameInput';
import ModalIconColorInput from 'src/components/Shared/Modals/ModalIconColorInput';
import ModalEmailInput from 'src/components/Shared/Modals/ModalEmailInput';

export default {
  data() {
    return {
      formData: {
        name: null,
        email: null,
        iconName: 'face',
        iconColor: 'blue-4',
        password: null,
      },
    };
  },
  components: {
    Modal,
    ModalNameInput,
    ModalIconColorInput,
    ModalEmailInput,
  },
};
