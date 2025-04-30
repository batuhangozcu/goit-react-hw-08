import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import { SyncLoader } from "react-spinners";

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };
  const loading = useSelector((state) => state.contacts.loading);

  if (loading) {
    return (
      <div className={styles.loaderContainer}>
        <SyncLoader color="#646cff" />
      </div>
    );
  }

  return (
    <ul className={styles.contactList}>
      {filteredContacts.length > 0 ? (
        filteredContacts.map((contact) => (
          <Contact
            key={contact.id}
            contact={contact}
            onDelete={() => handleDelete(contact.id)}
          />
        ))
      ) : (
        <p>No contacts found.</p>
      )}
    </ul>
  );
};

export default ContactList;
