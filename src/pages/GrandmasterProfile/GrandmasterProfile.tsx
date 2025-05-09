import { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, BackButton } from './GrandmasterProfile.styles';
import GrandmasterProfileContent from './GrandmasterProfileContent';
import LoadingFallback from '@/components/LoadingFallback';
import Title from '@/components/Title';

const GrandmasterProfile = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <Container>
      <BackButton onClick={handleBack}>Back to List</BackButton>
      <Title>Grandmaster Profile</Title>
      <Suspense fallback={<LoadingFallback message="Loading grandmaster profile..." />}>
        <GrandmasterProfileContent />
      </Suspense>
    </Container>
  );
};

export default GrandmasterProfile;