export default function BoardroomAdvisory() {
  const capabilities = [
    {
      title: "AI Strategy",
      description:
        "Enterprise AI roadmaps, governance models, GenAI adoption and measurable value realisation."
    },
    {
      title: "GCC Strategy",
      description:
        "Global Capability Centre design, scaling strategies, operating models and transformation roadmaps."
    },
    {
      title: "Shared Services",
      description:
        "End-to-end shared services transformation, consolidation, automation and performance optimisation."
    },
    {
      title: "Customer Operations",
      description:
        "Large-scale customer operations redesign focused on efficiency, experience and business outcomes."
    },
    {
      title: "Digital Transformation",
      description:
        "Enterprise-wide modernisation programmes spanning technology, process and operating model evolution."
    },
    {
      title: "Operating Model",
      description:
        "Organisation design, governance structures, accountability frameworks and execution excellence."
    },
    {
      title: "M&A Integration",
      description:
        "Transformation governance, synergy realisation and post-merger operating model integration."
    },
    {
      title: "Executive Leadership",
      description:
        "Leadership coaching, transformation sponsorship and enterprise change adoption at scale."
    }
  ];

  return (
    <section
      style={{
        padding: "120px 40px",
        background: "#0b0b0b",
        color: "#ffffff"
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto"
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "70px"
          }}
        >
          <div
            style={{
              color: "#c9a84c",
              letterSpacing: "4px",
              textTransform: "uppercase",
              marginBottom: "16px",
              fontSize: "14px"
            }}
          >
            Executive Advisory
          </div>

          <h2
            style={{
              fontSize: "56px",
              marginBottom: "20px"
            }}
          >
            Boardroom Advisory & Executive Leadership
          </h2>

          <p
            style={{
              color: "#bdbdbd",
              maxWidth: "900px",
              margin: "0 auto",
              fontSize: "20px",
              lineHeight: "1.8"
            }}
          >
            Helping organisations align strategy, operating models,
            AI adoption and transformation execution to deliver
            sustainable enterprise value.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px"
          }}
        >
          {capabilities.map((item) => (
            <div
              key={item.title}
              style={{
                background: "#121212",
                border: "1px solid rgba(201,168,76,0.25)",
                borderRadius: "20px",
                padding: "32px",
                transition: "all 0.3s ease"
              }}
            >
              <h3
                style={{
                  color: "#c9a84c",
                  fontSize: "28px",
                  marginBottom: "16px"
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#d0d0d0",
                  lineHeight: "1.8",
                  fontSize: "17px"
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