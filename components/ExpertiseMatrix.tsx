export default function ExpertiseMatrix() {
  const expertiseAreas = [
    "Enterprise AI Strategy",
    "GenAI Transformation",
    "Shared Services Transformation",
    "Global Capability Centers",
    "Customer Operations",
    "Digital Transformation",
    "Operating Model Design",
    "Operational Excellence",
    "Automation & Intelligent Operations",
    "Business Process Reengineering",
    "Utilities Transformation",
    "BPO Transformation",
  ];

  return (
    <section
      id="expertise"
      style={{
        padding: "100px 8%",
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
            marginBottom: "20px",
          }}
        >
          Core Expertise
        </p>

        <h2
          style={{
            color: "#ffffff",
            fontSize: "56px",
            marginBottom: "20px",
          }}
        >
          Transformation Domains
        </h2>

        <p
          style={{
            color: "#b5b5b5",
            maxWidth: "900px",
            margin: "0 auto",
            lineHeight: "1.8",
            fontSize: "18px",
          }}
        >
          Expertise developed through large-scale transformation leadership
          across utilities, customer operations, shared services, BPO,
          enterprise technology and global capability center environments.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "24px",
        }}
      >
        {expertiseAreas.map((item) => (
          <div
            key={item}
            style={{
              background: "#0b0b0b",
              border: "1px solid rgba(201,168,76,0.15)",
              borderRadius: "16px",
              padding: "40px 30px",
              textAlign: "center",
              transition: "all 0.3s ease",
            }}
          >
            <h3
              style={{
                color: "#c9a84c",
                fontSize: "24px",
                margin: 0,
                lineHeight: "1.4",
              }}
            >
              {item}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}