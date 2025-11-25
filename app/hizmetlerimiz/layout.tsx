import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hizmetlerimiz',
  description:
    'Toplu yemek, organizasyon catering, yerinde üretim ve lunch box gibi tüm profesyonel hizmetlerimizi keşfedin.',
  alternates: {
    canonical: '/hizmetlerimiz',
  },
};

export default function HizmetlerimizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

