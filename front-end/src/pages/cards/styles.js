import styled from 'styled-components';

import { Content, ButtonsWrapper } from '../../styles/components';

export const Container = styled.div`
  margin-top: 50px;

  ${Content} {
    align-items: flex-start;
    flex-direction: column;
  }

  ${ButtonsWrapper} {
    margin-top: 0;
  }
`;

export const ListCard = styled.div`
  padding: 15px 0;
  margin-top: 20px;
  border-radius: 1px;
  width: 100%;
  border: 1px solid rgba(255, 255,255, .1);

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
      padding: 10px 15px;
      flex-wrap: wrap;

      transition: .2s background ease-out;

      > div {
        &:first-child {
          flex: 1;
          display: flex;
        }
      }

      p {
        strong {
          margin-right: 10px;
        }
      }

      &:hover {
        background: rgba(255,255,255, .1);
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

export const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
