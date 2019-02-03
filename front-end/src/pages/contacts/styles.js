import styled from 'styled-components';

import { Content, ButtonsWrapper, HeaderPage } from '../../styles/components';

export const Container = styled.div`
  padding: 50px 0;

  ${Content} {
    flex-direction: column;
  }

  ${ButtonsWrapper} {
    margin: 0;
    flex-direction: row;
    align-items: center;
    padding: 0;
    button {
      margin: 0 10px;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  @media (max-width: 768px) {
    ${HeaderPage} {
      ${ButtonsWrapper} {
        button {
          padding: 10px 10px;
          font-size: 11px;
        }
      }
    }
  }
`;
