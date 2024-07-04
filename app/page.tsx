"use client";
import HeroSection from "@/components/hero-section/herosection";

import Productivity from "@/components/productivity/productivity";
import Security from "@/components/security/security";
import UpperNavbar from "@/components/upper-navbar/upper-navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import VideoAnimation from "@/components/video-animation/video-animation";
gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  const navbarRef = useRef(null);
  const startRef = useRef(null);
  useGSAP(() => {
    gsap.from(navbarRef.current, {
      visibility: "hidden",
      scrollTrigger: {
        trigger: startRef.current,
        start: "-5% start",

        toggleActions: "play none none reverse",
      },
    });
  });
  return (
    <>
      <div className="relative">
        <HeroSection />

        <div
          ref={startRef}

        >
          <Productivity />
        </div>
        <div className="bg-gradient-to-b from-[#0D1117] to-[#040E1E]">
          <Security />

          <VideoAnimation />
        </div>

        <div ref={navbarRef}>
          <UpperNavbar />
        </div>
      </div>
    </>
  );
}
