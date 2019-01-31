import styled from 'styled-components';

export const Container = styled.div`
  padding: 50px;
`;

export const Amount = styled.div`
    border: 1px solid;
    padding: 15px;
    border-radius: 1px;
    width: 100%;
    max-width: 320px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    font-size: 20px;
    flex-wrap: wrap;

  strong {
    margin-left: 10px;
    display: block;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding: 0 20px;

  button {
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