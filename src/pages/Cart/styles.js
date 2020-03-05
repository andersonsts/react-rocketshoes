import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  transition: opacity 0.25s ease-in;
  opacity: ${props => (props.ready ? '1' : '0')};
  height: 100%;

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: all 0.3s;

      &:hover {
        background: ${darken(0.04, '#7159c1')};
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    vertical-align: middle;
    border-bottom: 1px solid #eee;
  }

  figure {
    transition: opacity 0.3s;
  }

  figure:hover {
    opacity: 0.9;
  }

  figure:hover img {
    transform: scale(1.04);
  }

  img {
    height: 100px;
    transition: all 0.3s;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;

export const Loading = styled(Loader)`
  position: absolute;
  top: calc(50% - 50px);
  left: calc(50% - 50px);
  height: 100%;
`;

export const EmptyCart = styled.div`
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > svg {
    width: 180px;
    height: 180px;
    opacity: 0.15;
  }

  > strong {
    font-size: 23px;
    color: #000;
    margin-top: 30px;
  }

  > p {
    font-size: 15px;
    /* font-weight: bold; */
    margin-top: 10px;
    color: #333;
  }

  > a {
    margin-top: 18px;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    border-radius: 4px;
    background: #7159c1;
    padding: 13px 20px;
    color: #fff;
    transition: background 0.25s ease-in-out;

    &:hover {
      background: ${lighten(0.05, '#7159c1')};
    }
  }
`;
