const openModal = (formModal, openModalButton) => {
  openModalButton.addEventListener("click", (e) => {
    e.preventDefault();
    formModal.classList.add("form-modal--display");
  });
};

const closeModal = (formModal, closeModalButton) => {
  closeModalButton.addEventListener("click", (e) => {
    e.preventDefault();
    formModal.classList.remove("form-modal--display");
  });
};

export { openModal, closeModal };
