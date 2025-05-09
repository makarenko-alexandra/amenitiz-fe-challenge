import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const PlaceholderLink = styled(Link)`
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

const GrandmastersList = () => {
  return (
    <Container>
      <Title>Chess Grandmasters</Title>
      <p>Grandmasters list will appear here. For now, here's a placeholder:</p>
      
      {/* Placeholder link - this will be replaced with actual data in Step 1 */}
      <PlaceholderLink to="/grandmaster/magnuscarlsen">
        Magnus Carlsen (placeholder)
      </PlaceholderLink>
    </Container>
  );
};

export default GrandmastersList; 