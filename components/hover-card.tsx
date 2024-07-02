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

  useEffect(() => {
    cardRef.current?.addEventListener("mousemove", (e: MouseEvent) => {
      if (!cardRef.current) {
        return;
      }
      let x = e.pageX - cardRef.current?.offsetLeft - 500;
      let y = e.pageY + cardRef.current?.offsetTop - 2230;

      cardRef.current.style.setProperty("--x", x + "px");
      cardRef.current.style.setProperty("--y", y + "px");
    });
  }, []);

  return (
    <div ref={cardContainerRef} className="perv overflow-hidden h-full rounded-xl">
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
