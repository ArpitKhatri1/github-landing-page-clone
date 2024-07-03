"use client";
import React from "react";
import HoverCard from "../hover-card";

import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import SecurityMain from "./security-main";
gsap.registerPlugin(ScrollTrigger);
function Security() {
  const block1 = useRef(null)
  const joinLine = useRef(null)
  const block2 = useRef(null)

  const timeline2 = useRef<GSAPTimeline>(
    gsap.timeline({
      defaults: {
        ease: "back.out",
      },

    }))

  const t2 = timeline2.current;

  useGSAP(() => {
    t2.from(block1.current, { opacity: 0, scale: 0.5, duration: 0.5, })
      .from(joinLine.current, { opacity: 0, scale: 0.5, duration: 0.5, })
      .set(block2.current, { zIndex: 10 })
      .from(block2.current, { opacity: 0, scale: 0.5, duration: 0.5, })
  })



  return (
    <div className="relative h-full ">
      <div className="container-xl max-w-[1280px] ml-auto mr-auto justify-center">
        <div className="flex relative">
          <SecurityMain />
        </div>
        <div className="h-[480px] w-auto relative pb-10">
          <Image
            alt="image"
            src={"/shape-2-f30dcc9bd35c.svg"}
            height={0}
            width={0}
            sizes="100vw"
            className="h-auto w-[740px] absolute bottom-[10%] right-[-20%]"
          />
          <HoverCard className="p-14 h-full" colour="pink">
            <div className="text-xs text-neutral-400">
              <div>cmake.yml</div>
              <div className="text-[11px]">on: push</div>
            </div>
            <div className="flex h-full w-full justify-center items-center relative ">
              <div className="h-fit w-[450px] ">
                <div className="absolute top-[23%]">
                  <div className="bg-[#41474E] h-fit w-[450px] rounded-lg relative" ref={block1}>
                    <div className="py-4 flex px-4 items-center" >
                      <svg
                        aria-hidden="true"
                        height="24"
                        viewBox="0 0 24 24"
                        version="1.1"
                        width="24"
                        data-view-component="true"
                        className="text-green-500 fill-current mr-2 "
                      >
                        <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z"></path>
                      </svg>
                      Build
                      <div className="ml-auto text-xs text-neutral-400">
                        1m 21s
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div className="absolute top-[35%] left-[47%]" ref={joinLine}>


                <div className="relative flex items-center -space-x-1">
                  <div className="h-[13px] z-[10] w-[13px] bg-neutral-500 border-solid border-[2px] border-[#41474E] rounded-full  "></div>
                  <div className="h-[4px] w-[50px]  bg-white "></div>
                  <div className="h-[13px] z-[80] w-[13px] bg-neutral-500 border-solid border-[2px] border-[#41474E] rounded-full  "></div>
                </div>
              </div>
              <div className="relative z-[10]" ref={block2}>
                <div className="absolute text-sm p-2 top-[-23%] left-[55px] rounded-t-md px-4 bg-[#41474E]">
                  Steps
                </div>
                <div className="ml-11 w-[450px] text-sm bg-[#41474E] h-fit rounded-r-lg rounded-bl-lg ">
                  <div className="py-4 flex px-4 items-center">
                    <svg
                      aria-hidden="true"
                      height="24"
                      viewBox="0 0 24 24"
                      version="1.1"
                      width="24"
                      data-view-component="true"
                      className="text-green-500 fill-current mr-2 "
                    >
                      <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z"></path>
                    </svg>
                    Initialize CodeQL
                    <div className="ml-auto text-xs text-neutral-400">
                      1m 42s
                    </div>
                  </div>
                  <div className="py-4 flex px-4 items-center">
                    <svg
                      aria-hidden="true"
                      height="24"
                      viewBox="0 0 24 24"
                      version="1.1"
                      width="24"
                      data-view-component="true"
                      className="text-green-500 fill-current mr-2 "
                    >
                      <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z"></path>
                    </svg>
                    Autobuild
                    <div className="ml-auto text-xs text-neutral-400">
                      1m 24s
                    </div>
                  </div>
                  <div className="py-4 flex px-4 items-center">
                    <svg
                      aria-hidden="true"
                      height="24"
                      viewBox="0 0 24 24"
                      version="1.1"
                      width="24"
                      data-view-component="true"
                      className="text-green-500 fill-current mr-2 "
                    >
                      <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z"></path>
                    </svg>
                    Perform CodeQL Analyses
                    <div className="ml-auto text-xs text-neutral-400">
                      1m 36s
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </HoverCard>
        </div>
        <video src="/globe-900.h264-975e7b5ac572.mp4" autoPlay muted loop className="w-[900px] h-[900px]"></video>
      </div>
    </div>
  );
}

export default Security;
