export default function ExecutiveDashboard() {
  const metrics = [
    {
      value: "AED 250M+",
      label: "Enterprise Value Delivered",
    },
    {
      value: "AED 40M+",
      label: "Hard Savings Realised",
    },
    {
      value: "AED 300M+",
      label: "Largest Portfolio Managed",
    },
    {
      value: "3500+",
      label: "FTE Leadership",
    },
    {
      value: "25+",
      label: "Years of Transformation Leadership",
    },
    {
      value: "12+",
      label: "Countries Served",
    },
  ];

  return (
    <section
      style={{
        background: "#05070D",
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
            marginBottom: "60px",
            textAlign: "center",
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
            Executive Performance Dashboard
          </div>

          <h2
            style={{
              fontSize: "56px",
              color: "#ffffff",
              marginBottom: "20px",
            }}
          >
            Transformation Impact At Scale
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
            Enterprise transformation outcomes delivered
            across banking, shared services, customer
            operations, AI adoption and operating model
            modernisation programs.
          </p>
        </div>

        <div
          style={{
            background: "#0A0F1C",
            border: "1px solid rgba(212,175,55,0.15)",
            borderRadius: "24px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
            }}
          >
            {metrics.map((metric) => (
              <div
                key={metric.label}
                style={{
                  padding: "40px",
                  borderBottom:
                    "1px solid rgba(255,255,255,0.06)",
                  borderRight:
                    "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div
                  style={{
                    color: "#D4AF37",
                    fontSize: "42px",
                    fontWeight: 700,
                    marginBottom: "14px",
                  }}
                >
                  {metric.value}
                </div>

                <div
                  style={{
                    color: "#E5E7EB",
                    fontSize: "18px",
                    lineHeight: "1.6",
                  }}
                >
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "24px",
            marginTop: "50px",
          }}
        >
          <div
            style={{
              background: "#0A0F1C",
              borderRadius: "16px",
              padding: "25px",
              border: "1px solid rgba(212,175,55,0.12)",
            }}
          >
            <div
              style={{
                color: "#D4AF37",
                marginBottom: "10px",
              }}
            >
              AI Transformation
            </div>

            <div
              style={{
                color: "#F5F7FA",
              }}
            >
              Enterprise AI Adoption &
              Value Realisation
            </div>
          </div>

          <div
            style={{
              background: "#0A0F1C",
              borderRadius: "16px",
              padding: "25px",
              border: "1px solid rgba(212,175,55,0.12)",
            }}
          >
            <div
              style={{
                color: "#D4AF37",
                marginBottom: "10px",
              }}
            >
              Shared Services
            </div>

            <div
              style={{
                color: "#F5F7FA",
              }}
            >
              GBS, GCC &
              Operating Model Design
            </div>
          </div>

          <div
            style={{
              background: "#0A0F1C",
              borderRadius: "16px",
              padding: "25px",
              border: "1px solid rgba(212,175,55,0.12)",
            }}
          >
            <div
              style={{
                color: "#D4AF37",
                marginBottom: "10px",
              }}
            >
              Customer Operations
            </div>

            <div
              style={{
                color: "#F5F7FA",
              }}
            >
              CX, Service Delivery &
              Operational Excellence
            </div>
          </div>

          <div
            style={{
              background: "#0A0F1C",
              borderRadius: "16px",
              padding: "25px",
              border: "1px solid rgba(212,175,55,0.12)",
            }}
          >
            <div
              style={{
                color: "#D4AF37",
                marginBottom: "10px",
              }}
            >
              Transformation
            </div>

            <div
              style={{
                color: "#F5F7FA",
              }}
            >
              Enterprise Change &
              Value Creation
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}