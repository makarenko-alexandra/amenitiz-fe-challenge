import { useParams } from 'react-router-dom';
import styled from 'styled-components';

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

const BackButton = styled.button`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  &:hover {
    opacity: 0.9;
  }
`;

const GrandmasterProfile = () => {
  const { username } = useParams<{ username: string }>();

  return (
    <Container>
      <BackButton onClick={() => window.history.back()}>Back to List</BackButton>
      <Title>Grandmaster Profile</Title>
      <p>Profile for: {username}</p>
      {/* The grandmaster profile details will be added here in Step 2 */}
      <p>Profile details will appear here</p>
    </Container>
  );
};

export default GrandmasterProfile; 