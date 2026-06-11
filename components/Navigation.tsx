export default function Navigation() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: "rgba(12,12,13,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(201,168,76,0.15)",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "20px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            color: "#c9a84c",
            fontWeight: "bold",
            letterSpacing: "2px",
          }}
        >
          AMIT SHARMA
        </div>

        <div
          style={{
            display: "flex",
            gap: "30px",
            color: "#ffffff",
          }}
        >
          <span>Impact</span>
          <span>Transformations</span>
          <span>Journey</span>
          <span>Insights</span>
          <span>Contact</span>
        </div>
      </div>
    </nav>
  );
}