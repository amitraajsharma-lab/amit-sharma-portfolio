import Image from "next/image";

export default function Navigation() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: "rgba(12,12,13,0.90)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(201,168,76,0.15)",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "8px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <a
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <Image
  src="/logo.png"
  alt="Amit"
  width={220}
  height={44}
  priority
  style={{
    width: "220px",
    height: "auto",
    display: "block",
  }}
/>
        </a>

        <div
          style={{
            display: "flex",
            gap: "32px",
            color: "#ffffff",
            fontSize: "13px",
            fontWeight: 500,
          }}
        >
          <a
            href="#impact"
            style={{
              color: "#ffffff",
              textDecoration: "none",
            }}
          >
            Impact
          </a>

          <a
            href="#transformations"
            style={{
              color: "#ffffff",
              textDecoration: "none",
            }}
          >
            Transformations
          </a>

          <a
            href="#journey"
            style={{
              color: "#ffffff",
              textDecoration: "none",
            }}
          >
            Journey
          </a>

          <a
            href="/articles"
            style={{
              color: "#ffffff",
              textDecoration: "none",
            }}
          >
            Insights
          </a>

          <a
            href="#contact"
            style={{
              color: "#ffffff",
              textDecoration: "none",
            }}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}