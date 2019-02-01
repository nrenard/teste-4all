import styled from 'styled-components';

export const ErrorMessage = styled.span`
  display: block;
  color: #cf4f48;
  font-size: 12px;
  margin: 14px 0px 10px;
  border-radius: 2px;
`;

export const SuccessMessage = styled.span`
  display: block;
  color: #07c50e;
  font-size: 12px;
  margin: 14px 0px 10px;
  border-radius: 2px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 10px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

export const PageTitle = styled.h3`
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 500;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding: 0 20px;

  button, a {
    background: rgba(255,255, 255,.1);
    margin: 0 auto;
    border: 0;
    padding: 7px 10px;
    text-transform: uppercase;
    color: #ccc;
    font-size: 12px;
    border-radius: 2px;
    font-weight: 600;
    transition: color .2s ease-out, background .2s ease-out;
    text-decoration: none;

    &:hover {
      background: rgba(255,255, 255,.2);
      color: #fff;
    }

    &:not(:first-child) {
      margin-top: 15px;
    }
  }

  button {
    padding: 12px 15px;
  }
`;
