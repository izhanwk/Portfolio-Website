import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0f172a",
        }}
      >
        <div
          style={{
            fontSize: 120,
            fontWeight: 700,
            fontFamily: "Arial, sans-serif",
            color: "transparent",
            backgroundImage: "linear-gradient(90deg, #2563eb, #06b6d4)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
          }}
        >
          izhan.dev
        </div>
      </div>
    ),
    {
      width: size.width,
      height: size.height,
    }
  );
}
