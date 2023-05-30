import React from "react";
import { Formik } from "formik";
import * as Yup from 'yup';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toastifyOptions } from 'utils/toastifyOptions';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contacts-slice';
import { getContacts } from 'redux/contacts/contacts-selectors';


import {
    Form,
    FormField,
    LabelWrapper,
    FormikField,
    ErrorMessage,
    SubmitButton
} from "./ContactForm.styled"; 




const schema = Yup.object().shape({
 name: Yup.string()
 .trim()
 .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
 "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
 )
 .required('Required'),
 number: Yup.string()
 .matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
 "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
 )
 .trim()
 .required('Required'),
})

const initialValues = { name: "", number: "" };

export const ContactForm = () => {
const contacts = useSelector(getContacts);
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
    return toast.error(
      `This contact is already in contacts`,
      toastifyOptions
    );
  }
  dispatch(addContact({ name, number }));
};    

    return (
      <Formik
      initialValues={initialValues}
      onSubmit={(values, { resetForm }) => {
        onAddContact({ ...values });
        resetForm();
      }}
      validationSchema={schema}
      >
        
          <Form>
            <FormField htmlFor="name">
                <LabelWrapper>
                    Name
                </LabelWrapper>
            <FormikField
                 type="text"
                 name="name"
                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                 title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                 required
            />
            </FormField>
            <ErrorMessage name="name" component="span"/>

            <FormField htmlFor="number">
                <LabelWrapper>
                    Number
                </LabelWrapper>
            <FormikField
                  type="tel"
                  name="number"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
            />
            </FormField>
            <ErrorMessage name="number" component="span"/>

            <SubmitButton type="submit">
                Add contact
            </SubmitButton>
         </Form>
      </Formik>

    )
}

