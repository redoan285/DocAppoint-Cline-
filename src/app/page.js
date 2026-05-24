import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import WhyChoseUse from "@/components/WhyChoseUse";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <HeroSection />
    <WhyChoseUse />
    {/* <HowItWorks /> */}
    </div>
  );
}
