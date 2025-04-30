import PhoneIcon from "../../assets/phone.svg";
import PersonIcon from "../../assets/person.svg";
import styles from "./Contact.module.css";

const Contact = ({ contact, onDelete }) => {
  return (
    <li className={styles.contact}>
      <img src={PersonIcon} alt="Person" width="50" />
      <span>{contact.name}</span>
      <img src={PhoneIcon} alt="Phone" width="50" />
      <span>{contact.number}</span>
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
