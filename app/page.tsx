"use client";
import HeroSection from "@/components/hero-section/herosection";

import Productivity from "@/components/productivity/productivity";
import Security from "@/components/security/security";


export default function Home() {
  return (
    <>
      <div>
        <HeroSection />
        <Productivity />
        <Security />
      </div>
    </>
  );
}
