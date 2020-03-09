import styled from 'styled-components';
// import { Carousel } from 'react-responsive-carousel';
// import Loader from 'react-loader-spinner';
import { lighten } from 'polished';

export const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;
  height: 100%;
`;

export const AddFavorite = styled.button`
  border: 0;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  margin-top: 15px;

  &:active svg {
    transform: scale(1.2);
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;

    > svg {
      width: 27px;
      height: 27px;
      transition: transform 0.25s;
    }
  }
`;

export const ImagesGroup = styled.li`
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 0px 20px 20px;
  border-radius: 4px;
  position: relative;
  transition: opacity 0.4s ease-in;
  opacity: ${props => (props.ready ? '1' : '0')};
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);

  &:hover figure {
    opacity: 0.9;
  }

  > svg {
    color: #333;
    font-size: 25px;
    position: absolute;
    right: 0;
    margin: 10px 10px;
    transition: all 0.3s;
    z-index: 2;

    &:hover {
      transform: scale(1.05);
      cursor: pointer;
    }
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
    margin: 5px 0px 20px;
  }

  button.add {
    display: flex;
    background: #7159c1;
    border: 0;
    align-items: center;
    border-radius: 4px;

    margin-top: auto;
    transition: all 0.3s;

    &:hover {
      background: ${lighten(0.05, '#7159c1')};
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      padding: 12px;
      background: rgba(0, 0, 0, 0.1);

      svg {
        font-size: 18px;
        margin-right: 4px;
      }
    }

    strong {
      color: #fff;
      margin-left: 15px;
    }
  }
`;

export const Images = styled.div`
  width: 250px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 70px;
  margin-top: 10px;

  div {
    background: #fff;
    width: 230px;
    height: 200px;
    border-radius: 2px;
    align-self: center;

    figure {
      opacity: 1;
      transition: all 0.4s;
      height: 200px;
    }

    figure:hover {
      opacity: 0.9;
      transform: scale(1.05);
    }
  }
`;

// export const Loading = styled(Loader)`
//   position: absolute;
//   top: calc(50% - 50px);
//   left: calc(50% - 50px);
// `;
