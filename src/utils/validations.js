export const validate = (formData) => {
  let formErrors = {};
  if (!formData.name) {
    formErrors.name = "El nombre es obligatorio.";
  } else if (formData.name.length < 2) {
    formErrors.name = "El nombre debe tener al menos 2 caracteres.";
  } else if (formData.name.length > 44) {
    formErrors.name = "El nombre no puede tener mas de 44 caracteres.";
  } else if (/\d/.test(formData.name)) {
    formErrors.name = "El nombre no puede contener números.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email) {
    formErrors.email = "El email es obligatorio.";
  } else if (!emailRegex.test(formData.email)) {
    formErrors.email = "El email no es válido.";
  }

  if (!formData.message) {
    formErrors.message = "El mensaje es obligatorio.";
  } else if (formData.message.length < 10) {
    formErrors.message = "El mensaje debe tener al menos 10 caracteres.";
  } else if (formData.message.length > 140) {
    formErrors.message =
      "El mensaje puede contener 140 caracteres como maximo.";
  }

  return formErrors;
};
