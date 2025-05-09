import { Suspense, lazy } from 'react';
import type { ComponentType, LazyExoticComponent, ReactNode } from 'react';
import Loader from './Loader';
import ErrorBoundary from './ErrorBoundary';

interface LazyComponentProps {
  component: LazyExoticComponent<ComponentType<any>>;
  fallback?: ReactNode;
}

const LazyComponent = ({ component: Component, fallback = <Loader /> }: LazyComponentProps) => {
  return (
    <ErrorBoundary>
      <Suspense fallback={fallback}>
        <Component />
      </Suspense>
    </ErrorBoundary>
  );
};

export const createLazyComponent = (importFn: () => Promise<{ default: ComponentType<any> }>) => {
  const LazyComp = lazy(importFn);
  return () => <LazyComponent component={LazyComp} />;
};

export default LazyComponent; 