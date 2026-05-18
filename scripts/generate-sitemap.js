import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://www.kypfc.com';

const staticRoutes = [
    '/',
    '/about',
    '/magazines',
    '/all-brands',
    '/contact',
    '/advantages',
    '/goals'
];

async function generateSitemap() {
    try {
        console.log('Starting sitemap generation...');
        
        // 1. Get Brands
        const allBrandsPath = path.resolve(__dirname, '../src/pages/AllBrands.tsx');
        console.log(`Reading brands from ${allBrandsPath}`);
        const allBrandsContent = fs.readFileSync(allBrandsPath, 'utf-8');
        
        const brandSlugs = [];
        const brandRegex = /slug:\s*["']([^"']+)["']/g;
        let match;
        while ((match = brandRegex.exec(allBrandsContent)) !== null) {
            if (!brandSlugs.includes(match[1])) {
                brandSlugs.push(match[1]);
            }
        }
        console.log(`Found ${brandSlugs.length} brands`);

        // 2. Get Magazines
        const magazinesPath = path.resolve(__dirname, '../src/pages/Magazines.tsx');
        console.log(`Reading magazines from ${magazinesPath}`);
        const magazinesContent = fs.readFileSync(magazinesPath, 'utf-8');
        
        const magazineIds = [];
        const magazinesObjRegex = /const magazines: Record<string, Magazine> = {([\s\S]*?)};/;
        const magazinesObjMatch = magazinesObjRegex.exec(magazinesContent);
        
        if (magazinesObjMatch) {
            const objContent = magazinesObjMatch[1];
            const keyRegex = /^\s*([a-zA-Z0-9_]+):\s*{/gm;
            let keyMatch;
            while ((keyMatch = keyRegex.exec(objContent)) !== null) {
                magazineIds.push(keyMatch[1]);
            }
        }
        console.log(`Found ${magazineIds.length} magazines`);

        // 3. Build XML
        let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

        const today = new Date().toISOString().split('T')[0];

        // Static Routes
        staticRoutes.forEach(route => {
            sitemap += `  <url>
    <loc>${BASE_URL}${route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`;
        });

        // Brand Routes
        brandSlugs.forEach(slug => {
            sitemap += `  <url>
    <loc>${BASE_URL}/brands/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
`;
        });

        // Magazine Routes
        magazineIds.forEach(id => {
            sitemap += `  <url>
    <loc>${BASE_URL}/magazines/${id}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
`;
        });

        sitemap += `</urlset>`;

        const outputPath = path.resolve(__dirname, '../public/sitemap.xml');
        fs.writeFileSync(outputPath, sitemap);
        console.log(`Sitemap generated successfully at ${outputPath}`);
        console.log(`Total URLs: ${staticRoutes.length + brandSlugs.length + magazineIds.length}`);

    } catch (error) {
        console.error('Error generating sitemap:', error);
        process.exit(1);
    }
}

generateSitemap();
