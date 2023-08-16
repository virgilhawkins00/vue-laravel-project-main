<<<<<<< HEAD
=======
/* eslint-disable */
>>>>>>> a1f30797d4aa47e2e06658b2bc4fa964ffe4b8ea
import Modal from 'src/components/Shared/Modals/Modal';
import ModalNameInput from 'src/components/Shared/Modals/ModalNameInput';
import ModalExpensePrice from 'src/components/Expenses/Modals/Shared/ModalExpensePrice';
import ModalExpenseDate from 'src/components/Expenses/Modals/Shared/ModalExpenseDate';
import ModalExpensePaidBy from 'src/components/Expenses/Modals/Shared/ModalExpensePaidBy';
import ModalExpenseCategory from 'src/components/Expenses/Modals/Shared/ModalExpenseCategory';

export default {
  data() {
    return {
      formData: {
        name: null,
        price: null,
        date: null,
        paidByUserId: null,
        categoryId: null,
      },
    };
  },
  components: {
    Modal,
    ModalNameInput,
    ModalExpensePrice,
    ModalExpenseDate,
    ModalExpensePaidBy,
    ModalExpenseCategory,
  },
};
