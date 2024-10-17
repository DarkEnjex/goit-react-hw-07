import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import s from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={s.listItm}>
      <p className={s.pragraph}>
        <span>
          <FaUser className={s.icon} /> {name}
        </span>
        <span>
          <BsFillTelephoneFill
            className={s.icon}
          />{" "}
          {number}
        </span>
      </p>
      <button
        type="button"
        className={s.btn}
        onClick={() => {
          if (
            window.confirm(
              `Are you sure you want to delete ${name}?`
            )
          ) {
            dispatch(deleteContact(id));
          }
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
