import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.therapywithjesica.dk";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/therapy/individual`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/therapy/group`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/therapy/gender-affirming`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/self-assessment`,
      lastModified: new Date(),
    },
  ];
}
