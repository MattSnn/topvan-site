import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Topvan Transporte Executivo — Piedade e Sorocaba",
    short_name: "Topvan",
    description:
      "Transporte universitário, transporte escolar e aluguel de van executiva para turismo e eventos na rota Piedade ⇄ Sorocaba.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#d4af37",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/TopVan.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
