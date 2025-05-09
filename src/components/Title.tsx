import styled from 'styled-components';

interface TitleProps {
  children: React.ReactNode;
}

const StyledTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Title = ({ children }: TitleProps) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title; 