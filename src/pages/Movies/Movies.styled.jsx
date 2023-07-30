import styled from '@emotion/styled';
import { Field } from 'formik';

const SubmitButton = styled.button`
  box-shadow: inset 0px 1px 0px 0px #ffffff;
  background: linear-gradient(to bottom, #f9f9f9 5%, #e9e9e9 100%);
  background-color: #f9f9f9;
  border-radius: 6px;
  border: 1px solid #dcdcdc;
  display: inline-block;
  cursor: pointer;
  color: #666666;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  margin-left: 10px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #ffffff;

  &:hover {
    background: linear-gradient(to bottom, #e9e9e9 5%, #f9f9f9 100%);
    background-color: #e9e9e9;
  }
`;
const SearchInput = styled(Field)`
  box-shadow: inset 0px 1px 0px 0px #ffffff;
  border-radius: 6px;
  border: 1px solid #dcdcdc;
  font-family: Arial;
  font-size: 15px;
  width: 200px;
  height: 28px;
`;

export { SubmitButton, SearchInput };
