import React from 'react';
import { nanoid } from 'nanoid';
import styled from 'styled-components';

export const ContactList = ({ contacts, onDeleteContact }) => (
  <div>
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={nanoid()}>
          {name} : {number}
          <StyledBtn
            id={nanoid(id)}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </StyledBtn>
        </li>
      ))}
    </ul>
  </div>
);

const StyledBtn = styled.button`
  padding: 5px 5px;
  width: 70px;
  margin-left: 20px;

  background-color: transparent;
  border: 1px solid gray;
  border-radius: 15px;
  margin-right: 20px;
  cursor: pointer;
  background-color: beige;
`;
