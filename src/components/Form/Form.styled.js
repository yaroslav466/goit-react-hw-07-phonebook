import styled from 'styled-components';

export const FormStyle = styled.form`
  margin-left: 30px;

  button {
    display: block;
    margin-top: 15px;
    cursor: pointer;
    background-color: violet;
    border-radius: 3px;

    &:hover {
      background-color: red;
    }
  }
`;