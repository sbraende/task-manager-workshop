export const fieldsToValidate = [
  {
    id: "title",
    message: "Please enter task title",
    errorClass: "form__title-error",
  },
  {
    id: "date",
    message: "Please enter date",
    errorClass: "form__date-error",
  },
  {
    id: "category",
    message: "Please select category",
    errorClass: "form__category-error",
  },
  {
    id: "priority",
    message: "Please choose a priority",
    errorClass: "form__priority-error",
  },
];

const validateForm = () => {
  let isValid = true;
  fieldsToValidate.forEach((field) => {
    const fieldToValidate = document.querySelector(`#${field.id}`);
    const errorParagraph = document.querySelector(`.${field.errorClass}`);

    fieldToValidate.addEventListener("blur", () => {
      if (!fieldToValidate.value.trim()) {
        errorParagraph.textContent = field.message;
        errorParagraph.style.display = "block";
      } else {
        errorParagraph.textContent = "";
        errorParagraph.style.display = "none";
      }
    });
  });

  fieldsToValidate.forEach((field) => {
    const fieldToValidate = document.querySelector(`#${field.id}`);
    if (!fieldToValidate.value.trim()) {
      isValid = false;
    }
  });
  return isValid;
};

export default validateForm;
