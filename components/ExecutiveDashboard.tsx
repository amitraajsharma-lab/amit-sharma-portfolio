export default function ExecutiveDashboard() {
  const metrics = [
    {
      value: "AED 250M+",
      label: "Enterprise Value Delivered",
      description:
        "AI, automation and transformation-led business impact",
    },
    {
      value: "AED 40M+",
      label: "Hard Cost Savings",
      description:
        "Delivered through operating model redesign and automation",
    },
    {
      value: "AED 300M+",
      label: "Portfolio Turnaround",
      description:
        "Recovered distressed operations to full SLA compliance",
    },
    {
      value: "3,500+",
      label: "FTE Leadership",
      description:
        "Multi-country teams across complex transformation programs",
    },
    {
      value: "25+",
      label: "Years Experience",
      description:
        "Transformation, operations and enterprise leadership",
    },
    {
      value: "12+",
      label: "Countries Served",
      description:
        "Europe, UK, US, ANZ, India, UAE and GCC markets",
    },
    {
      value: "30%",
      label: "Digital Revenue CAGR",
      description:
        "Built and scaled transformation-led growth propositions",
    },
    {
      value: "Stevie • GSA • ISG",
      label: "Global Recognition",
      description:
        "Industry awards for enterprise transformation excellence",
    },
  ];

  return (
    <section
      id="impact"
      style={{
        background: "#070707",
        padding: "120px 40px",
        color: "#ffffff",
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
              color: "#c9a84c",
              textTransform: "uppercase",
              letterSpacing: "4px",
              marginBottom: "16px",
              fontSize: "14px",
            }}
          >
            Executive Impact Dashboard
          </div>

          <h2
            style={{
              fontSize: "56px",
              marginBottom: "20px",
            }}
          >
            Transformation Outcomes at Scale
          </h2>

          <p
            style={{
              color: "#bdbdbd",
              maxWidth: "900px",
              margin: "0 auto",
              fontSize: "20px",
              lineHeight: "1.8",
            }}
          >
            Delivering measurable business value through enterprise AI,
            digital transformation, operating model redesign and
            customer operations excellence.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(280px,1fr))",
            gap: "24px",
          }}
        >
          {metrics.map((item) => (
            <div
              key={item.label}
              style={{
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(201,168,76,0.20)",
                borderRadius: "20px",
                padding: "32px",
                minHeight: "220px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow:
                  "0 10px 40px rgba(0,0,0,0.35)",
              }}
            >
              <div
                style={{
                  color: "#c9a84c",
                  fontSize: item.value.length > 12 ? "24px" : "40px",
                  fontWeight: "bold",
                  marginBottom: "16px",
                }}
              >
                {item.value}
              </div>

              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  marginBottom: "14px",
                }}
              >
                {item.label}
              </div>

              <div
                style={{
                  color: "#bdbdbd",
                  lineHeight: "1.7",
                  fontSize: "15px",
                }}
              >
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}