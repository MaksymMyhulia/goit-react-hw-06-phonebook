import React from "react";
import PropTypes from "prop-types";
import { List, Item, DeleteBtn } from "./ContactList.styled";



export const ContactList = ({ contacts, onDelete }) => { 
    return (
    <List>
        {contacts.map(({ name, number, id }) => {
            return ( 
              <Item key={id}>
                <span>{name}:</span>
                <span>{number}</span>
              
                <DeleteBtn type="button" onClick={() => onDelete(id)}>Delete</DeleteBtn>
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