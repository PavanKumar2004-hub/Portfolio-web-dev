import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Jaya Chandra Prakash Pavan Kumar Putta - Full Stack Web Developer";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#080c14",
          padding: "70px 80px",
          fontFamily: "sans-serif",
          color: "#ffffff",
          backgroundImage:
            "radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.05) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(59, 130, 246, 0.15) 10%, transparent 40%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              padding: "10px 20px",
              borderRadius: "9999px",
              backgroundColor: "rgba(59, 130, 246, 0.15)",
              border: "1px solid rgba(59, 130, 246, 0.3)",
              fontSize: "20px",
              fontWeight: 600,
              color: "#60a5fa",
            }}
          >
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "9999px",
                backgroundColor: "#10b981",
              }}
            />
            Available for Full-Time Roles
          </div>

          <div
            style={{
              fontSize: "20px",
              color: "#94a3b8",
              fontFamily: "monospace",
            }}
          >
            pavankumar.dev
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "56px",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              color: "#ffffff",
            }}
          >
            Jaya Chandra Prakash Pavan Kumar Putta
          </div>

          <div
            style={{
              fontSize: "30px",
              fontWeight: 600,
              color: "#60a5fa",
            }}
          >
            Full Stack Web Developer | MERN &amp; Next.js
          </div>

          <div
            style={{
              fontSize: "22px",
              color: "#cbd5e1",
              maxWidth: "950px",
              lineHeight: 1.4,
            }}
          >
            Building scalable, high-performance web applications with clean component architecture and production-ready technologies.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            paddingTop: "24px",
          }}
        >
          <div style={{ display: "flex", gap: "16px" }}>
            {["Next.js", "React.js", "Node.js", "PostgreSQL", "Tailwind CSS", "Redis"].map(
              (tech) => (
                <div
                  key={tech}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "8px",
                    backgroundColor: "rgba(30, 41, 59, 0.7)",
                    border: "1px solid rgba(51, 65, 85, 0.8)",
                    fontSize: "16px",
                    color: "#e2e8f0",
                  }}
                >
                  {tech}
                </div>
              )
            )}
          </div>

          <div
            style={{
              fontSize: "18px",
              color: "#f59e0b",
              fontWeight: 600,
            }}
          >
            B.Tech CGPA: 8.44
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
