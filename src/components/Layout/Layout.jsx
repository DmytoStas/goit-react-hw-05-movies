import { Suspense } from 'react';
import {
  Container,
  Header,
  HeaderNavList,
  Main,
  StyledLink,
} from './Layout.styled';

const { Outlet } = require('react-router-dom');

const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <nav>
            <HeaderNavList>
              <li>
                <StyledLink to="/">Home</StyledLink>
              </li>
              <li>
                <StyledLink to="/movies">Movies</StyledLink>
              </li>
            </HeaderNavList>
          </nav>
        </Container>
      </Header>
      <Main>
        <Container>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Container>
      </Main>
    </>
  );
};

export default Layout;
