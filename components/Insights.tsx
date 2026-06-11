export default function Insights() {
  const insights = [
    {
      title: "Why GCCs Must Become AI Value Creation Engines",
      category: "AI Transformation"
    },
    {
      title: "The Future of Shared Services in an Agentic AI World",
      category: "Shared Services"
    },
    {
      title: "Moving Beyond Automation to Enterprise Intelligence",
      category: "Digital Transformation"
    }
  ];

  return (
    <section
      id="insights"
      style={{
        padding: "120px 8%",
        background: "#050505"
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "60px"
        }}
      >
        <p
          style={{
            color: "#c9a84c",
            letterSpacing: "3px",
            textTransform: "uppercase"
          }}
        >
          Thought Leadership
        </p>

        <h2
          style={{
            fontSize: "56px",
            color: "#ffffff",
            marginTop: "20px"
          }}
        >
          Insights & Perspectives
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "25px"
        }}
      >
        {insights.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#0b0b0b",
              border: "1px solid rgba(201,168,76,0.25)",
              borderRadius: "20px",
              padding: "35px"
            }}
          >
            <p
              style={{
                color: "#c9a84c",
                marginBottom: "15px"
              }}
            >
              {item.category}
            </p>

            <h3
              style={{
                color: "white",
                lineHeight: "1.5"
              }}
            >
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}