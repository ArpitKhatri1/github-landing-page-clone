"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function HoverCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const constrain = 20;
  const perspectiveValue = '1000px';




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
      console.log(turnX)

      cardRef.current?.style.setProperty('--rotateYP', -1 * turnX / 700 + "deg");
      cardRef.current?.style.setProperty('--rotateXP', turnY / 1000 + "deg");
      // cardRef.current?.style.setProperty('--perspectiveP', 1000 + 'px');




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
