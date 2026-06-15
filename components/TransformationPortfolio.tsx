export default function TransformationPortfolio() {
  const transformations = [
    {
      title: "Enterprise AI Transformation",
      value: "AED 200M+",
      subtitle: "Enterprise Value Delivered",
      description:
        "Led AI, automation and data-driven transformation initiatives across customer operations, billing, collections and back-office functions, generating measurable business value and operational efficiency.",
    },

    {
      title: "UK BIG 4 Utilities Turnaround & Recovery",
      value: "AED 300M+",
      subtitle: "TCV Portfolio Recovery",
      description:
        "Recovered a distressed 3,500+ FTE utilities engagement from critical failure to full SLA, KPI and financial compliance while significantly improving customer satisfaction.",
    },

    {
      title: "Shared Services Reinvention",
      value: "AED 40M+",
      subtitle: "Hard Cost Savings",
      description:
        "Redesigned operating models, implemented intelligent automation and standardised service delivery frameworks to generate sustainable cost reduction.",
    },

    {
      title: "Customer Experience Transformation",
      value: "-10 → +30",
      subtitle: "Net Promoter Score",
      description:
        "Delivered customer operations modernisation programmes that transformed customer experience performance across digital and assisted service channels.",
    },

    {
      title: "Transformation Control Tower",
      value: "AED 260M",
      subtitle: "Governed Portfolio Value",
      description:
        "Designed executive governance frameworks, performance dashboards and value realisation models providing real-time visibility for CXO stakeholders.",
    },

    {
      title: "Digital Revenue Growth",
      value: "30%",
      subtitle: "Revenue CAGR",
      description:
        "Built and scaled AI-led transformation propositions, lighthouse programmes and strategic growth initiatives across utilities and shared services environments.",
    },
  ];

  return (
    <section
      id="transformations"
      style={{
        background: "#0A0F1C",
        padding: "120px 40px",
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
            marginBottom: "80px",
          }}
        >
          <div
            style={{
              color: "#D4AF37",
              textTransform: "uppercase",
              letterSpacing: "4px",
              fontSize: "14px",
              marginBottom: "20px",
            }}
          >
            Transformation Portfolio
          </div>

          <h2
            style={{
              fontSize: "56px",
              color: "#ffffff",
              marginBottom: "20px",
            }}
          >
            Enterprise Outcomes Delivered
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
            Selected transformation programmes spanning
            enterprise AI, customer operations, shared services,
            utilities, governance and value creation.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(400px,1fr))",
            gap: "30px",
          }}
        >
          {transformations.map((item) => (
            <div
              key={item.title}
              style={{
                background: "#111827",
                border: "1px solid rgba(212,175,55,0.15)",
                borderRadius: "22px",
                padding: "36px",
              }}
            >
              <div
                style={{
                  color: "#D4AF37",
                  fontSize: "42px",
                  fontWeight: 700,
                  marginBottom: "10px",
                }}
              >
                {item.value}
              </div>

              <div
                style={{
                  color: "#8AAAE5",
                  marginBottom: "22px",
                  fontSize: "15px",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                }}
              >
                {item.subtitle}
              </div>

              <h3
                style={{
                  color: "#F5F7FA",
                  fontSize: "30px",
                  marginBottom: "20px",
                  lineHeight: "1.3",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#C8D0E0",
                  lineHeight: "1.9",
                  fontSize: "17px",
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}