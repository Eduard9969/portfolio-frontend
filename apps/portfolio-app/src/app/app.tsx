import { QueryProvider, LocaleProvider } from '../providers';
import { AppContent } from './AppContent';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { ErrorContent } from './ErrorContent';

export const App = () => (
  <QueryProvider>
    <LocaleProvider>
      <ErrorBoundary fallback={<ErrorContent />}>
        <AppContent />
      </ErrorBoundary>
    </LocaleProvider>
  </QueryProvider>
);
