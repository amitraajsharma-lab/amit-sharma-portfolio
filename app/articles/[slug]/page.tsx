import { articles } from "@/lib/articles";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ArticlePage({
  params,
}: Props) {
  const { slug } = await params;

  const article =
    articles[slug as keyof typeof articles];

  if (!article) {
    return (
      <main
        style={{
          background: "#05070D",
          color: "#ffffff",
          minHeight: "100vh",
          padding: "100px 8%",
        }}
      >
        <h1>Article Not Found</h1>
      </main>
    );
  }

  return (
    <main
      style={{
        background: "#05070D",
        color: "#ffffff",
        minHeight: "100vh",
        padding: "100px 8%",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            color: "#8AAAE5",
            marginBottom: "12px",
          }}
        >
          {article.category}
        </div>

        <h1
          style={{
            fontSize: "60px",
            marginBottom: "20px",
            lineHeight: "1.2",
          }}
        >
          {article.title}
        </h1>

        <div
          style={{
            color: "#D4AF37",
            marginBottom: "50px",
          }}
        >
          {article.readTime}
        </div>

        <div
          style={{
            color: "#D1D5DB",
            fontSize: "22px",
            lineHeight: "2",
            whiteSpace: "pre-line",
          }}
        >
          {article.content}
        </div>
      </div>
    </main>
  );
}