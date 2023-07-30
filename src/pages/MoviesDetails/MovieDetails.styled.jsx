import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const AdditionalInfo = styled.p`
&::before {
    content: '';
    display: block;
    margin-bottom: 20px;
    width: 100%;
    height: 1px;
    background-color: #e7e9fc;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const StyledLink = styled(NavLink)`
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
  text-decoration: none;
  text-shadow: 0px 1px 0px #ffffff;

  &:hover {
    background: linear-gradient(to bottom, #e9e9e9 5%, #f9f9f9 100%);
    background-color: #e9e9e9;
  }
`;

const AddInfoListWrapp = styled.div`
&::after {
    content: '';
    display: block;
    margin-bottom: 20px;
    width: 100%;
    height: 1px;
    background-color: #e7e9fc;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

export { AdditionalInfo, StyledLink, AddInfoListWrapp };
