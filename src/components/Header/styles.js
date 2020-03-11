import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { lighten } from 'polished';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 0;
  padding-bottom: 5px;

  > a {
    padding-bottom: 5px;
  }
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
  }

  &:hover div strong {
    color: ${lighten(0.35, '#7159c1')};
  }  

  &:hover div:last-child {
    opacity: 1;
    visibility: visible;
    transform: none;
  }

  div.cart {
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 0.3s;

    > strong {
      display: block;
      color: #fff;
      margin-right: 5px;
      transition: all 0.3s ease-in-out;
    }

    > span {
      font-size: 12px;
      color: #eee;
    }
  }
`;

export const DropDown = styled.div`
  position: absolute !important;
  top: 100%;
  right: 0;
  background: #7159c1;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
  z-index: 5;
  width: 270px;
  border-radius: 4px;
  padding: 20px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
  transform: translateY(10px);

  > div {
    display: flex;

    + div {
      margin-top: 15px;
    }

    img {
      border-radius: 3px;
      width: 80px;
      padding: 5px;
      align-self: flex-start;
      background: #fff;
    }

    div {
      color: #fff;
      font-size: 14px;
      margin-left: 10px;
      text-align: left;

      p {
        font-size: 11px;
        margin-top: 3px;

        span {
          font-weight: bold;
          font-size: 13px;
        }
      }
    }
  }

  .more {
    width: 100%;
    margin: 2px 0;
    justify-content: center;
    color: rgba(255, 255, 255, 0.8);
    letter-spacing: 3px;
    font-size: 25px;
  }

  > h2 {
    border-top: 1px solid rgba(0, 0, 0, 0.15);
    margin-top: 20px;
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    span:first-child {
      color: rgba(255, 255, 255, 0.8);
      font-size: 12px;
    }
    span:last-child {
      color: #fff;
      font-size: 22px;
      font-weight: bold;
    }
  }
`;
