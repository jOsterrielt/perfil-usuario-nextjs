import Home from "../page";
import ContactForm from "../components/ContactForm/ContactForm";
import styles from "./Contact.module.css";

const ContactPage = () => {
  return (
    <Home>
      <div className={styles.contactPage}>
        <ContactForm />
      </div>
    </Home>
  );
};

export default ContactPage;
