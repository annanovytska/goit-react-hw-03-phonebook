import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;

    this.props.onSubmit({ name, number });
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <StyledContactWrapper>
        <form onSubmit={this.handleSubmit}>
          <StyledLabel>Name</StyledLabel>
          <StyledInput
            type="text"
            name="name"
            required
            id={nanoid()}
            placeholder="Enter your name..."
            value={this.state.name}
            onChange={this.handleChange}
          />
          <StyledLabel>Number</StyledLabel>
          <StyledInput
            type="number"
            name="number"
            required
            placeholder="000-00-00"
            value={this.state.number}
            onChange={this.handleChange}
          />
          <StyledBtn type="submit">Add contact</StyledBtn>
        </form>
      </StyledContactWrapper>
    );
  }
}

ContactsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const StyledContactWrapper = styled.div`
  margin: 0 auto;
  width: 200px;
`;

const StyledLabel = styled.label`
  display: block;
  margin-left: 10px;
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: bold;
`;

const StyledInput = styled.input`
  display: block;
  margin-bottom: 20px;
  width: 200px;
  height: 30px;
`;

const StyledBtn = styled.button`
  padding: 10px 10px;
  width: 100px;

  background-color: transparent;
  border: 1px solid gray;
  border-radius: 15px;
  margin-right: 20px;
  cursor: pointer;
  background-color: beige;
`;
