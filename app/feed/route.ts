import { Feed } from 'feed';
import { siteConfig } from '@/lib/site';

export async function GET() {
  const feed = new Feed({
    title: siteConfig.name,
    description: siteConfig.description,
    id: siteConfig.url,
    link: siteConfig.url,
    language: "en",
    image: siteConfig.ogImage,
    favicon: `${siteConfig.url}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, ${siteConfig.name}`,
    author: {
      name: siteConfig.name,
      email: "info@portonova.net",
      link: siteConfig.url
    }
  });

  feed.addItem({
    title: "Lower Trucking Insurance Costs",
    id: `${siteConfig.url}/blog/lower-trucking-insurance-costs`,
    link: `${siteConfig.url}/blog/lower-trucking-insurance-costs`,
    description: "Learn how to optimize your fleet operations for better rates based on our extensive carrier network mapping.",
    date: new Date(),
  });

  return new Response(feed.rss2(), {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 's-maxage=86400, stale-while-revalidate',
    },
  });
}
