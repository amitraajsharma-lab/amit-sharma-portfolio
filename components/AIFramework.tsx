export default function AIFramework() {
  const blocks = [
    "Strategy",
    "Operating Model",
    "AI & Automation",
    "Customer Experience",
    "Shared Services",
    "Value Realisation",
  ];

  return (
    <section
      style={{
        background: "#101114",
        padding: "120px 40px",
        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            textAlign: "center",
            color: "#c9a84c",
            letterSpacing: "4px",
            marginBottom: "15px",
          }}
        >
          AI TRANSFORMATION FRAMEWORK
        </div>

        <h2
          style={{
            textAlign: "center",
            fontSize: "56px",
            marginBottom: "80px",
          }}
        >
          Enterprise Value Creation Model
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "25px",
          }}
        >
          {blocks.map((block) => (
            <div
              key={block}
              style={{
                padding: "50px",
                textAlign: "center",
                borderRadius: "20px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(201,168,76,0.2)",
              }}
            >
              <h3
                style={{
                  color: "#c9a84c",
                  fontSize: "28px",
                }}
              >
                {block}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}