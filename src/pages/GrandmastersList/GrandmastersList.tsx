import { Suspense } from 'react';
import { Container } from './GrandmastersList.styles';
import GrandmastersListContent from './GrandmastersListContent';
import LoadingFallback from '@/components/LoadingFallback';

const GrandmastersList = () => {
  return (
    <Container>
      <Suspense fallback={<LoadingFallback message="Loading Grandmasters..." />}>
        <GrandmastersListContent />
      </Suspense>
    </Container>
  );
};

export default GrandmastersList; 