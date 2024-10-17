import { useEffect } from "react";
import {
  useSelector,
  useDispatch,
} from "react-redux";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { fetchContacts } from "./redux/contactsOps";
import {
  selectFilteredContacts,
  selectContactsLoading,
  selectContactsError,
} from "./redux/contactsSlice";
import Loader from "./components/Loader/Loader";
import "./App.css";

function App() {
  const contacts = useSelector(
    selectFilteredContacts
  );
  const loading = useSelector(
    selectContactsLoading
  );
  const error = useSelector(selectContactsError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList contacts={contacts} />
      </div>
    </>
  );
}

export default App;
