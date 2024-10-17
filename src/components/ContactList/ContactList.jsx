import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import s from "./ContactList.module.css";

const ContactList = () => {
  const filteredContacts = useSelector(
    selectFilteredContacts
  );

  return (
    <ul className={s.list}>
      {filteredContacts.map((contact) => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </ul>
  );
};

export default ContactList;
