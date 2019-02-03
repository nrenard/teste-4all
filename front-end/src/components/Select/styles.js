import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin-top: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    color: #000;
    padding-left: 10px;
    font-size: 13px;
    background: #fff;
    width: 100%;
    border-radius: 4px;
    padding: 3px 10px;
    margin-top: 5px;
  }
`;

export const Label = styled.label`
  position: absolute;
  color: #000;
  font-size: 13px;
  font-weight: 600;
  left: 0;
  top: -18px;
  transition: .2s top ease-out, .2s left ease-out;
`;

export const SelectStyle = styled.select`
  border-radius: 4px;
  width: 100%;
  border: 1px solid #ccc;
  padding: 3px 10px;
  height: 30px;
`;
