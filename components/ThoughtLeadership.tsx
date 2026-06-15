export default function ThoughtLeadership() {
  const articles = [
    {
      category: "AI Transformation",
      title:
        "How UAE & GCC Governments Are Getting AI Transformation Right",
      summary:
        "The GCC has moved beyond AI experimentation into execution. Governments are building AI-ready operating models, governance structures and national-scale transformation programmes.",
      insight:
        "AI transformation succeeds when leadership commitment meets execution discipline.",
    },

    {
      category: "Global Capability Centers",
      title:
        "Why GCCs Must Become AI Value Creation Engines",
      summary:
        "The next generation of GCCs will be measured by innovation, intelligence and business outcomes rather than labour arbitrage.",
      insight:
        "Future GCCs will create value, not simply provide capacity.",
    },

    {
      category: "Shared Services",
      title:
        "The Future of Shared Services in an Agentic AI World",
      summary:
        "Agentic AI will reshape service delivery, workforce productivity and decision-making across shared services organisations.",
      insight:
        "Shared services are evolving into intelligence orchestration platforms.",
    },

    {
      category: "Operating Models",
      title:
        "Building Enterprise Operating Models For The AI Era",
      summary:
        "Most organisations are deploying AI into legacy operating models. The winners will redesign the operating model itself.",
      insight:
        "Operating model transformation is the missing link in most AI programmes.",
    },

    {
      category: "Customer Operations",
      title:
        "The Future Of Customer Operations In Utilities",
      summary:
        "Customer expectations, AI capabilities and regulatory pressures are redefining how utility providers serve customers.",
      insight:
        "Utilities are becoming experience businesses, not infrastructure businesses.",
    },

    {
      category: "Transformation Leadership",
      title:
        "Moving Beyond Automation To Enterprise Intelligence",
      summary:
        "Automation delivers efficiency. Enterprise intelligence delivers strategic advantage.",
      insight:
        "The future belongs to organisations that transform decision-making, not just processes.",
    },
  ];

  return (
    <section
      id="thought-leadership"
      style={{
        background: "#0A0F1C",
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
            Executive Insights
          </div>

          <h2
            style={{
              fontSize: "56px",
              marginBottom: "20px",
            }}
          >
            Thought Leadership & Perspectives
          </h2>

          <p
            style={{
              maxWidth: "950px",
              margin: "0 auto",
              color: "#AAB2C5",
              fontSize: "20px",
              lineHeight: "1.8",
            }}
          >
            Perspectives on enterprise AI, operating model
            transformation, GCC evolution, shared services
            reinvention and customer operations excellence.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(420px,1fr))",
            gap: "30px",
          }}
        >
          {articles.map((article) => (
            <div
              key={article.title}
              style={{
                background: "#111827",
                border: "1px solid rgba(212,175,55,0.15)",
                borderRadius: "22px",
                padding: "36px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  color: "#8AAAE5",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  fontSize: "13px",
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
                  color: "#C8D0E0",
                  lineHeight: "1.9",
                  marginBottom: "24px",
                }}
              >
                {article.summary}
              </p>

              <div
                style={{
                  marginTop: "auto",
                  borderTop:
                    "1px solid rgba(255,255,255,0.08)",
                  paddingTop: "20px",
                }}
              >
                <div
                  style={{
                    color: "#D4AF37",
                    fontWeight: 700,
                    marginBottom: "10px",
                  }}
                >
                  Key Insight
                </div>

                <div
                  style={{
                    color: "#F5F7FA",
                    lineHeight: "1.8",
                  }}
                >
                  {article.insight}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "80px",
            textAlign: "center",
          }}
        >
          <a
            href="/articles"
            style={{
              background: "#D4AF37",
              color: "#000",
              textDecoration: "none",
              padding: "18px 36px",
              borderRadius: "10px",
              fontWeight: 700,
              display: "inline-block",
            }}
          >
            View Executive Insights
          </a>
        </div>
      </div>
    </section>
  );
}