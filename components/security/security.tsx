"use client";
import React from "react";
import HoverCard from "../hover-card";

import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/all";
import SecurityMain from "./security-main";
import SecurityMainContent from "./security-main-content";
import SecurityThreeCardLayout from "./security-three-card-layout";
import EmailComponent from "../email";
import { PiBracketsAngleBold } from "react-icons/pi";
gsap.registerPlugin(ScrollTrigger);
function Security() {
  let refs: HTMLCollectionOf<Element>
  let refsArray: Element[] = []

  useEffect(() => {
    refs = document.getElementsByClassName("timeline-element")
    for (let i = 0; i < refs.length; i++) {
      refsArray.push(refs[i])

    }
    console.log(refsArray)

  }, [])



  const data = [
    { key: 0, time: "1m 42s", text: "Initialize CodeQL" },
    { key: 1, time: "1m 24s", text: "Autobuild" },
    { key: 2, time: "1m 36s", text: "Perform CodeQL Analyses" },
  ];
  const block1 = useRef(null);
  const joinLine = useRef(null);
  const block2 = useRef(null);

  const listPopUp = useRef(null);
  const blueBg = useRef(null);

  useGSAP(() => {
    const t2 = gsap.timeline({
      defaults: {
        ease: "back.out",
      },
      scrollTrigger: {
        trigger: block1.current,
        // markers: true,
        start: "top 95%",
        toggleActions: "play none none reverse",
      },
    });
    t2.from(block1.current, { opacity: 0, scale: 0.5, duration: 0.5 })
      .from(joinLine.current, { opacity: 0, scale: 0.5, duration: 0.5 })
      .from(block2.current, { opacity: 0, scale: 0.5, duration: 0.5 });
    refsArray.forEach((ref) => {
      t2.from(ref, { opacity: 0, duration: 0.3, scale: 0.8 });
    });

    gsap.from(listPopUp.current, {
      translateX: 100,
      opacity: 0,
      duration: 0.5,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: listPopUp.current,
        start: "0% center",
        end: "100% center",

        toggleActions: "play none none reverse",
      },
    });
    gsap.from(blueBg.current, {
      translateX: 100,
      opacity: 0,
      duration: 0.5,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: listPopUp.current,
        start: "0% center",
        end: "100% center",
        toggleActions: "play none none reverse",
      },
    });
  });


  return (
    <div className="relative h-full ">
      <a id="security"></a>
      <div className="container-xl max-w-[1280px] ml-auto mr-auto justify-center">
        <div className="flex relative">
          <SecurityMain />
        </div>
        <div className="h-[480px] w-auto relative ">
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
                  <div
                    className="bg-[#41474E] h-fit w-[450px] rounded-lg relative"
                    ref={block1}
                  >
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
                  {data.map((data) => {
                    return (
                      <div
                        key={data.key}

                        className="py-4 flex px-4 items-center timeline-element"
                      >
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
                        {data.text}
                        <div className="ml-auto text-xs text-neutral-400">
                          {data.time}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </HoverCard>
          <div
            className="copilotpopup  h-full absolute top-[90%] right-0"
            ref={listPopUp}
          >
            <Image
              src={"/new/illu-ghas-list-84af1f1ce2b8.png"}
              alt="circle"
              height={0}
              width={0}
              sizes="100vw"
              className="w-[508px] h-auto rounded-xl "
            />
          </div>
          <div ref={blueBg} className="absolute -z-50 right-[-20%]  top-[-20%]">
            <Image
              src={"/new/bg-glow-blue-036b8dc2d1ce.png"}
              alt="circle"
              height={0}
              width={0}
              sizes="100vw"
              className="w-[1068px]  h-auto rounded-xl"
            />
          </div>
        </div>
        <div className="flex">
          <SecurityMainContent />
        </div>
        <SecurityThreeCardLayout />
        <div className="flex">
          <div className="w-1/12 flex flex-col  items-center relative">
            <div className="w-[3px] h-[90%] gradient-8">

            </div>
            <div className="p-2 pt-4 relative">
              <PiBracketsAngleBold
                size={25}
                className="z-50"
              />
              <div className="bg-violet-500 absolute mt-2 blur-[20px] w-6 h-6 flex top-1 left-1"></div>
            </div>
          </div>
          <div className="pt-20">
            <div className="text-5xl font-semibold">

              <div>Over 100 million developers</div>
              <div>call GitHub home</div>
            </div>
            <div className="pt-8 pb-16 text-neutral-400">
              Whether you’re scaling your startup or just learning how to code, GitHub is your home. Join <br /> the world’s largest developer platform to build the innovations that empower humanity. <br /> Let’s build from here.
            </div>
            <div className="flex">
              <EmailComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Security;
