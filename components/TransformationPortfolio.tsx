export default function TransformationPortfolio() {
  const transformations = [
    {
      title: "Utilities Turnaround & Recovery",
      value: "AED 300M+",
      description:
        "Recovered a distressed utilities portfolio supporting 3,500+ FTEs, restoring SLA performance, governance, customer satisfaction and financial compliance.",
    },

    {
      title: "Enterprise AI & GenAI Transformation",
      value: "30% CAGR",
      description:
        "Designed and scaled AI-powered operating models driving digital revenue growth, automation and enterprise productivity improvements.",
    },

    {
      title: "Shared Services Transformation",
      value: "AED 40M+",
      description:
        "Delivered large-scale process optimisation, intelligent automation and operating model redesign generating sustainable savings.",
    },

    {
      title: "SAP ISU / S4HANA Transformation",
      value: "Multi-Country",
      description:
        "Led enterprise ERP-enabled transformation programmes spanning billing, collections, customer operations and digital experience.",
    },

    {
      title: "Customer Operations Modernisation",
      value: "Millions Served",
      description:
        "Transformed customer operations through digital channels, AI, automation and service redesign across utilities and BPO environments.",
    },

    {
      title: "Global Capability Center Leadership",
      value: "12+ Countries",
      description:
        "Built and scaled global operations, shared services and transformation organisations across multiple geographies.",
    },
  ];

  return (
    <section
      style={{
        background: "#0c0c0d",
        padding: "120px 40px",
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
              letterSpacing: "3px",
              marginBottom: "20px",
              textTransform: "uppercase",
            }}
          >
            Transformation Portfolio
          </div>

          <h2
            style={{
              fontSize: "52px",
              color: "white",
            }}
          >
            Boardroom-Level Impact
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(380px,1fr))",
            gap: "30px",
          }}
        >
          {transformations.map((item, index) => (
            <div
              key={index}
              style={{
                background: "#111111",
                borderRadius: "20px",
                padding: "35px",
                border: "1px solid rgba(201,168,76,0.15)",
              }}
            >
              <div
                style={{
                  color: "#c9a84c",
                  fontSize: "32px",
                  fontWeight: "bold",
                  marginBottom: "20px",
                }}
              >
                {item.value}
              </div>

              <h3
                style={{
                  color: "white",
                  fontSize: "26px",
                  marginBottom: "20px",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#cccccc",
                  lineHeight: "1.8",
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