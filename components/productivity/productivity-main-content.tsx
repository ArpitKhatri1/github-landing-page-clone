import React from "react";
import { FaGreaterThan } from "react-icons/fa";
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
function ProductivityMainContent() {
    const copilotDes = useRef(null);
    const mainLine = useRef(null);
    const lineImage = useRef(null);
    const punchLine = useRef(null);

    const timeline = useRef<GSAPTimeline>(
        gsap.timeline({
            defaults: {
                ease: "back.out",
            },
            scrollTrigger: {
                trigger: punchLine.current,
                start: "0% 95%",

            },
        })
    );

    const tl = timeline.current;

    useGSAP(() => {
        gsap.from(copilotDes.current, {
            translateX: 100,
            opacity: 0,
            duration: 0.5,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: copilotDes.current,
                start: "0% 90%",
                end: "0% 90%",
                toggleActions: "play none none reverse",
            },
        });

        tl.from(mainLine.current, {
            scaleY: 0,
            duration: 0.9,

            transformOrigin: "top center",
        }).from(lineImage.current, {
            duration: 0.5,
            ease: "power1.out",
            opacity: 0,
        }, "-=0.75")
            .from(punchLine.current, {
                translateX: -50,
                opacity: 0,
                duration: 0.5,

            }, "-=0.6")
    });
    return (
        <>
            <div className="w-1/12 flex flex-col justify-center items-center relative">
                <div
                    ref={mainLine}
                    className="w-[3px] bg-white h-full gradient-4 mx-auto mt-1"
                ></div>
                <div ref={lineImage}>
                    <Image
                        alt="image"
                        src={"/git-branch-productivity-c304b83d09c7.svg"}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="h-auto w-[80px] absolute top-[31%]"
                    />
                </div>
            </div>
            <div className="ml-10  mt-12 ">
                <div ref={copilotDes} className="mb-24 text-neutral-500 text-xl">
                    <div>
                        <span className="text-white">GitHub Copilot </span>empowers
                        developers to{" "}
                    </div>
                    <div>complete tasks 55% faster with </div>
                    <div> contextualized AI coding assistance across</div>
                    <div>workflows.</div>
                    <div className="flex gap-3 font-semibold mt-3 text-white">
                        Explore Github Copilot
                        <FaGreaterThan size={15} className="mt-2" />
                    </div>
                </div>
                <div ref={punchLine}>
                    <div className="space-y-3 ml-2">
                        <span className="text-xs text-green-500 border-solid border-[1px] border-green-500 py-[2px] px-2 rounded-xl">
                            Did you know?
                        </span>

                        <div className="text-green-500 text-5xl ">22% increase</div>
                        <div className="text-xl">
                            <div>in developer productivity after three</div>
                            <div>years with GitHub</div>
                        </div>
                    </div>
                    <div className="flex gap-2 mt-5 text-lg pb-20 ml-2">
                        Read The report
                        <FaGreaterThan size={13} className="mt-[12px]" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductivityMainContent;
