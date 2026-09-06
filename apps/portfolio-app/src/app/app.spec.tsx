import { render } from '@testing-library/react';
import { App } from './app';

const MockAppContent = vi.hoisted(() => vi.fn(() => <div data-testid="app-content" />));
vi.mock('./AppContent', () => ({ AppContent: MockAppContent }));

describe('App', () => {
  beforeEach(() => {
    MockAppContent.mockImplementation(() => <div data-testid="app-content" />);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders AppContent inside providers', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('app-content')).toBeTruthy();
  });

  it('shows translated error message when AppContent throws', () => {
    MockAppContent.mockImplementation(() => { throw new Error('render error'); });
    vi.spyOn(console, 'error').mockImplementation(() => undefined);
    const { getByText } = render(<App />);
    expect(getByText('Something went wrong. Please reload the page.')).toBeTruthy();
  });
});
