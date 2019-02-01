import styled from 'styled-components';

import { Content } from '../../styles/components';

export const Container = styled.div`
  margin-top: 50px;

  ${Content} {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const ListCard = styled.div`
  border: 0.5px solid;
  padding: 15px;
  margin-top: 20px;
  border-radius: 1px;
  width: 100%;

  p {
    max-width: 100%;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;

    &.actions {
      width: 100px;
    }

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
      padding: 10px;
      flex-wrap: wrap;

      transition: .2s background ease-out;

      > div {
        &:first-child {
          flex: 1;
          display: flex;
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
`;

export const HeaderList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid rgba(255,255,255, .3);
  margin-bottom: 5px;
  padding-top: 5px;

  div {
    display: flex;

    p {
      text-transform: uppercase;
      font-size: 13px;
    }

    > &:first-child {
      flex: 1;
    }
  }
`;

export const ColumnList = styled.div`
  max-width: 100%;
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis;
  width: ${props => props.width ? `${props.width}px` : "100%" };
  
  &:not(:last-child) {
    margin-right: 20px;
  } 
`;