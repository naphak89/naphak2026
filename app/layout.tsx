import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Naphak Jaengjaikul — Portfolio',
  description:
    'Personal portfolio of Naphak Jaengjaikul — Software Engineer, Full-Stack Developer, Design Engineer.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
