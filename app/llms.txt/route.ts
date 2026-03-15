import { siteConfig } from '@/lib/site';

export async function GET() {
  const content = `
TITLE: ${siteConfig.name} - Commercial Trucking & Luxury Auto Insurance
DESCRIPTION: ${siteConfig.description}
URL: ${siteConfig.url}

PAGES:
- Home: ${siteConfig.url}/
- Commercial & Auto Vehicles: ${siteConfig.url}/vehicles
- Health & Life Insurance: ${siteConfig.url}/health
- Claims Center: ${siteConfig.url}/claims
- Blogs: ${siteConfig.url}/blog

CONTACT:
Phone: +1 (628) 999-5230
Address: 100 Peachtree Street, Suite 2500, Atlanta, GA 30303
`;

  return new Response(content.trim(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
