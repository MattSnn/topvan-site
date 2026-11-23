import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: Array<{
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }> = [
    { path: "/", changeFrequency: "weekly", priority: 1.0 },
    {
      path: "/transporte-universitario-piedade-sorocaba",
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      path: "/transporte-escolar-piedade-sorocaba",
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      path: "/aluguel-de-van-turismo-piedade",
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      path: "/transfer-aeroportos-eventos-piedade",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      path: "/frota-mercedes-sprinter-executiva",
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      path: "/sobre",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      path: "/guias",
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      path: "/guias/auxilio-transporte-universitario-piedade",
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      path: "/guias/como-escolher-van-universitaria-piedade-sorocaba",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      path: "/guias/destinos-excursao-aluguel-van-piedade",
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  return routes.map((route) => ({
    url: route.path === "/" ? SITE_URL : `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
