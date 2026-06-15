export default function TransformationCases() {
  const caseStudies = [
    {
      number: "01",
      title:
        "Rescuing a Distressed Utilities Transformation Programme",
      value: "AED 300M+ ACV",
      challenge: [
        "Large-scale utilities engagement under performance pressure",
        "3,500+ workforce across multiple functions",
        "Customer dissatisfaction and declining NPS",
        "SLA, KPI and governance failures",
      ],
      actions: [
        "Redesigned transformation governance",
        "Implemented executive control tower",
        "Re-engineered operating model",
        "Strengthened leadership accountability",
      ],
      outcomes: [
        "Recovered critical programme performance",
        "Restored SLA and KPI compliance",
        "Improved NPS from below -10 to above +30",
        "Protected strategic revenue streams",
      ],
    },

    {
      number: "02",
      title:
        "Building an AI-Enabled Shared Services Organisation",
      value: "AED 40M+ Savings",
      challenge: [
        "High operating costs",
        "Fragmented service delivery",
        "Limited automation maturity",
        "Scalability constraints",
      ],
      actions: [
        "Introduced intelligent automation",
        "Redesigned service delivery model",
        "Implemented governance frameworks",
        "Established value realisation metrics",
      ],
      outcomes: [
        "AED 40M+ hard savings delivered",
        "Improved operational efficiency",
        "Increased service scalability",
        "Enhanced workforce productivity",
      ],
    },

    {
      number: "03",
      title:
        "Enterprise AI & Customer Operations Transformation",
      value: "AED 200M+ Value",
      challenge: [
        "Complex customer journeys",
        "Manual decision processes",
        "Operational inefficiencies",
        "Growing service expectations",
      ],
      actions: [
        "Embedded AI into operations",
        "Scaled automation initiatives",
        "Implemented data-driven decisioning",
        "Redesigned customer experience model",
      ],
      outcomes: [
        "AED 200M+ enterprise value delivered",
        "Improved customer outcomes",
        "Faster operational decisions",
        "Productivity improvements at scale",
      ],
    },

    {
      number: "04",
      title:
        "Global Transformation & GCC Leadership",
      value: "12+ Countries",
      challenge: [
        "Multi-country operating environments",
        "Different maturity levels",
        "Scaling transformation consistently",
        "Aligning global leadership teams",
      ],
      actions: [
        "Created transformation governance structures",
        "Established common operating models",
        "Scaled best practices globally",
        "Built transformation capability frameworks",
      ],
      outcomes: [
        "Transformation programmes across 12+ countries",
        "Improved delivery consistency",
        "Enhanced executive visibility",
        "Stronger value realisation outcomes",
      ],
    },
  ];

  return (
    <section
      style={{
        background: "#05070D",
        padding: "140px 40px",
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
            marginBottom: "90px",
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
            Executive Case Studies
          </div>

          <h2
            style={{
              fontSize: "56px",
              marginBottom: "20px",
            }}
          >
            Transformation Outcomes Delivered
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
            Selected transformation engagements demonstrating
            enterprise value creation, operational excellence,
            AI adoption and business impact.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gap: "35px",
          }}
        >
          {caseStudies.map((item) => (
            <div
              key={item.number}
              style={{
                background: "#0A0F1C",
                border: "1px solid rgba(212,175,55,0.15)",
                borderRadius: "24px",
                padding: "40px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  marginBottom: "30px",
                }}
              >
                <div>
                  <div
                    style={{
                      color: "#8AAAE5",
                      letterSpacing: "2px",
                      marginBottom: "10px",
                    }}
                  >
                    CASE STUDY {item.number}
                  </div>

                  <h3
                    style={{
                      fontSize: "34px",
                      margin: 0,
                    }}
                  >
                    {item.title}
                  </h3>
                </div>

                <div
                  style={{
                    color: "#D4AF37",
                    fontSize: "36px",
                    fontWeight: 700,
                  }}
                >
                  {item.value}
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit,minmax(280px,1fr))",
                  gap: "24px",
                }}
              >
                <div
                  style={{
                    background: "#111827",
                    padding: "24px",
                    borderRadius: "16px",
                  }}
                >
                  <h4
                    style={{
                      color: "#D4AF37",
                      marginBottom: "16px",
                    }}
                  >
                    Challenge
                  </h4>

                  <ul
                    style={{
                      color: "#D1D5DB",
                      lineHeight: "1.9",
                      paddingLeft: "20px",
                    }}
                  >
                    {item.challenge.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>

                <div
                  style={{
                    background: "#111827",
                    padding: "24px",
                    borderRadius: "16px",
                  }}
                >
                  <h4
                    style={{
                      color: "#8AAAE5",
                      marginBottom: "16px",
                    }}
                  >
                    Actions
                  </h4>

                  <ul
                    style={{
                      color: "#D1D5DB",
                      lineHeight: "1.9",
                      paddingLeft: "20px",
                    }}
                  >
                    {item.actions.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>

                <div
                  style={{
                    background: "#111827",
                    padding: "24px",
                    borderRadius: "16px",
                  }}
                >
                  <h4
                    style={{
                      color: "#22C55E",
                      marginBottom: "16px",
                    }}
                  >
                    Outcomes
                  </h4>

                  <ul
                    style={{
                      color: "#D1D5DB",
                      lineHeight: "1.9",
                      paddingLeft: "20px",
                    }}
                  >
                    {item.outcomes.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}