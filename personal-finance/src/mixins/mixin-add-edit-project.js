<<<<<<< HEAD
=======
/* eslint-disable */
>>>>>>> a1f30797d4aa47e2e06658b2bc4fa964ffe4b8ea
import Modal from 'src/components/Shared/Modals/Modal';
import ModalNameInput from 'src/components/Shared/Modals/ModalNameInput';
import ModalIconInput from 'src/components/Shared/Modals/ModalIconInput';

export default {
  data() {
    return {
      formData: {
        name: null,
        iconName: 'calendar_today',
        iconColor: 'primary',
      },
    };
  },
  components: {
    Modal,
    ModalNameInput,
    ModalIconInput,
  },
};
