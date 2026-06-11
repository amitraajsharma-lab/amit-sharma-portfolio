export default function TrustedBy() {
  const companies = [
    "Capgemini",
    "WNS",
    "TCS",
    "HSBC Bank",
    "Google",
    "BIG 4 Utilities - UK",
    "Top 3 Power Retailers - ANZ",
    "SAP",
    "AWS"
  ];

  return (
    <section
      style={{
        padding: "100px 8%",
        background: "#080808",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "60px",
        }}
      >
        <p
          style={{
            color: "#c9a84c",
            letterSpacing: "3px",
            textTransform: "uppercase",
          }}
        >
          Trusted By Leading Enterprises
        </p>

        <h2
          style={{
            color: "#ffffff",
            fontSize: "52px",
            marginTop: "20px",
          }}
        >
          Global Organisations & Transformation Ecosystems
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
        }}
      >
        {companies.map((company) => (
          <div
            key={company}
            style={{
              background: "#0b0b0b",
              border:
                "1px solid rgba(201,168,76,0.2)",
              borderRadius: "16px",
              padding: "30px",
              textAlign: "center",
              color: "#ffffff",
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            {company}
          </div>
        ))}
      </div>
    </section>
  );
}