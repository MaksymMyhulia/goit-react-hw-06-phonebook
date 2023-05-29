import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'components/redux/contacts/contacts-slice';
import { getFilteredContacts } from 'components/redux/contacts/contacts-selectors';

import { List, Item, DeleteBtn } from "./ContactList.styled";



export const ContactList = () => { 
const filteredContacts = useSelector(getFilteredContacts);

const dispatch = useDispatch();

const onDeleteContact = contactId => {
  dispatch(deleteContact(contactId));
}
    return (
    <List>
        {filteredContacts.map(({ name, number, id }) => {
            return ( 
              <Item key={id}>
                <span>{name}:</span>
                <span>{number}</span>
              
                <DeleteBtn type="button" onClick={() => onDeleteContact(id)}>Delete</DeleteBtn>
              </Item>
              
            )}
            )}
    </List>
    );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ),
  onDelete: PropTypes.func.isRequired,
};