import { Suspense } from 'react';
import { Container } from './GrandmastersList.styles';
import GrandmastersListContent from './GrandmastersListContent';
import LoadingFallback from './LoadingFallback';

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