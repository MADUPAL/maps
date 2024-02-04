import { ReactNode } from 'react';

export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col space-y-4 min-h-screen p-4">
      {children}
    </div>
  );
}