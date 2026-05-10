import { render } from '@testing-library/react';
import { ErrorBoundary } from './ErrorBoundary';

const ThrowingChild = () => {
  throw new Error('render error');
};

describe('ErrorBoundary', () => {
  beforeEach(() => {
    vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('shows fallback when child throws', () => {
    const { getByText } = render(
      <ErrorBoundary fallback={<p>Something went wrong</p>}>
        <ThrowingChild />
      </ErrorBoundary>
    );
    expect(getByText('Something went wrong')).toBeTruthy();
  });

  it('renders children normally when no error occurs', () => {
    const { getByText } = render(
      <ErrorBoundary fallback={<p>error</p>}>
        <p>content</p>
      </ErrorBoundary>
    );
    expect(getByText('content')).toBeTruthy();
  });
});
