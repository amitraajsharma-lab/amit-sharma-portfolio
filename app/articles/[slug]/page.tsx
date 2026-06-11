type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ArticlePage({
  params,
}: Props) {
  const { slug } = await params;

  const articles: Record<
    string,
    {
      title: string;
      content: string;
    }
  > = {
    "gcc-ai-value-engines": {
      title:
        "Why GCCs Must Become AI Value Creation Engines",
      content:
        "Global Capability Centers are evolving from cost-focused delivery organizations into enterprise value creation engines. The next wave of GCC leadership will be defined by AI adoption, productivity acceleration, innovation and measurable business outcomes.",
    },

    "agentic-ai-shared-services": {
      title:
        "The Future of Shared Services in an Agentic AI World",
      content:
        "Agentic AI will redefine how shared services operate. Intelligent agents will augment decision-making, automate workflows and transform service delivery models across finance, HR, procurement and customer operations.",
    },

    "ai-native-enterprises": {
      title:
        "Beyond Automation: Building AI-Native Enterprises",
      content:
        "The future belongs to organizations that redesign operating models around AI rather than simply automating existing processes. AI-native enterprises will achieve greater agility, productivity and growth.",
    },
  };

  const article =
    articles[slug] ??
    {
      title: "Article Not Found",
      content: "Content unavailable.",
    };

  return (
    <main
      style={{
        background: "#050505",
        color: "#ffffff",
        minHeight: "100vh",
        padding: "100px 8%",
      }}
    >
      <h1
        style={{
          fontSize: "56px",
          marginBottom: "40px",
        }}
      >
        {article.title}
      </h1>

      <p
        style={{
          fontSize: "22px",
          lineHeight: "2",
          maxWidth: "1000px",
          color: "#d0d0d0",
        }}
      >
        {article.content}
      </p>
    </main>
  );
}