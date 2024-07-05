"use client";
import { useState } from "react";
import Swal from "sweetalert2";
import { validate } from "../../../utils/validations";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validate(formData);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    Swal.fire({
      title: "¡Mensaje enviado!",
      text: `Nombre: ${formData.name} | Email: ${formData.email} | Mensaje: ${formData.message}`,
      icon: "success",
    });

    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setErrors({});
  };

  return (
    <div className={styles.container}>
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Nombre</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Tu nombre..."
          />
          <div className={styles.errorContainer}>{errors?.name}</div>
        </div>
        <div className={styles.formGroup}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Tu email..."
          />
          <div className={styles.errorContainer}>{errors?.email}</div>
        </div>
        <div className={styles.formGroup}>
          <label>Mensaje</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Aqui debes escribir tu mensaje..."
          ></textarea>
          <div className={styles.errorContainer}>{errors?.message}</div>
        </div>
        <button type="submit" className={styles.submitButton}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
