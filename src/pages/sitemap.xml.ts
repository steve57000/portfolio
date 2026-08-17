import { featuredProjects } from '../data/portfolioData';

const siteUrl = 'https://steve57000.github.io/portfolio/';

export function GET() {
  const paths = ['', 'cv/', 'projets/', ...featuredProjects.map((project) => `projets/${project.id}/`)];
  const urls = paths.map((path) => `  <url><loc>${siteUrl}${path}</loc></url>`).join('\n');

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
