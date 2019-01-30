import styled from 'styled-components';

export const Container = styled.header`
  background-color: rgba(255,255,255, .1);
  border-bottom: 1px solid rgba(255,255,255, .2);
  height: 100px;
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 10px;
  margin: 0 auto;
  display: flex;
  align-items: center;
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