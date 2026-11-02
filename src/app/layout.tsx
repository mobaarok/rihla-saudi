import type { ReactNode } from 'react';

// The real <html> and <body> are in app/[locale]/layout.tsx so we can set lang and dir.
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
