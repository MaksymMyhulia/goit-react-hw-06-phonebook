import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact } from 'redux/contacts/contacts-actions';

import {
  getContacts,
  getFilteredContacts,
} from 'redux/contacts/contacts-selectors';


import { useState } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import { Section } from "components/Section/Section";
import { Header } from "components/Header/Header";
import { Container } from "components/Container/Container"
import useLocalStorage from "hooks/useLocalStorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from "nanoid";



import initialContacts from "data/contacts.json";

export default function App () {
const contacts = useSelector(getContacts);
const filteredContacts = useSelector(getFilteredContacts);
 const [contacts, setContacts] = useLocalStorage("contacts", initialContacts);
 const [filter, setFilter] = useState("");

 const addContact = newContact => {
  const isExist = contacts.some(
    ({ name, number }) =>
      name.toLowerCase().trim() === newContact.name.toLowerCase().trim() ||
      number.trim() === newContact.number.trim()
  );

  if (isExist) {
    return toast.error(
      `${newContact.name}: is already in contacts`,
    );
  }

  setContacts(contacts => [{ ...newContact, id: nanoid() }, ...contacts]);
};

  const changeFilter = event => {
    setFilter(event.currentTarget.value.toLowerCase().trim());
   };

  const deleteContact = contactId => {
  setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const getFiltredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().trim().includes(normalizedFilter)
  );

    if (normalizedFilter && !filteredContacts.length) {
    toast.warn(`No contacts matching your request`);
    }

    return filteredContacts;
 };

 
  return (
    <Container>
            <Section title="Phonebook" >
              <ContactForm onAddContact={addContact} />
              <Header title="Contacts"/>
              <Filter value={filter} onChange={changeFilter} />
              <ContactList contacts={getFiltredContacts()} onDelete={deleteContact}/>
            </Section>
      <ToastContainer />
      <GlobalStyle />
    </Container>
  );
};

