"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function HoverCard({
  children,
  className,
  colour
}: {
  children: React.ReactNode;
  className: string;
  colour?: "green" | "blue" | "pink"
}) {



  const cardRef = useRef<HTMLDivElement>(null);
  const cardContainerRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const setColour = colour == "green" ? "#0fa824" : colour == "blue" ? "#12aaba" : "#fc17fc"
    // cardRef.current?.style.setProperty("--colorR", setColour);


  }, [])



  useEffect(() => {
    cardRef.current?.addEventListener("mousemove", (e: MouseEvent) => {
      if (!cardRef.current) {
        return;
      }
      let x = e.pageX - cardRef.current.getBoundingClientRect().left - 600;
      let y = e.pageY - window.scrollY - cardRef.current.getBoundingClientRect().top - 600;

      cardRef.current.style.setProperty("--x", x + "px");
      cardRef.current.style.setProperty("--y", y + "px");
      let turnX = e.pageX - cardRef.current.getBoundingClientRect().left - cardRef.current.getBoundingClientRect().width / 2
      let turnY = e.pageY - window.scrollY - cardRef.current.getBoundingClientRect().top - cardRef.current.getBoundingClientRect().height / 2;


      cardRef.current?.style.setProperty('--rotateYP', -1 * turnX / 700 + "deg");
      cardRef.current?.style.setProperty('--rotateXP', turnY / 300 + "deg");





    })
    cardRef.current?.addEventListener("mouseleave", (e: MouseEvent) => {
      if (!cardRef.current) {
        return;
      }
      cardRef.current.style.setProperty("--opacitybefore", "0%")
      cardRef.current?.style.setProperty('--rotateXP', 0 + "deg");
      cardRef.current?.style.setProperty('--rotateYP', 0 + "deg");



    })
    cardRef.current?.addEventListener("mouseenter", () => {
      if (!cardRef.current) {
        return;
      }
      cardRef.current.style.setProperty("--opacitybefore", "25%")


    })
  }, []);

  return (
    <div ref={cardContainerRef} className="perv  h-full rounded-xl">
      <div
        ref={cardRef}
        className={cn(
          "bg-[#161B22] relative radial-gradient-container rounded-xl border-solid border-[1px] border-neutral-600/50",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}

export default HoverCard;
