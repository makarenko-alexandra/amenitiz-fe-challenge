import { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Title, BackButton } from './GrandmasterProfile.styles';
import GrandmasterProfileContent from './GrandmasterProfileContent';
import LoadingFallback from './LoadingFallback';

const GrandmasterProfile = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <Container>
      <BackButton onClick={handleBack}>Back to List</BackButton>
      <Title>Grandmaster Profile</Title>
      <Suspense fallback={<LoadingFallback />}>
        <GrandmasterProfileContent />
      </Suspense>
    </Container>
  );
};

export default GrandmasterProfile; 