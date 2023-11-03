import React from 'react';
import styled from 'styled-components';

export const Filter = ({ type, value, onChange }) => {
  return (
    <StyledFilterWrapper>
      <h2>Contacts</h2>
      <p>Find contact by name</p>
      <StyledInput type={type} value={value} onChange={onChange}></StyledInput>
    </StyledFilterWrapper>
  );
};

const StyledInput = styled.input`
  display: block;
  margin-bottom: 20px;
  width: 200px;
  height: 30px;
`;

const StyledFilterWrapper = styled.div`
  margin: 0 auto;
  width: 200px;
`;
