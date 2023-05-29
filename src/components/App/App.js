import { useSelector } from 'react-redux';
import { getContacts } from 'components/redux/contacts/contacts-selectors';

import { GlobalStyle } from "./GlobalStyle";
import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import { Section } from "components/Section/Section";
import { Header } from "components/Header/Header";
import { Container } from "components/Container/Container"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
const contacts = useSelector(getContacts);
  return (
    <Container>
      <Section title="Phonebook" >
        <ContactForm />
        {contacts.length > 0 && 
        <>
          <Header title="Contacts"/>
          <Filter />
          <ContactList />
        </>
        };
      </Section>
      <ToastContainer />
      <GlobalStyle />
    </Container>
  );
};

