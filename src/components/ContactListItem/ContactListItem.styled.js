import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  gap: 20px;
  justify-content: flex-start;

  span {
    width: 150px;
  }
`;

export const ButtonDelete = styled.button`
  cursor: pointer;
  background-color: violet;
  border-radius: 15%;
  &:hover {
    background-color: red;
  }
`;