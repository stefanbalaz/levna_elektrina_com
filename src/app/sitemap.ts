import { MetadataRoute } from "next";
import { providers } from "../../src/app/data/providers";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const providersURL = providers.map((p) => ({
    url: `${baseURL}/dodavatel/${p.slug}`,
    /*  lastModified: new Date().toISOString(),
        changeFrequency: "daily",
        priority: 0.7,
    */
  }));

  return [
    {
      url: baseURL,
    },
    {
      url: `${baseURL}/dodavatel`,
    },
    {
      url: `${baseURL}/proces-zmeny`,
    },
    {
      url: `${baseURL}/duvody-zmeny`,
    },
    {
      url: `${baseURL}/cena-elektriny`,
    },
    {
      url: `${baseURL}/impresum`,
    },
    {
      url: `${baseURL}/ochrana-osobnich-udaju`,
    },
    ...providersURL,
  ];
}
