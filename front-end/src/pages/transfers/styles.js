import styled from 'styled-components';
import { ButtonsWrapper, Content, List } from '../../styles/components';

export const Container = styled.div`
  padding: 50px 0;

  ${Content} {
    flex-direction: column;
  }

  ${ButtonsWrapper} {
    margin: 0;
  }

  ${List} {
    li {
      cursor: inherit;
    }
  }
`;
