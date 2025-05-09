import styled from 'styled-components';
import type { ReactNode } from 'react';

interface LoadingFallbackProps {
  message?: string;
  children?: ReactNode;
}

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`;

const LoadingFallback = ({ message = 'Loading...', children }: LoadingFallbackProps) => (
  <LoadingContainer>
    {children || <h2>{message}</h2>}
  </LoadingContainer>
);

export default LoadingFallback; 