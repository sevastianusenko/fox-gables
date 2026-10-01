import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "nodejs";
export const alt = `${site.name}: roofing, siding, windows, decks and remodeling in Lancaster County, PA`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#23272b",
          color: "#fff",
          fontFamily: "Arial, Helvetica, sans-serif",
          position: "relative",
        }}
      >
        <svg width="1200" height="630" viewBox="0 0 1200 630" style={{ position: "absolute", top: 0, left: 0 }}>
          <path d="M-20 640 L480 60 L1220 640" fill="none" stroke="#e3561d" strokeWidth="5" />
        </svg>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 64, width: "100%" }}>
          <div style={{ display: "flex", fontSize: 22, letterSpacing: 4, textTransform: "uppercase", color: "#e3561d", fontWeight: 700 }}>
            Owner-operated · PA HIC {site.hic} · Akron, PA
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 72, fontWeight: 900, lineHeight: 1, letterSpacing: -2, maxWidth: 900 }}>
              Roofs, siding, windows and decks. One licensed contractor.
            </div>
            <div style={{ display: "flex", fontSize: 28, color: "rgba(255,255,255,0.8)", marginTop: 24 }}>
              Lancaster and Lebanon counties · {site.phone}
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
            <div style={{ display: "flex", fontSize: 34, fontWeight: 900, letterSpacing: -1 }}>FOX GABLES</div>
            <div style={{ display: "flex", fontSize: 18, fontWeight: 600, letterSpacing: 6, color: "rgba(255,255,255,0.75)" }}>CONSTRUCTION</div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
