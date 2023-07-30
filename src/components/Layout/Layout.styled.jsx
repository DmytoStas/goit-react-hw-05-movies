import styled from '@emotion/styled';
const { NavLink } = require('react-router-dom');

const Header = styled.header`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e7e9fc;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const Main = styled.main`
  padding-top: 20px;
  padding-bottom: 20px;
`;

const HeaderNavList = styled.ul`
  display: flex;
  align-items: center;
  padding-left: 20px;
  height: 50px;
  gap: 20px;
  list-style-type: none;
`;

const Container = styled.div`
  width: 1440px;
  padding-left: 20px;
  padding-right: 20px;
`;

const StyledLink = styled(NavLink)`
  font-size: 18px;
  color: black;
  text-decoration: none;

  &.active {
    color: orange;
  }
`;

export { Header, Main, HeaderNavList, Container, StyledLink };
