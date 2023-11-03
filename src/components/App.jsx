import React, { Component } from 'react';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import styled from 'styled-components';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const stringifiedContacts = localStorage.getItem('key');
    const parsedContacts = JSON.parse(stringifiedContacts) ?? [];
    this.setState({ contacts: parsedContacts });
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      const stringifiedContacts = JSON.stringify(this.state.contacts);
      localStorage.setItem('key', stringifiedContacts);
    }
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  onFilterChange = event => {
    const inputValue = event.target.value;
    this.setState({ filter: inputValue });
  };

  onDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleFormSubmit = data => {
    const { name, number } = data;
    if (
      this.state.contacts.some(
        contact => contact.name === name && contact.number === number
      )
    ) {
      alert(`"${name}" is already in contacts!`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...data, id: nanoid() }],
    }));
  };

  render() {
    const filteredContactsByName = this.state.contacts.filter(contact => {
      return (
        contact.name
          .toLowerCase()
          .includes(this.state.filter.trim().toLowerCase()) ||
        contact.number.includes(this.state.filter)
      );
    });

    return (
      <StyledContainer>
        <ContactsForm onSubmit={this.handleFormSubmit} />

        <Filter
          label="Name"
          name={this.state.name}
          number={this.state.number}
          type="text"
          onChange={this.onFilterChange}
        />
        <ContactList
          contacts={filteredContactsByName}
          onDeleteContact={this.onDeleteContact}
        />
      </StyledContainer>
    );
  }
}

const StyledContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
