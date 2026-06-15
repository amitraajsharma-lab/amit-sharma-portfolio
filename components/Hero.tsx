import Image from "next/image";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg,#050505 0%,#0b0f17 100%)",
        color: "#ffffff",
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
          gridTemplateColumns: "1.3fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              color: "#D4AF37",
              textTransform: "uppercase",
              letterSpacing: "4px",
              fontSize: "14px",
              marginBottom: "24px",
              fontWeight: 600,
            }}
          >
            Enterprise AI Transformation Executive
          </div>

          <h1
            style={{
              fontSize: "84px",
              lineHeight: "1",
              marginBottom: "30px",
              fontWeight: 700,
            }}
          >
            Amit
            <br />
            Sharma
          </h1>

          <p
            style={{
              fontSize: "24px",
              lineHeight: "1.8",
              color: "#c7cbd4",
              maxWidth: "800px",
              marginBottom: "50px",
            }}
          >
            Driving AI Adoption, Shared Services Transformation,
            Customer Operations Excellence and Enterprise Value
            Creation across GCC, Banking, Telecom, Utilities and
            Global Business Services.
          </p>

          <div
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              marginBottom: "60px",
            }}
          >
            <button
              style={{
                background: "#D4AF37",
                color: "#000",
                border: "none",
                padding: "18px 36px",
                borderRadius: "10px",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              View Transformations
            </button>

            <a
              href="/Amit-Sharma-CV.pdf"
              download
              style={{
                border: "1px solid #D4AF37",
                color: "#D4AF37",
                textDecoration: "none",
                padding: "18px 36px",
                borderRadius: "10px",
                display: "inline-flex",
                alignItems: "center",
                fontWeight: 600,
              }}
            >
              Download CV
            </a>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              gap: "20px",
            }}
          >
            {[
              {
                value: "AED 250M+",
                label: "Value Delivered",
              },
              {
                value: "AED 40M+",
                label: "Savings Created",
              },
              {
                value: "3500+",
                label: "FTE Leadership",
              },
              {
                value: "25+",
                label: "Years Experience",
              },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(212,175,55,0.2)",
                  borderRadius: "14px",
                  padding: "24px",
                }}
              >
                <div
                  style={{
                    color: "#D4AF37",
                    fontSize: "30px",
                    fontWeight: 700,
                    marginBottom: "8px",
                  }}
                >
                  {item.value}
                </div>

                <div
                  style={{
                    color: "#aab2c5",
                    fontSize: "14px",
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Image
            src="/amit-sharma.jpg"
            alt="Amit Sharma"
            width={650}
            height={800}
            priority
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "24px",
              border: "1px solid rgba(212,175,55,0.2)",
            }}
          />
        </div>
      </div>
    </section>
  );
}