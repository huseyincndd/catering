import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'İletişim',
  description:
    'Atilgan Global Catering ile teklif almak veya şantiye yemek ihtiyaçlarınızı paylaşmak için iletişime geçin.',
  alternates: {
    canonical: '/iletisim',
  },
};

export default function IletisimLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

