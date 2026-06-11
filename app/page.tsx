import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import TrustedBy from "../components/TrustedBy";
import ExpertiseMatrix from "../components/ExpertiseMatrix";
import BoardroomAdvisory from "../components/BoardroomAdvisory";
import ExecutiveDashboard from "../components/ExecutiveDashboard";
import TransformationPortfolio from "../components/TransformationPortfolio";
import ExecutiveJourney from "../components/ExecutiveJourney";
import AIFramework from "../components/AIFramework";
import TransformationCases from "../components/TransformationCases";
import ThoughtLeadership from "../components/ThoughtLeadership";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main
      style={{
        background: "#050505",
        color: "#ffffff",
        minHeight: "100vh",
      }}
    >
      <Navigation />
      <Hero />
      <TrustedBy />
      <ExpertiseMatrix />
      <BoardroomAdvisory />
      <ExecutiveDashboard />
      <TransformationPortfolio />
      <ExecutiveJourney />
      <AIFramework />
      <TransformationCases />
      <ThoughtLeadership />
      <Contact />
    </main>
  );
}