import 'styled-components';
import theme from '@/contexts/theme';

type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
} 