import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Header = styled.header`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  text-align: center;
`;

const Content = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Layout = () => {
  return (
    <MainContainer>
      <Header>
        <h1>Chess Grandmasters Wiki</h1>
      </Header>
      <Content>
        <Outlet />
      </Content>
    </MainContainer>
  );
};

export default Layout; 