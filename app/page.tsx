import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BusinessFlow from "@/components/BusinessFlow";
import DevelopmentScope from "@/components/DevelopmentScope";
import TechStack from "@/components/TechStack";
import BudgetPlan from "@/components/BudgetPlan";
import DevelopmentFlow from "@/components/DevelopmentFlow";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <BusinessFlow />
      <DevelopmentScope />
      <TechStack />
      <BudgetPlan />
      <DevelopmentFlow />
      <Footer />
    </main>
  );
}
