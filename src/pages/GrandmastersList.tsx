import { Suspense } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useGrandmastersQuery } from '../queries';

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg};
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const GrandmasterLink = styled(Link)`
  display: block;
  padding: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: white;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const GrandmastersListContent = () => {
  const { data } = useGrandmastersQuery();
  
  return (
    <>
      <Title>Chess Grandmasters</Title>
      <p>Here's a list of all Grandmasters according to Chess.com:</p>
      
      {data.players.map((username) => (
        <GrandmasterLink key={username} to={`/grandmaster/${username}`}>
          {username}
        </GrandmasterLink>
      ))}
    </>
  );
};

const LoadingFallback = () => (
  <LoadingContainer>
    Loading Grandmasters...
  </LoadingContainer>
);

const GrandmastersList = () => {
  return (
    <Container>
      <Suspense fallback={<LoadingFallback />}>
        <GrandmastersListContent />
      </Suspense>
    </Container>
  );
};

export default GrandmastersList; 