import Image from "next/image";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg,#0c0c0d 0%,#111216 100%)",
        color: "white",
        display: "flex",
        alignItems: "center",
        padding: "120px 40px 80px",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              color: "#c9a84c",
              textTransform: "uppercase",
              letterSpacing: "4px",
              marginBottom: "20px",
            }}
          >
            Enterprise AI & Transformation Executive
          </div>

          <h1
            style={{
              fontSize: "82px",
              lineHeight: "1.05",
              marginBottom: "30px",
            }}
          >
            Amit
            <br />
            Sharma
          </h1>

          <p
            style={{
              fontSize: "22px",
              lineHeight: "1.8",
              color: "#cfcfcf",
              maxWidth: "700px",
              marginBottom: "40px",
            }}
          >
            Driving Enterprise AI, Shared Services,
            Customer Operations and Operating Model
            Transformation Across Global Enterprises.
          </p>

          <div
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="#transformations"
              style={{
                background: "#c9a84c",
                color: "#000",
                textDecoration: "none",
                padding: "16px 32px",
                borderRadius: "10px",
                fontWeight: 700,
                display: "inline-block",
              }}
            >
              View Transformations
            </a>

            <a
              href="/Amit-Sharma-CV.pdf"
              download
              style={{
                border: "1px solid #c9a84c",
                color: "#c9a84c",
                background: "transparent",
                padding: "16px 32px",
                borderRadius: "10px",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Download CV
            </a>
          </div>
        </div>

        <div>
          <Image
            src="/amit-sharma.jpg"
            alt="Amit Sharma"
            width={600}
            height={700}
            priority
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "24px",
            }}
          />
        </div>
      </div>
    </section>
  );
}