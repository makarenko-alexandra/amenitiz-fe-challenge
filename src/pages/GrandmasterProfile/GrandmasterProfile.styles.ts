import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg};
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const ProfileContainer = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Avatar = styled.img`
  width: 100%;
  max-width: 200px;
  border-radius: 8px;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const BackButton = styled.button`
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

export const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
`;

export const InfoItem = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const Label = styled.span`
  font-weight: bold;
  margin-right: ${({ theme }) => theme.spacing.xs};
`;

export const Value = styled.span`
  color: ${({ theme }) => theme.colors.text};
`; 