import styled from "styled-components";


export const Box = styled.div`
  border: 1px solid ${props => props.error ? "#f00" : "transparent"};
  border-radius: 4px;
`;

export const SelectedBox = styled.div`
  margin: 8px 8px;
  li{
    padding: 8px 16px;
    border-bottom: 1px solid #EEE;
    font-size: 0.9rem;
    &:nth-child(even){
      background: #FAFAFA;
    }
    &:nth-child(odd){
      background: #F0F0F0;
    }
  }
  
`;
export const Label = styled.label`
  font-size: 0.8rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const InputError = styled.span`
  color: #a00;
  font-size: 0.8rem;
  margin-top: 2px;
  margin-left: 8px;
`;


export const VisibledPointer = styled.div`
  margin-left: 16px;
  cursor: pointer;
  width: 20px;
  display: flex;
  justify-content: center;
`;