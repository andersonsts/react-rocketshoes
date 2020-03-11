import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
  padding-bottom: 5px;
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.4s;
  position: relative;

  &:after {
    content: '${props => props.cartSize}';
    color: #fff;
    width: 20px;
    height: 20px;
    padding: 1px;
    font-weight: bold;
    font-size: 12px;
    border-radius: 50%;
    background: red;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: -10px;
    top: -10px;
    transition: opacity 0.15s ease-in-out;
  }

  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    span {
      font-size: 12px;
      color: #eee;
    }
  }
`;
