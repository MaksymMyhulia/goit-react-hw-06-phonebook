import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact } from 'components/redux/contacts/contacts-actions';
import { setFilter } from 'components/redux/filter/filter-actions';
import { getFilter } from 'components/redux/filter/filter-selectors';
import {
  getContacts,
  getFilteredContacts,
} from 'components/redux/contacts/contacts-selectors';



import { GlobalStyle } from "./GlobalStyle";
import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import { Section } from "components/Section/Section";
import { Header } from "components/Header/Header";
import { Container } from "components/Container/Container"
import { ToastContainer, toast } from 'react-toastify';
import { toastifyOptions } from 'utils/toastifyOptions';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
const contacts = useSelector(getContacts);
const filteredContacts = useSelector(getFilteredContacts);
const filter = useSelector(getFilter);

const dispatch = useDispatch();

const isDublicate = ({ name, number }) => {
  const normalizedName = name.toLowerCase().trim();
  const normalizedNumber = number.trim();

  const dublicate = contacts.find(
    contact =>
      contact.name.toLowerCase().trim() === normalizedName ||
      contact.number.trim() === normalizedNumber
  );
  return Boolean(dublicate);
};

const onAddContact = ({ name, number }) => {
  if (isDublicate({ name, number })) {
    return toast.error(`${name}: is already in contacts`, toastifyOptions);
  }
  const action = addContact({ name, number });
  dispatch(action);
};

const onDeleteContact = contactId => {
  const action = deleteContact(contactId);
  dispatch(action);
};

const changeFilter = e => {
  const action = setFilter(e.target.value.toLowerCase().trim());
  dispatch(action);
};


 
  return (
    <Container>
            <Section title="Phonebook" >
              <ContactForm onAddContact={onAddContact} />
              <Header title="Contacts"/>
              <Filter value={filter} onChange={changeFilter} />
              <ContactList contacts={filteredContacts} onDelete={onDeleteContact}/>
            </Section>
      <ToastContainer />
      <GlobalStyle />
    </Container>
  );
};

