import type { Metadata } from 'next';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://naphak.com';

export const metadata: Metadata = {
  title: 'Naphak Jaengjaikul — Portfolio',
  description:
    'Personal portfolio of Naphak Jaengjaikul — Software Engineer, Full-Stack Developer, Design Engineer.',
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: 'Naphak Jaengjaikul — Portfolio',
    description:
      'Personal portfolio of Naphak Jaengjaikul — Software Engineer, Full-Stack Developer, Design Engineer.',
    url: siteUrl,
    siteName: 'Naphak Jaengjaikul',
    images: [
      {
        url: '/previewPic.jpg',
        width: 1200,
        height: 630,
        alt: 'Naphak Jaengjaikul — Software Engineer Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Naphak Jaengjaikul — Portfolio',
    description:
      'Personal portfolio of Naphak Jaengjaikul — Software Engineer, Full-Stack Developer, Design Engineer.',
    images: ['/previewPic.jpg'],
  },
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
