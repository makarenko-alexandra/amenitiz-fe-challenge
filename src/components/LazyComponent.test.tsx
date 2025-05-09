import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import LazyComponent, { createLazyComponent } from './LazyComponent';
import { lazy } from 'react';
import type { ComponentType } from 'react';

// Mock dependencies
vi.mock('./LoadingFallback', () => ({
  default: () => <div data-testid="loader">Loading...</div>
}));

vi.mock('./ErrorBoundary', () => ({
  default: ({ children }: { children: React.ReactNode }) => <div data-testid="error-boundary">{children}</div>
}));

// Helper to wait a specified time
const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

describe('LazyComponent', () => {
  // Define a simple test component
  const TestComponent = () => <div data-testid="test-component">Test Component Content</div>;
  
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders with the default loader', async () => {
    // Create a lazy component that won't resolve immediately
    const slowLazyComponent = lazy(() => 
      new Promise<{ default: ComponentType<any> }>(resolve => {
        // This won't resolve during the test
        setTimeout(() => resolve({ default: TestComponent }), 1000);
      })
    );
    
    // Wrap render in act
    await act(async () => {
      render(<LazyComponent component={slowLazyComponent} />);
    });
    
    // The loader should be visible initially
    expect(screen.getByTestId('loader')).toBeInTheDocument();
    expect(screen.getByTestId('error-boundary')).toBeInTheDocument();
  });

  it('renders with a custom fallback', async () => {
    // Create a lazy component that won't resolve immediately
    const slowLazyComponent = lazy(() => 
      new Promise<{ default: ComponentType<any> }>(resolve => {
        // This won't resolve during the test
        setTimeout(() => resolve({ default: TestComponent }), 1000);
      })
    );
    
    const customFallback = <div data-testid="custom-fallback">Custom Loading...</div>;
    
    // Wrap render in act
    await act(async () => {
      render(<LazyComponent component={slowLazyComponent} fallback={customFallback} />);
    });
    
    // The custom fallback should be visible
    expect(screen.getByTestId('custom-fallback')).toBeInTheDocument();
    expect(screen.getByTestId('error-boundary')).toBeInTheDocument();
  });

  it('eventually renders the lazy component', async () => {
    // Use a component that will load after a brief delay
    const delayedComponent = lazy(() => 
      new Promise<{ default: ComponentType<any> }>(resolve => {
        setTimeout(() => resolve({ default: TestComponent }), 10);
      })
    );
    
    await act(async () => {
      render(<LazyComponent component={delayedComponent} />);
    });
    
    // Wait for the component to load
    await act(async () => {
      await wait(20);
    });
    
    // Component should now be visible
    expect(screen.getByTestId('test-component')).toBeInTheDocument();
    expect(screen.getByText('Test Component Content')).toBeInTheDocument();
  });
});

describe('createLazyComponent', () => {
  it('creates a component that can be rendered by React', async () => {
    // Create a specific test component for this test
    const QuickLoadContent = () => <div data-testid="quick-load-content">Quick Load Content</div>;
    
    // Create a lazy component that loads quickly for testing
    const quickImportFn = () => 
      new Promise<{ default: ComponentType<any> }>(resolve => {
        setTimeout(() => resolve({ default: QuickLoadContent }), 10);
      });
    
    // Use the factory to create the component
    const QuickLoadComponent = createLazyComponent(quickImportFn);
    
    // Verify it's a function
    expect(typeof QuickLoadComponent).toBe('function');
    
    // Render the component
    await act(async () => {
      render(<QuickLoadComponent />);
    });
    
    // Initially it should show the loader (wrapped in error boundary)
    expect(screen.getByTestId('loader')).toBeInTheDocument();
    expect(screen.getByTestId('error-boundary')).toBeInTheDocument();
    
    // Wait for component to load
    await act(async () => {
      await wait(20);
    });
    
    // After loading, it should show the actual component
    expect(screen.getByTestId('quick-load-content')).toBeInTheDocument();
    expect(screen.getByText('Quick Load Content')).toBeInTheDocument();
  });
}); 