import styled from "styled-components";


export const InputForm = styled.input`
  margin-bottom: 10px;
  padding: 5px 8px;
  height: 32px;
  border: 1px solid ${props => props.error ? "#f00" : "#ccc"};
  border-radius: 4px;
`;
export const InputError = styled.span`
  color: #a00;
  font-size: 0.8rem;
  margin-top: -8px;
  margin-left: 8px;
`;
