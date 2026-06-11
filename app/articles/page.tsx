export default function ArticlesPage() {
  const articles = [
    {
      title: "Why GCCs Must Become AI Value Creation Engines",
      category: "AI Transformation",
      slug: "gcc-ai-value-engines",
    },
    {
      title: "The Future of Shared Services in an Agentic AI World",
      category: "Shared Services",
      slug: "agentic-ai-shared-services",
    },
    {
      title: "Beyond Automation: Building AI-Native Enterprises",
      category: "Digital Transformation",
      slug: "ai-native-enterprises",
    },
  ];

  return (
    <main
      style={{
        background: "#050505",
        minHeight: "100vh",
        padding: "100px 8%",
        color: "#ffffff",
      }}
    >
      <h1
        style={{
          fontSize: "64px",
          marginBottom: "60px",
        }}
      >
        Executive Insights
      </h1>

      <div
        style={{
          display: "grid",
          gap: "30px",
        }}
      >
        {articles.map((article) => (
          <a
            key={article.slug}
            href={`/articles/${article.slug}`}
            style={{
              textDecoration: "none",
            }}
          >
            <div
              style={{
                background: "#0b0b0b",
                border: "1px solid rgba(201,168,76,0.15)",
                borderRadius: "16px",
                padding: "35px",
              }}
            >
              <p
                style={{
                  color: "#c9a84c",
                }}
              >
                {article.category}
              </p>

              <h2
                style={{
                  color: "#ffffff",
                }}
              >
                {article.title}
              </h2>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}