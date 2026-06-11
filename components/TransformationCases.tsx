export default function TransformationCases() {
  const cases = [
    {
      title: "Utilities Turnaround & Recovery",
      value: "AED 300M+ ACV",
      subtitle: "3,500 FTE Enterprise Recovery Programme",
      outcomes: [
        "Recovered critical delivery performance",
        "Restored SLA and KPI compliance",
        "Improved NPS from below -10 to above +30",
        "Re-established financial governance",
        "Protected strategic client revenue"
      ]
    },
    {
      title: "Enterprise AI Transformation",
      value: "AED 200M+ Value Delivered",
      subtitle: "AI, Automation & Data-Driven Operations",
      outcomes: [
        "Scaled AI-enabled operating models",
        "Embedded automation into core operations",
        "Improved customer and employee productivity",
        "Accelerated enterprise decision making",
        "Created measurable business value"
      ]
    },
    {
      title: "Shared Services Transformation",
      value: "AED 40M+ Hard Savings",
      subtitle: "Operating Model Redesign & Optimisation",
      outcomes: [
        "Delivered sustainable cost reduction",
        "Redesigned service delivery models",
        "Improved process efficiency",
        "Implemented governance frameworks",
        "Enabled multi-country scale"
      ]
    }
  ];

  return (
    <section
      style={{
        padding: "120px 8%",
        background: "#050505"
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "70px"
        }}
      >
        <p
          style={{
            color: "#c9a84c",
            letterSpacing: "3px",
            textTransform: "uppercase"
          }}
        >
          Selected Transformation Outcomes
        </p>

        <h2
          style={{
            color: "#ffffff",
            fontSize: "56px",
            marginTop: "20px"
          }}
        >
          Proven Business Impact
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gap: "40px"
        }}
      >
        {cases.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#0b0b0b",
              border: "1px solid rgba(201,168,76,0.25)",
              borderRadius: "24px",
              padding: "40px"
            }}
          >
            <div
              style={{
                color: "#c9a84c",
                fontSize: "40px",
                fontWeight: "bold",
                marginBottom: "10px"
              }}
            >
              {item.value}
            </div>

            <h3
              style={{
                color: "#ffffff",
                fontSize: "32px",
                marginBottom: "10px"
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                color: "#cfcfcf",
                marginBottom: "30px"
              }}
            >
              {item.subtitle}
            </p>

            <ul
              style={{
                color: "#ffffff",
                lineHeight: "2"
              }}
            >
              {item.outcomes.map((outcome, i) => (
                <li key={i}>{outcome}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}