import styled from 'styled-components';
import { lighten } from 'polished';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    width: 310px;
    padding: 20px;

    &:hover figure {
      opacity: 0.9;
    }

    figure img {
      align-self: center;
      max-width: 250px;
      opacity: 1;
    }

    figure {
      transition: opacity 0.2s ease-in-out;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
      border-top: 1px solid #eee;
      padding-top: 8px;
      overflow-wrap: break-word;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
      padding-bottom: 8px;
      border-bottom: 1px solid #eee;
    }

    button {
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;

      display: flex;
      align-items: center;

      transition: background 0.2s ease-in-out;

      &:hover {
        background: ${lighten(0.04, '#7159c1')};
      }

      div {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);

        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;
