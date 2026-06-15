import { articles } from "@/lib/articles";

export default function ArticlesPage() {
  const articleList = Object.entries(articles);

  return (
    <main
      style={{
        background: "#05070D",
        minHeight: "100vh",
        color: "#ffffff",
        padding: "100px 40px",
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
              color: "#D4AF37",
              letterSpacing: "4px",
              textTransform: "uppercase",
              marginBottom: "20px",
              fontSize: "14px",
            }}
          >
            Executive Insights
          </div>

          <h1
            style={{
              fontSize: "72px",
              marginBottom: "20px",
            }}
          >
            Perspectives on
            <br />
            Enterprise Transformation
          </h1>

          <p
            style={{
              maxWidth: "900px",
              margin: "0 auto",
              color: "#AAB2C5",
              fontSize: "22px",
              lineHeight: "1.8",
            }}
          >
            Insights on AI transformation, operating
            models, GCC evolution, shared services,
            customer operations and enterprise value
            creation through the VISTA™ framework.
          </p>
        </div>

        <div
          style={{
            background: "#0A0F1C",
            border: "1px solid rgba(212,175,55,0.15)",
            borderRadius: "24px",
            padding: "40px",
            marginBottom: "60px",
          }}
        >
          <h2
            style={{
              color: "#D4AF37",
              marginBottom: "20px",
            }}
          >
            Featured Framework
          </h2>

          <h3
            style={{
              fontSize: "40px",
              marginBottom: "20px",
            }}
          >
            VISTA™ Enterprise AI Value Creation Framework
          </h3>

          <p
            style={{
              color: "#C8D0E0",
              fontSize: "20px",
              lineHeight: "1.9",
            }}
          >
            A practical model for converting AI investment
            into measurable business outcomes through
            Vision, Intelligence, Scale, Transformation
            and Advantage.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(420px,1fr))",
            gap: "30px",
          }}
        >
          {articleList.map(([slug, article]) => (
            <a
              key={slug}
              href={`/articles/${slug}`}
              style={{
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  background: "#111827",
                  border:
                    "1px solid rgba(212,175,55,0.15)",
                  borderRadius: "22px",
                  padding: "36px",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    color: "#8AAAE5",
                    marginBottom: "14px",
                    fontSize: "14px",
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                  }}
                >
                  {article.category}
                </div>

                <h2
                  style={{
                    color: "#ffffff",
                    fontSize: "30px",
                    lineHeight: "1.35",
                    marginBottom: "16px",
                  }}
                >
                  {article.title}
                </h2>

                <div
                  style={{
                    color: "#D4AF37",
                    marginBottom: "20px",
                  }}
                >
                  {article.readTime}
                </div>

                <div
                  style={{
                    color: "#C8D0E0",
                    lineHeight: "1.8",
                  }}
                >
                  Executive Perspective →
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}