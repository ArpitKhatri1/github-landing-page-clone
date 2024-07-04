import React from "react";
import { FaGreaterThan } from "react-icons/fa";
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function SecurityMainContent() {
    const copilotDes = useRef(null);
    const mainLine = useRef(null);
    const lineImage = useRef(null);
    const punchLine = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            defaults: {
                ease: "back.out",
            },
            scrollTrigger: {
                trigger: punchLine.current,
                start: "0% 95%",
                // markers: true,
                toggleActions: "play none none reverse"
            },
        });

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
        })
            .from(
                lineImage.current,
                {
                    duration: 0.5,
                    ease: "power1.out",
                    opacity: 0,
                },
                "-=0.75"
            )
            .from(
                punchLine.current,
                {
                    translateX: -50,
                    opacity: 0,
                    duration: 0.5,
                },
                "-=0.6"
            );
    });
    return (
        <>
            <div className="w-1/12 flex flex-col justify-center items-center relative">
                <div
                    ref={mainLine}
                    className="w-[3px] bg-white h-full gradient-7 mx-auto mt-1"
                ></div>
                <div ref={lineImage}>
                    <Image
                        alt="image"
                        src={"/new/git-branch-security-2-f6a799957581.svg"}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="h-auto w-[80px] absolute top-[27%]"
                    />
                </div>
            </div>
            <div className="ml-10  mt-12 ">
                <div ref={copilotDes} className="mb-24 text-neutral-500 text-xl">
                    <div>
                        <span className="text-white">GitHub Advanced Security </span>enables you to
                        {" "}
                    </div>
                    <div>find and fix vulnerabilities with ease and ship </div>
                    <div> secure code quickly.</div>

                    <div className="flex gap-3 font-semibold mt-3 text-white">
                        Dive into GitHub Advanced Security
                        <FaGreaterThan size={15} className="mt-2" />
                    </div>
                </div>
                <div ref={punchLine} className="pb-36">
                    <div className="space-y-3 ml-2">
                        <span className="text-xs text-teal-500 border-solid border-[1px] border-teal-500 py-[2px] px-2 rounded-xl">
                            Did you know?
                        </span>

                        <div className="text-teal-500 text-5xl ">7x faster</div>
                        <div className="text-xl">
                            <div>vulnerability fixes with GitHub</div>

                        </div>
                    </div>
                    {/* <div className="flex gap-2 mt-5 text-lg pb-20 ml-2">
                        Read The report
                        <FaGreaterThan size={13} className="mt-[12px]" />
                    </div> */}
                </div>
            </div>
        </>
    );
}

export default SecurityMainContent;
