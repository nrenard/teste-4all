import styled from 'styled-components';
import { Content } from '../../styles/components';

export const Container = styled.header`
  background-color: rgba(255,255,255, .1);
  border-bottom: 1px solid rgba(255,255,255, .2);
  min-height: 100px;
  display: flex;
  align-items: center;

  @media (max-width: 769px) {
    ${Content} {
      flex-direction: column;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  flex: 1;
  margin-left: 50px;

  a {
    color: #ccc;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 600;
    margin-left: 15px;
    font-size: 13px;

    transition: color .2s ease-out;

    &:hover, &.active {
      color: #fff;
    }
  }
`;

export const User = styled.div`
  display: flex;
  justify-content: space-between;
  background: rgba(255,255,255,.1);
  padding: 10px;
  border-radius: 4px;
  flex-direction: column;
  overflow: hidden;
  position: relative;

  strong {
    margin-bottom: 2px;
  }

  div {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: rgba(0,0,0, .8);
    text-transform: uppercase;
    opacity: 0;
    transition: .2s all ease-out;
    cursor: pointer;
    color: #fff;
  }

  &:hover {
    div {
      opacity: 1;
    }
  }
`;
