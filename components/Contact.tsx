export default function Contact() {
  const expertise = [
    "Enterprise AI Strategy",
    "Digital Transformation",
    "Shared Services Transformation",
    "Global Capability Centers",
    "Customer Operations",
    "Operating Model Redesign",
  ];

  return (
    <section
      id="contact"
      style={{
        background: "#050505",
        color: "#ffffff",
        padding: "120px 40px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <div
          style={{
            color: "#c9a84c",
            textTransform: "uppercase",
            letterSpacing: "4px",
            marginBottom: "16px",
          }}
        >
          Executive Engagement
        </div>

        <h2
          style={{
            fontSize: "56px",
            marginBottom: "24px",
          }}
        >
          Let's Discuss Transformation at Scale
        </h2>

        <p
          style={{
            color: "#cfcfcf",
            fontSize: "20px",
            lineHeight: "1.8",
            maxWidth: "900px",
            margin: "0 auto 50px",
          }}
        >
          Available for enterprise leadership roles, transformation
          mandates, AI strategy engagements, GCC leadership positions,
          board advisory assignments and operating model redesign initiatives.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "14px",
            marginBottom: "50px",
          }}
        >
          {expertise.map((item) => (
            <div
              key={item}
              style={{
                border: "1px solid rgba(201,168,76,0.25)",
                borderRadius: "999px",
                padding: "12px 22px",
                color: "#c9a84c",
              }}
            >
              {item}
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
            marginBottom: "50px",
          }}
        >
          <a
            href="mailto:amitraajsharma@gmail.com"
            style={{
              background: "#c9a84c",
              color: "#000",
              textDecoration: "none",
              padding: "16px 32px",
              borderRadius: "10px",
              fontWeight: "bold",
            }}
          >
            Email Amit
          </a>

          <a
            href="/Amit-Sharma-CV.pdf"
            download
            style={{
              border: "1px solid #c9a84c",
              color: "#c9a84c",
              textDecoration: "none",
              padding: "16px 32px",
              borderRadius: "10px",
            }}
          >
            Download CV
          </a>

          <a
            href="https://www.linkedin.com/in/amitraajsharma/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              border: "1px solid #c9a84c",
              color: "#c9a84c",
              textDecoration: "none",
              padding: "16px 32px",
              borderRadius: "10px",
            }}
          >
            LinkedIn Profile
          </a>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(201,168,76,0.15)",
            paddingTop: "40px",
          }}
        >
          <h3
            style={{
              color: "#ffffff",
              marginBottom: "16px",
            }}
          >
            Amit Sharma
          </h3>

          <p
            style={{
              color: "#bdbdbd",
              lineHeight: "1.8",
            }}
          >
            Enterprise AI • Digital Transformation • Shared Services •
            GCC Leadership • Customer Operations • Operational Excellence
          </p>

          <p
            style={{
              color: "#777",
              marginTop: "30px",
            }}
          >
            © 2026 Amit Sharma. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
}