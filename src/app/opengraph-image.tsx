import { ImageResponse } from "next/og";

export const alt =
  "Topvan Transporte Executivo em Piedade-SP — Transporte Universitário, Escolar e Turismo";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#050505",
          backgroundImage:
            "radial-gradient(circle at 85% 20%, rgba(212, 175, 55, 0.24) 0%, rgba(5, 5, 5, 0) 55%)",
          padding: "56px 64px",
          color: "#ffffff",
          border: "8px solid #d4af37",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px 24px",
              borderRadius: "999px",
              border: "2px solid rgba(212, 175, 55, 0.6)",
              backgroundColor: "rgba(212, 175, 55, 0.14)",
              color: "#e0be47",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: "2px",
            }}
          >
            TOPVAN - PIEDADE-SP - DESDE 2016
          </div>

          <div
            style={{
              display: "flex",
              color: "#d4af37",
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            www.topvan.tur.br
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 60,
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: "-1px",
              color: "#ffffff",
            }}
          >
            Transporte Universitário, Escolar & Turismo
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 34,
              fontWeight: 700,
              color: "#d4af37",
            }}
          >
            Rota Diária Piedade - Sorocaba | Mercedes Sprinter Executiva 18 Lugares
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "24px",
            borderTop: "2px solid rgba(255, 255, 255, 0.14)",
            fontSize: 24,
            color: "#d4d4d8",
          }}
        >
          <div style={{ display: "flex" }}>
            UNISO - FACENS - UNIP - Anhanguera - FATEC - Escolas Centro
          </div>
          <div
            style={{
              display: "flex",
              color: "#d4af37",
              fontWeight: 700,
            }}
          >
            WhatsApp: (15) 99628-4505
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
