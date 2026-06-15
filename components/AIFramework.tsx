export default function AIFramework() {
  return (
    <section
      style={{
        background: "#0a0b0f",
        padding: "140px 40px",
        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {/* HEADER */}

        <div
          style={{
            textAlign: "center",
            marginBottom: "90px",
          }}
        >
          <div
            style={{
              color: "#c9a84c",
              letterSpacing: "4px",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            VISTA™
          </div>

          <h2
            style={{
              fontSize: "64px",
              marginBottom: "25px",
              lineHeight: "1.1",
            }}
          >
            Value Integrated Strategy,
            <br />
            Transformation & AI
          </h2>

          <p
            style={{
              maxWidth: "900px",
              margin: "0 auto",
              color: "#bdbdbd",
              fontSize: "22px",
              lineHeight: "1.8",
            }}
          >
            A boardroom-to-execution framework connecting enterprise
            strategy, operating model transformation, AI adoption,
            workforce evolution and measurable business value.
          </p>
        </div>

        {/* VISTA IMAGE */}

        <div
          style={{
            textAlign: "center",
            marginBottom: "80px",
          }}
        >
          <img
            src="/vista-framework.png"
            alt="VISTA Framework"
            style={{
              width: "100%",
              maxWidth: "1000px",
              borderRadius: "24px",
              border: "1px solid rgba(201,168,76,0.15)",
            }}
          />
        </div>

        {/* FRAMEWORK */}

        <div
          style={{
            display: "grid",
            gap: "30px",
          }}
        >
          {/* LAYER 1 */}

          <div
            style={{
              background: "#111111",
              borderRadius: "24px",
              padding: "40px",
              border: "1px solid rgba(201,168,76,0.2)",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                color: "#c9a84c",
                fontSize: "32px",
                marginBottom: "15px",
              }}
            >
              Vision & Strategy
            </h3>

            <p
              style={{
                color: "#d0d0d0",
                fontSize: "18px",
              }}
            >
              Enterprise Ambition • Growth Priorities • Value Pools •
              Transformation Roadmap
            </p>
          </div>

          {/* LAYER 2 */}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(400px,1fr))",
              gap: "30px",
            }}
          >
            <div
              style={{
                background: "#111111",
                borderRadius: "24px",
                padding: "40px",
                border: "1px solid rgba(201,168,76,0.2)",
              }}
            >
              <h3
                style={{
                  color: "#c9a84c",
                  fontSize: "30px",
                  marginBottom: "20px",
                }}
              >
                Operating Model
              </h3>

              <p
                style={{
                  color: "#d0d0d0",
                  lineHeight: "1.8",
                }}
              >
                GCC Evolution
                <br />
                Shared Services
                <br />
                Process Excellence
                <br />
                Governance & Controls
              </p>
            </div>

            <div
              style={{
                background: "#111111",
                borderRadius: "24px",
                padding: "40px",
                border: "1px solid rgba(201,168,76,0.2)",
              }}
            >
              <h3
                style={{
                  color: "#c9a84c",
                  fontSize: "30px",
                  marginBottom: "20px",
                }}
              >
                AI & Intelligence
              </h3>

              <p
                style={{
                  color: "#d0d0d0",
                  lineHeight: "1.8",
                }}
              >
                GenAI
                <br />
                Agentic AI
                <br />
                Automation
                <br />
                Decision Intelligence
              </p>
            </div>
          </div>

          {/* LAYER 3 */}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(400px,1fr))",
              gap: "30px",
            }}
          >
            <div
              style={{
                background: "#111111",
                borderRadius: "24px",
                padding: "40px",
                border: "1px solid rgba(201,168,76,0.2)",
              }}
            >
              <h3
                style={{
                  color: "#c9a84c",
                  fontSize: "30px",
                  marginBottom: "20px",
                }}
              >
                Customer Value
              </h3>

              <p
                style={{
                  color: "#d0d0d0",
                  lineHeight: "1.8",
                }}
              >
                Customer Experience
                <br />
                Digital Journeys
                <br />
                Service Excellence
                <br />
                Revenue Growth
              </p>
            </div>

            <div
              style={{
                background: "#111111",
                borderRadius: "24px",
                padding: "40px",
                border: "1px solid rgba(201,168,76,0.2)",
              }}
            >
              <h3
                style={{
                  color: "#c9a84c",
                  fontSize: "30px",
                  marginBottom: "20px",
                }}
              >
                Workforce Transformation
              </h3>

              <p
                style={{
                  color: "#d0d0d0",
                  lineHeight: "1.8",
                }}
              >
                Capability Building
                <br />
                Leadership Enablement
                <br />
                Change Adoption
                <br />
                Future Workforce Design
              </p>
            </div>
          </div>

          {/* OUTCOME LAYER */}

          <div
            style={{
              background:
                "linear-gradient(135deg,#c9a84c 0%,#e3c76b 100%)",
              borderRadius: "24px",
              padding: "50px",
              textAlign: "center",
              color: "#111111",
              marginTop: "10px",
            }}
          >
            <h3
              style={{
                fontSize: "36px",
                marginBottom: "15px",
              }}
            >
              Value Realisation
            </h3>

            <p
              style={{
                fontSize: "20px",
                lineHeight: "1.8",
              }}
            >
              Revenue Growth • Productivity Improvement • Cost
              Optimisation • Risk Reduction • Enterprise Value Creation
            </p>
          </div>
        </div>

        {/* IMPACT STRIP */}

        <div
          style={{
            marginTop: "100px",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(180px,1fr))",
            gap: "20px",
          }}
        >
          {[
            ["AED 250M+", "Transformation Value"],
            ["AED 40M+", "Savings Delivered"],
            ["3500+", "FTE Leadership"],
            ["12+", "Countries"],
            ["30% CAGR", "Digital Growth"],
          ].map(([value, label]) => (
            <div
              key={value}
              style={{
                textAlign: "center",
                padding: "30px",
                borderRadius: "20px",
                background: "#111111",
                border: "1px solid rgba(201,168,76,0.15)",
              }}
            >
              <div
                style={{
                  color: "#c9a84c",
                  fontSize: "34px",
                  fontWeight: "bold",
                }}
              >
                {value}
              </div>

              <div
                style={{
                  color: "#d0d0d0",
                  marginTop: "10px",
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}