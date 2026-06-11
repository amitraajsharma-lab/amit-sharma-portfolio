export default function ExecutiveJourney() {
  const journey = [
    {
      phase: "Foundation",
      company: "Satyam Computer Services",
      role: "Senior Consultant – Business Maturity",
      description:
        "Built deep expertise in process excellence, quality frameworks, business maturity assessment and enterprise transformation methodologies.",
    },
    {
      phase: "Banking Transformation",
      company: "HSBC",
      role: "AVP – Quality & Banking Transformation",
      description:
        "Led operational excellence, process redesign and transformation initiatives supporting large-scale banking operations.",
    },
    {
      phase: "Enterprise Transformation",
      company: "Tata Consultancy Services",
      role: "Transformation Head",
      description:
        "Led transformation programs across Utilities, Media, Information Services, Finance & Accounting and Supply Chain functions for global clients.",
    },
    {
      phase: "Global Leadership",
      company: "WNS Global Services",
      role: "Global Digital Transformation Lead",
      description:
        "Directed enterprise-wide digital transformation, AI enablement, operating model redesign and shared services modernisation programs.",
    },
    {
      phase: "Present",
      company: "Enterprise AI & Transformation Leadership",
      role: "Strategy • Digital • AI • Shared Services",
      description:
        "Driving enterprise AI adoption, customer operations transformation, GCC evolution, operational excellence and business value creation at scale.",
    },
  ];

  return (
    <section
      id="journey"
      style={{
        padding: "120px 8%",
        background: "#050505",
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
            fontSize: "14px",
          }}
        >
          Executive Journey
        </p>

        <h2
          style={{
            fontSize: "52px",
            marginTop: "20px",
            color: "#ffffff",
          }}
        >
          Building Transformation Leadership
        </h2>
      </div>

      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          display: "grid",
          gap: "24px",
        }}
      >
        {journey.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#0b0b0b",
              border: "1px solid rgba(201,168,76,0.25)",
              borderRadius: "20px",
              padding: "30px",
            }}
          >
            <div
              style={{
                color: "#c9a84c",
                fontSize: "13px",
                marginBottom: "10px",
              }}
            >
              {item.phase}
            </div>

            <h3
              style={{
                fontSize: "36px",
                color: "#ffffff",
                marginBottom: "12px",
              }}
            >
              {item.company}
            </h3>

            <h4
              style={{
                color: "#ffffff",
                fontSize: "22px",
                marginBottom: "14px",
                fontWeight: 400,
              }}
            >
              {item.role}
            </h4>

            <p
              style={{
                color: "#cfcfcf",
                lineHeight: 1.8,
                fontSize: "16px",
              }}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}