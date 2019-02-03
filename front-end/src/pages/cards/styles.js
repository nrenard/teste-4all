import styled from 'styled-components';

import { Content, ButtonsWrapper } from '../../styles/components';

export const Container = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;

  ${Content} {
    align-items: flex-start;
    flex-direction: column;
  }

  ${ButtonsWrapper} {
    margin-top: 0;
  }
`;
