import deleteTask from "./deleteTask";
import validateForm, { fieldsToValidate } from "./validation";

const deleteModal = document.querySelector(".delete-modal");
const deleteModalText = document.querySelector(".delete-modal__text");
const cancelDeleteButton = document.querySelector(".delete-modal__cancel-button");
const confirmDeleteModalButton = document.querySelector(".delete-modal__confirm-button");
const formModal = document.querySelector(".form-modal");

let previousConfirmDeleteHandler = null;

const openModal = (formModal, openModalButton) => {
  openModalButton.addEventListener("click", (e) => {
    e.preventDefault();
    formModal.classList.add("form-modal--display");
    validateForm();
  });
};

const closeModal = (formModal, closeModalButton) => {
  closeModalButton.addEventListener("click", (e) => {
    e.preventDefault();
    formModal.classList.remove("form-modal--display");
    fieldsToValidate.forEach((field) => {
      // const fieldToValidate = document.querySelector(`#${field.id}`);
      const errorParagraph = document.querySelector(`.${field.errorClass}`);

      errorParagraph.textContent = "";
      errorParagraph.style.display = "none";
    });
  });
};

const openDeleteModal = (id, taskTitle) => {
  deleteModal.classList.add("delete-modal--display");
  deleteModalText.textContent = `Are you sure want to delete task: ${taskTitle}?`;

  const confimDeleteHandler = async () => {
    await deleteTask(id);
    deleteModal.classList.remove("delete-modal--display");
  };
  if (previousConfirmDeleteHandler) {
    confirmDeleteModalButton.removeEventListener("click", previousConfirmDeleteHandler);
  }
  confirmDeleteModalButton.addEventListener("click", confimDeleteHandler);
  previousConfirmDeleteHandler = confimDeleteHandler;
};

const closeDeleteModal = () => {
  cancelDeleteButton.addEventListener("click", () => {
    deleteModal.classList.remove("delete-modal--display");
  });
};

const openEditModal = () => {
  formModal.classList.add("form-modal--display");
};

export { openModal, closeModal, openEditModal, openDeleteModal, closeDeleteModal };
