import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Menüler',
  description:
    'Haftalık şantiye yemek listelerimizi inceleyin; dengeli ve besleyici menülerimiz ile çalışanlarınıza enerji katın.',
  alternates: {
    canonical: '/menuler',
  },
};

export default function MenulerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

