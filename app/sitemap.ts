import { MetadataRoute } from 'next';

const BASE_URL = 'https://atilganglobalcatering.com';

const routes: Array<{ path: string; changeFrequency: MetadataRoute.Sitemap[0]['changeFrequency']; priority: number }> = [
  { path: '/', changeFrequency: 'monthly', priority: 1 },
  { path: '/kurumsal', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/hizmetlerimiz', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/menuler', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/iletisim', changeFrequency: 'yearly', priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}

