import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 300px;
`;

const SpinnerWrapper = styled.div`
  width: 50px;
  height: 50px;
  margin-bottom: 16px;
`;

const Spinner = styled.div`
  width: 100%;
  height: 100%;
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top-color: ${({ theme }) => theme.colors.primary};
  animation: ${spin} 1s ease-in-out infinite;
`;

const LoadingText = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;

const Loader = () => {
  return (
    <LoaderContainer>
      <SpinnerWrapper>
        <Spinner />
      </SpinnerWrapper>
      <LoadingText>Loading...</LoadingText>
    </LoaderContainer>
  );
};

export default Loader; 