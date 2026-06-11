export default function ThoughtLeadership() {
  const articles = [
    {
      category: "AI Transformation",
      title:
        "How UAE & GCC Governments Are Getting AI Transformation Right",
      summary:
        "Lessons from the GCC's AI-first agenda and what enterprises can learn from government-led transformation programs.",
      insight:
        "AI succeeds when leadership, governance and execution are aligned."
    },

    {
      category: "GCC Strategy",
      title:
        "Why GCCs Must Become AI Value Creation Engines",
      summary:
        "The next generation of Global Capability Centers will be measured by innovation, intelligence and business value rather than labour arbitrage.",
      insight:
        "Future GCCs will create value, not just capacity."
    },

    {
      category: "Shared Services",
      title:
        "The Future of Shared Services in an Agentic AI World",
      summary:
        "Agentic AI will fundamentally reshape service delivery, decision-making and workforce productivity.",
      insight:
        "Shared services are evolving from transaction processing to intelligence orchestration."
    },

    {
      category: "Operating Models",
      title:
        "Building Enterprise Operating Models for the AI Era",
      summary:
        "Why organizations must redesign operating models around AI-enabled decision making and execution.",
      insight:
        "Operating model redesign is now a strategic imperative."
    },

    {
      category: "Customer Operations",
      title:
        "The Future of Customer Operations in Utilities",
      summary:
        "How AI, automation and digital channels are redefining customer experience across utility providers.",
      insight:
        "Utilities are becoming experience businesses."
    },

    {
      category: "Digital Transformation",
      title:
        "Moving Beyond Automation to Enterprise Intelligence",
      summary:
        "The shift from isolated automation initiatives to enterprise-wide intelligent operating models.",
      insight:
        "Automation is no longer enough."
    }
  ];

  return (
    <section
      id="thought-leadership"
      style={{
        background: "#080808",
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
            marginBottom: "80px",
          }}
        >
          <div
            style={{
              color: "#c9a84c",
              letterSpacing: "4px",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Thought Leadership
          </div>

          <h2
            style={{
              fontSize: "56px",
              marginBottom: "20px",
            }}
          >
            Insights & Perspectives
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
            Perspectives on AI, digital transformation,
            operating models, GCC strategy and enterprise value creation.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(380px,1fr))",
            gap: "28px",
          }}
        >
          {articles.map((article) => (
            <div
              key={article.title}
              style={{
                background: "#101010",
                border: "1px solid rgba(201,168,76,0.20)",
                borderRadius: "20px",
                padding: "32px",
                minHeight: "340px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  color: "#c9a84c",
                  textTransform: "uppercase",
                  fontSize: "13px",
                  letterSpacing: "2px",
                  marginBottom: "18px",
                }}
              >
                {article.category}
              </div>

              <h3
                style={{
                  fontSize: "30px",
                  lineHeight: "1.35",
                  marginBottom: "18px",
                }}
              >
                {article.title}
              </h3>

              <p
                style={{
                  color: "#cfcfcf",
                  lineHeight: "1.8",
                  marginBottom: "24px",
                }}
              >
                {article.summary}
              </p>

              <div
                style={{
                  marginTop: "auto",
                  paddingTop: "20px",
                  borderTop:
                    "1px solid rgba(201,168,76,0.15)",
                }}
              >
                <div
                  style={{
                    color: "#c9a84c",
                    fontWeight: "600",
                    marginBottom: "8px",
                  }}
                >
                  Key Insight
                </div>

                <div
                  style={{
                    color: "#ffffff",
                    lineHeight: "1.7",
                  }}
                >
                  {article.insight}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}