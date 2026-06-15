export default function ExecutiveJourney() {
  const journey = [
    {
      phase: "Foundation",
      company: "Satyam Computer Services",
      role: "Senior Consultant – Business Maturity",
      outcome:
        "Process Excellence & Business Transformation",
      description:
        "Developed deep expertise in quality management, process excellence, business maturity frameworks and enterprise transformation methodologies. Established the foundations of a career focused on operational performance and business value creation.",
    },

    {
      phase: "Transformation Excellence",
      company: "HSBC",
      role: "AVP – Quality & Banking Transformation",
      outcome:
        "Operational Excellence & Banking Transformation",
      description:
        "Led large-scale banking transformation initiatives focused on operational excellence, process redesign, governance and performance improvement. Expanded leadership responsibilities across complex global operations.",
    },

    {
      phase: "Enterprise Leadership",
      company: "Tata Consultancy Services",
      role: "Transformation Head",
      outcome:
        "Global Transformation Programmes",
      description:
        "Directed transformation initiatives across Utilities, Media, Finance & Accounting, Information Services and Supply Chain functions. Built expertise in large-scale enterprise transformation and value realisation across international clients.",
    },

    {
      phase: "Global Digital Transformation",
      company: "WNS Global Services / Capgemini",
      role: "Global Digital Transformation Lead",
      outcome:
        "Digital, AI & Shared Services Leadership",
      description:
        "Led enterprise-wide transformation programmes spanning digital, automation, customer operations, AI enablement, operating model redesign and shared services modernisation across multiple industries and geographies.",
    },

    {
      phase: "Enterprise AI Era",
      company: "AI, GCC & Value Creation Leadership",
      role:
        "Enterprise AI • Shared Services • GCC Strategy",
      outcome:
        "Board-Level Transformation Impact",
      description:
        "Focused on helping organisations unlock enterprise value through AI adoption, GCC evolution, customer operations excellence, operating model redesign and transformation governance. Positioning businesses for the next generation of intelligent operations.",
    },
  ];

  return (
    <section
      id="journey"
      style={{
        background: "#05070D",
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
            Executive Leadership Evolution
          </div>

          <h2
            style={{
              fontSize: "56px",
              color: "#ffffff",
              marginBottom: "20px",
            }}
          >
            Building Enterprise Transformation Leadership
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
            A 25+ year journey from process excellence
            practitioner to enterprise AI, transformation
            and operating model leader.
          </p>
        </div>

        <div
          style={{
            position: "relative",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          {journey.map((item, index) => (
            <div
              key={item.company}
              style={{
                display: "flex",
                gap: "30px",
                marginBottom:
                  index === journey.length - 1
                    ? "0"
                    : "30px",
              }}
            >
              <div
                style={{
                  minWidth: "180px",
                }}
              >
                <div
                  style={{
                    background: "#D4AF37",
                    color: "#000",
                    borderRadius: "999px",
                    padding: "10px 18px",
                    textAlign: "center",
                    fontWeight: 700,
                    fontSize: "14px",
                  }}
                >
                  {item.phase}
                </div>
              </div>

              <div
                style={{
                  flex: 1,
                  background: "#0A0F1C",
                  border:
                    "1px solid rgba(212,175,55,0.15)",
                  borderRadius: "22px",
                  padding: "36px",
                }}
              >
                <div
                  style={{
                    color: "#8AAAE5",
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    fontSize: "13px",
                    marginBottom: "14px",
                  }}
                >
                  {item.outcome}
                </div>

                <h3
                  style={{
                    color: "#F5F7FA",
                    fontSize: "34px",
                    marginBottom: "12px",
                  }}
                >
                  {item.company}
                </h3>

                <h4
                  style={{
                    color: "#D4AF37",
                    fontSize: "22px",
                    marginBottom: "20px",
                    fontWeight: 500,
                  }}
                >
                  {item.role}
                </h4>

                <p
                  style={{
                    color: "#C8D0E0",
                    fontSize: "17px",
                    lineHeight: "1.9",
                    margin: 0,
                  }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}