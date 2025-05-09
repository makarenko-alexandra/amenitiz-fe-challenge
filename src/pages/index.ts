import { createLazyComponent } from '../components/LazyComponent';

// Create lazy-loaded page components
export const LazyGrandmastersList = createLazyComponent(() => import('./GrandmastersList'));
export const LazyGrandmasterProfile = createLazyComponent(() => import('./GrandmasterProfile')); 