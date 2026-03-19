import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Max Cattarello',
  description:
    'Product builder at the intersection of technology and human behaviour. ' +
    'Currently focused on AI-native tools that make complex work feel effortless.',
  openGraph: {
    title: 'Max Cattarello',
    description:
      'Product builder at the intersection of technology and human behaviour.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
