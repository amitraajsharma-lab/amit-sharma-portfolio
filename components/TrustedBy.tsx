export default function TrustedBy() {
  const ecosystems = [
    {
      category: "Banking & Financial Services",
      companies: ["HSBC", "JC Penny", "Standard Chartered"],
    },
    {
      category: "Technology & Enterprise Platforms",
      companies: ["Google", "SAP"],
    },
    {
      category: "Consulting & Transformation Services",
      companies: ["Capgemini", "TCS", "WNS"],
    },
    {
      category: "Utilities & Energy",
      companies: [
        "Big 4 Utilities - UK",
        "Top 3 Power Retailers - ANZ",
      ],
    },
    {
      category: "Telecom & Customer Operations",
      companies: [
        "Vodafone",      
        "TELKOM SA"
      ]
    },
    {
      category: "Global Shared Services",
      companies: [
        "GBS",
        "Shared Services",
        "Operating Model Transformation",
      ],
    },
  ];

  return (
    <section
      style={{
        background: "#0A0F1C",
        padding: "100px 40px",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "70px",
          }}
        >
          <div
            style={{
              color: "#D4AF37",
              textTransform: "uppercase",
              letterSpacing: "4px",
              marginBottom: "20px",
              fontSize: "14px",
            }}
          >
            Global Transformation Ecosystem
          </div>

          <h2
            style={{
              fontSize: "56px",
              marginBottom: "20px",
              color: "#ffffff",
            }}
          >
            Organisations, Industries & Platforms
          </h2>

          <p
            style={{
              maxWidth: "900px",
              margin: "0 auto",
              color: "#AAB2C5",
              fontSize: "20px",
              lineHeight: "1.8",
            }}
          >
            Experience spanning banking, technology,
            consulting, shared services, customer operations,
            utilities and enterprise transformation programs
            across global organisations.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(350px,1fr))",
            gap: "30px",
          }}
        >
          {ecosystems.map((item) => (
            <div
              key={item.category}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(212,175,55,0.15)",
                borderRadius: "18px",
                padding: "35px",
              }}
            >
              <h3
                style={{
                  color: "#D4AF37",
                  marginBottom: "25px",
                  fontSize: "22px",
                }}
              >
                {item.category}
              </h3>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                }}
              >
                {item.companies.map((company) => (
                  <div
                    key={company}
                    style={{
                      color: "#F5F7FA",
                      fontSize: "18px",
                      paddingBottom: "10px",
                      borderBottom:
                        "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {company}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}