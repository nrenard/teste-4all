import styled from 'styled-components';

import { PageTitle, ButtonsWrapper } from '../../styles/components';

export const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(0,0,0,.8);
  z-index: 9;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ isOpen }) => isOpen ? "1" : "0" };
  visibility: ${({ isOpen }) => isOpen ? "visible" : "hidden" };

  transition: .3s opacity ease-out, .4s visibility ease-out ;

  ${PageTitle} {
    color: #000;
    text-align: center;
    margin-top: 10px;
  }
`;

export const Content = styled.div`
  background-color: rgba(255,255,255, .8);
  border-radius: 4px;
  width: 500px;
  min-height: 320px;
  padding: 20px;
`;

export const Form = styled.form`
  margin-top: 30px;
`;
