import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const App = () => {
  return (
    <AppContainer>
      <Title>Amenitiz Frontend Challenge</Title>
      <p>Welcome to the project!</p>
    </AppContainer>
  );
};

export default App;
