import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;
`;

export const ImageGroup = styled.li`
  background: #fff;
  border-radius: 4px;
  padding: 20px 20px 20px;

  button {
    border: none;
    margin-top: 35px;
  }

  figure {
    margin-bottom: 30px;
  }
`;
