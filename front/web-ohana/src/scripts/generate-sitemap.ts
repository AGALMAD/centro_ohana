import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

// Definir __dirname en ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: "https://centrohana.com" });

  // Ruta para guardar el sitemap en la carpeta dist
  const writeStream = createWriteStream(
    resolve(__dirname, "../../dist/sitemap.xml")
  );

  sitemap.pipe(writeStream);

  const routes = [
    "/",
    "/conocenos",
    "/talleres",
    "/contacto",
    "/blog",
    "/galeria",
    "/servicios",
    "/aviso-legal",
    "/politica-de-privacidad",
  ];

  for (const route of routes) {
    sitemap.write({ url: route, changefreq: "weekly", priority: 0.8 });
  }

  for (const url of routes) {
    sitemap.write({ url });
  }

  sitemap.end();

  await streamToPromise(sitemap);
  console.log("✅ Sitemap generado correctamente");
}

generateSitemap().catch(console.error);
