import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Deriv Trading Platform',
  description: 'Modern trading platform for Forex, Crypto, and Binary Options',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-dark-950">{children}</body>
    </html>
  );
}
