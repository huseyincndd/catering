import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kurumsal',
  description:
    "Atilgan Global'in 30 yılı aşkın tecrübesiyle kurumsal yapısını, değerlerini ve Türkiye genelindeki projelerini keşfedin.",
  alternates: {
    canonical: '/kurumsal',
  },
};

export default function KurumsalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

