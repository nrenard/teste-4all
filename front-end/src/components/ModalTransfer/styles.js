import styled from 'styled-components';

import { PageTitle, ButtonsWrapper } from '../../styles/components';

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: ${({ isOpen }) => isOpen ? "0" : "-10px"};
  background: rgba(0,0,0,.8);
  z-index: 9;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ isOpen }) => isOpen ? "1" : "0" };
  visibility: ${({ isOpen }) => isOpen ? "visible" : "hidden" };
  transition: .3s opacity ease-out, .4s visibility ease-out, .2s top ease-out;
  padding: 10px;

  ${PageTitle} {
    text-align: center;
    margin-top: 10px;
  }
`;

export const Content = styled.div`
  background-color: rgba(59, 55, 66, 0.83);
  border-radius: 4px;
  width: 100%;
  max-width: 320px;
  padding: 20px;
  position: relative;

  ${ButtonsWrapper} {
    margin-top: 20px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    button, a {
      background: rgba(0,0, 0,.2);
      cursor: pointer;
      margin: 0;

      &:hover {
        background: rgba(0,0, 0,.3);
        color: #fff;
      }
    }
  }
`;

export const Alert = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background: rgba(37, 32, 44, 1);
  padding: 20px;
  align-items: center;

  > p {
    text-align: center;
  }
`;

export const ListCard = styled.ul`
  margin-top: 20px;
  overflow: auto;
  max-height: 140px;
  width: 100%;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
    padding-bottom: 5px;

    &:not(:last-child) {
      border-bottom: 1px solid rgba(255, 255, 255, .2);
    }

    ${ButtonsWrapper} {
      margin: 0;
      padding: 0;

      button {
        padding: 6px 9px;
        font-size: 11px;
      }
    }

  }
`;

export const Form = styled.form`
  margin-top: 30px;
`;
