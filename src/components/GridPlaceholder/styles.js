import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;
  height: 100%;
`;

export const ProductItem = styled.li`
  background: #fff;
  border-radius: 4px;
  padding: 20px 20px 20px;
  transition: opacity 0.2s;

  span {
    margin-top: 10px;
  }

  button {
    border: none;
    margin-top: 10px;
  }

  figure {
    margin-bottom: 31px;
  }
`;
