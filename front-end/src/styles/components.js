import styled, { css } from 'styled-components';

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

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const PageTitle = styled.h3`
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 16px;
  }
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

export const HeaderPage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  ${ButtonsWrapper} {
    padding: 0;
  }
`;

export const Tooltip = styled.div`
  position: absolute;
  top: -40px;
  background: #25202c;
  padding: 5px;
  border-radius: 4px;
  opacity: 0;
  visibility: hidden;
`;

export const List = styled.div`
  margin-top: 20px;
  border-radius: 4px;
  width: 100%;
  border: 1px solid rgba(255, 255,255, .1);
  position: relative;

  ${({ loading }) => loading && css`
    &:after {
      left: 0;
      top: 0;
      border-radius: 4px;
      height: 100%;
      width: 100%;
      position: absolute;
      background-color: rgba(255,255,255,.4);
      content: "";
    }
	`}

  p {
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:not(:last-child) {
      margin-right: 20px;
    }
  }

  ul {
    list-style: none;
    width: 100%;
    height: 100%;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px 15px;
      flex-wrap: wrap;
      position: relative;
      cursor: pointer;
      transition: .2s background ease-out;

      @media (max-width: 768px) {
        flex-direction: column;

        ${ButtonsWrapper} {
          margin-top: 10px;
        }
      }

      > div {
        &:first-child {
          flex: 1;
          display: flex;
          width: 100%;
        }

        @media (max-width: 768px) {
          flex-direction: column;
        }
      }

      p {
        strong {
          margin-left: 10px;
        }
      }

      &:hover {
        background: rgba(255,255,255, .1);

        ${Tooltip} {
          opacity: 1;
          visibility: visible;
        }
      }

      &:not(:last-child) {
        border-bottom: 0.5px solid rgba(255,255,255, .1);
      }
    }
  }

  ${ButtonsWrapper} {
    button {
      font-size: 11px;
      padding: 10px 12px;
    }
  }
`;
