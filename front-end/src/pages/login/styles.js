import styled from 'styled-components';

export const Container = styled.div`
  background: #25202c;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const Content = styled.div`
  background-color: rgba(255,255,255, .1);
  border-radius: 4px;
  width: 320px;
  min-height: 320px;
  padding: 20px;

  h1 {
    text-align: center;
    margin-top: 10px;
  }
`;

export const Form = styled.form`
  margin-top: 30px;
`;
