import { Loader as Spinner } from '@org/shared-ui';

export const Loader = () => (
  <div className="fixed inset-0 bg-white flex items-center justify-center text-accent">
    <Spinner />
  </div>
);
