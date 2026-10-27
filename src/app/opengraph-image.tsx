import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt =
  "Reputation and experience you can trust. Raymond Hardin Roofing, Gilmer, Texas.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PILLS = ["Free estimates", "Licensed & insured", "BBB accredited"] as const;

export default async function OpenGraphImage() {
  const [display, sans, logo] = await Promise.all([
    readFile(join(process.cwd(), "src/assets/og/BarlowCondensed-Bold.ttf")),
    readFile(join(process.cwd(), "src/assets/og/Inter-Regular.ttf")),
    readFile(join(process.cwd(), "public/images/rhr-logo.jpg")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#ffffff",
          color: "#0e0e0e",
          fontFamily: "Inter",
        }}
      >
        <div style={{ display: "flex", height: 8, backgroundColor: "#284078" }} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            padding: "42px 64px 36px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <img
              src={`data:image/jpeg;base64,${logo.toString("base64")}`}
              alt=""
              width={210}
              height={78}
              style={{ objectFit: "contain", objectPosition: "left center" }}
            />
            <div
              style={{
                display: "flex",
                border: "1px solid #d5dbe8",
                color: "#284078",
                fontSize: 18,
                letterSpacing: 1.5,
                padding: "10px 16px",
                backgroundColor: "#ffffff",
              }}
            >
              // SHINGLE  •  METAL  •  TORCH-DOWN
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", marginTop: 46 }}>
            <div
              style={{
                display: "flex",
                fontFamily: "Barlow",
                fontSize: 84,
                lineHeight: 0.92,
                letterSpacing: -1.5,
                color: "#0e0e0e",
              }}
            >
              Reputation and experience
            </div>
            <div
              style={{
                display: "flex",
                fontFamily: "Barlow",
                fontSize: 84,
                lineHeight: 0.92,
                letterSpacing: -1.5,
                color: "#284078",
              }}
            >
              you can trust.
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 22,
                fontSize: 28,
                lineHeight: 1.35,
                color: "#3a3a3a",
                maxWidth: 920,
              }}
            >
              Family-owned in Gilmer since 1995. Shingle, metal, and torch-down rubber roofs, tear-offs, and repairs across East Texas.
            </div>
          </div>

          <div style={{ display: "flex", gap: 12, marginTop: 28 }}>
            {PILLS.map((pill) => (
              <div
                key={pill}
                style={{
                  display: "flex",
                  border: "1px solid #e1e4ea",
                  backgroundColor: "#ffffff",
                  color: "#3a3a3a",
                  fontSize: 18,
                  letterSpacing: 1.2,
                  textTransform: "uppercase",
                  padding: "10px 16px",
                }}
              >
                {pill}
              </div>
            ))}
          </div>

          <div style={{ display: "flex", flex: 1 }} />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderTop: "1px solid #e2e4ea",
              paddingTop: 18,
              fontSize: 18,
              letterSpacing: 1.8,
              color: "#5c5c5c",
            }}
          >
            <div style={{ display: "flex" }}>GILMER  •  EAST TEXAS</div>
            <div style={{ display: "flex", alignItems: "center", color: "#284078" }}>
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 8,
                  backgroundColor: "#284078",
                  marginRight: 10,
                }}
              />
              RAYMONDHARDIN-ROOFING.COM
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Barlow", data: display, weight: 700, style: "normal" },
        { name: "Inter", data: sans, weight: 400, style: "normal" },
      ],
    },
  );
}
