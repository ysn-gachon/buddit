import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Insights from '@/components/Insights';
import Solution from '@/components/Solution';
import Features from '@/components/Features';
import Roadmap from '@/components/Roadmap';
import Vision from '@/components/Vision';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Insights />
        <Solution />
        <Features />
        <Roadmap />
        <Vision />
      </main>
      <Footer />
    </div>
  );
}