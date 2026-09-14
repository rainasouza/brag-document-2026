import { Hero } from "@/components/brag-page/Hero";
import { Overview } from "@/components/brag-page/Overview";
import { Journey } from "@/components/brag-page/Journey";
import { LearningsSection } from "@/components/brag-page/LearningsSection";
import { OutsideWork } from "@/components/brag-page/OutsideWork";
import { NextSteps } from "@/components/brag-page/NextSteps";
import { Closing } from "@/components/brag-page/Closing";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Overview />
      <Journey />
      <LearningsSection />
      <OutsideWork />
      <NextSteps />
      <Closing />
    </main>
  );
}
