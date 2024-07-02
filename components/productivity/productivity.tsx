
import React, { useEffect } from "react";
import Image from "next/image";
import { FaGreaterThan } from "react-icons/fa";
import HoverCard from "../hover-card";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GoBriefcase } from "react-icons/go";

gsap.registerPlugin(ScrollTrigger);
function Productivity() {
    const shapeRef1 = useRef(null);
    const shapeRef2 = useRef(null);
    const copilotEditor = useRef(null);
    const copilotPopUp = useRef(null);
    const purpleBg = useRef(null);
    // useGSAP(() => {
    //     gsap.to(shapeRef1.current, { rotateZ: 360, duration: 50, repeat: -1, ease: "none" })
    //     gsap.to(shapeRef2.current, { rotateZ: 360, duration: 70, repeat: -1, ease: "none" })
    //     gsap.from(copilotEditor.current, {
    //         translateX: 100,
    //         opacity: 0,
    //         duration: 0.5,
    //         ease: "power1.inOut",
    //         scrollTrigger: {
    //             trigger: copilotEditor.current,
    //             markers: true,
    //             start: "0% 90%",
    //             end: "0% 90%",

    //         }
    //     });
    // });

    return (
        <div className="relative h-full ">
            <div className="container-xl max-w-[1280px] ml-auto mr-auto ">
                <div className="flex relative">
                    <div className="w-1/12 flex flex-col  items-center relative">
                        <div className="p-5 relative">
                            <GoBriefcase size={25} className="z-50 " />
                            <div className="bg-green-500 absolute mt-2 blur-[20px] w-6 h-6 flex top-3"></div>
                        </div>
                        <div className="w-[3px] bg-white h-full gradient-3 mx-auto mt-1"></div>
                    </div>

                    <div className="pb-28 pt-4">
                        <div className="text-xl ">Productivity</div>
                        <div className="mt-4 text-[2.5rem]  leading-9  text-green-500">
                            Accelerate innovation
                        </div>
                        <div className="text-[2.3rem] ">
                            Our AI-powered platform increases the
                        </div>
                        <div className="text-[2.3rem] leading-8">
                            pace of software development.
                        </div>
                    </div>
                    <Image
                        ref={shapeRef1}
                        src={"/shape-0-df97fa6b0c27.svg"}
                        alt="circle"
                        height={0}
                        width={0}
                        sizes="100vw"
                        className="absolute -z-10 right-[-24%] top-[10%] h-auto w-[626px] "
                    />
                </div>
                <div className="relative">
                    <div ref={copilotEditor} className="copilotEditor">
                        <Image
                            src={"/illu-copilot-editor-6474457a5b19.png"}
                            alt="circle"
                            height={0}
                            width={0}
                            sizes="100vw"
                            className="w-[1368px] h-auto"
                        />
                    </div>
                    <div>
                        <Image
                            src={"/illu-copilot-sidebar-3d2efb504577.png"}
                            alt="circle"
                            height={0}
                            width={0}
                            sizes="100vw"
                            className="w-[468px] h-auto absolute right-10 rounded-xl top-[40%]"
                        />
                    </div>
                    <div>
                        <Image
                            src={"/bg-glow-purple-6e9a6a96cb04.png"}
                            alt="circle"
                            height={0}
                            width={0}
                            sizes="100vw"
                            className="w-[1068px] -z-50 h-auto absolute right-[-20%] rounded-xl top-[40%]"
                        />
                    </div>
                </div>
                <div className="flex ">
                    <div className="w-1/12 flex flex-col justify-center items-center relative">
                        <div className="w-[3px] bg-white h-full gradient-4 mx-auto mt-1"></div>
                        <div>
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
                        <div className="mb-24 text-neutral-500 text-xl">
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
                <div className="w-full flex flex-col gap-5">
                    <div className="relative">
                        <HoverCard className=" h-[487px] flex">
                            <div className="w-1/2 py-12 px-12 text-xl h-full flex flex-col">
                                <div className="text-neutral-600 ">
                                    <div>
                                        <span className="text-white">GitHub Actions </span>automates
                                        your build,{" "}
                                    </div>
                                    <div>test, and deployment workflow with</div>
                                    <div> simple and secure CI/CD.</div>
                                </div>
                                <div className="flex mt-auto text-lg gap-2">
                                    Discover Github Actions
                                    <FaGreaterThan size={12} className="mt-[12px]" />
                                </div>
                            </div>
                            <div className="ml-auto mt-auto z-[100]">
                                <Image
                                    src={"/illu-actions-2-c5178134f381.png"}
                                    alt="image"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="h-auto w-[640px]"
                                />
                            </div>
                        </HoverCard>
                        <Image
                            ref={shapeRef2}
                            src={"/shape-1-c219318e479a.svg"}
                            alt="circle"
                            height={0}
                            width={0}
                            sizes="100vw"
                            className="absolute -z-10 right-[-24%] bottom-[40%] h-auto w-[626px] "
                        />
                    </div>
                    <div className="flex w-full gap-5">
                        <div className="h-[832px] w-full">
                            <HoverCard className="h-full">
                                <div className="h-full flex flex-col">
                                    <div className="h-auto p-12 text-lg space-y-5 ">
                                        <div className="text-neutral-600 text-xl ">
                                            <div>
                                                <span className="text-white">GitHub Codespaces </span>
                                                offers a
                                            </div>
                                            <div>complete dev environment in</div>
                                            <div>seconds. Code, build, test, and open</div>
                                            <div>pull requests from any repo.</div>
                                        </div>
                                        <div className="flex mt-auto text-lg gap-2">
                                            Check out Github Codespaces
                                            <FaGreaterThan size={12} className="mt-[12px]" />
                                        </div>
                                    </div>
                                    <div className="mt-auto z-[100]">
                                        <div className="mt-auto ml-auto">
                                            <Image
                                                alt="image"
                                                src="/illu-codespaces-1d2d17e8b2b7.png"
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                className="h-auto w-[640px]"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </HoverCard>
                        </div>
                        <div className="h-[832px] w-full">
                            <HoverCard className="h-full">
                                <div className="h-full flex flex-col ">
                                    <div className="h-auto p-12 text-lg space-y-5 ">
                                        <div className="text-neutral-600 text-xl ">
                                            <div>
                                                <span className="text-white">
                                                    GitHub Mobile and Copilor{" "}
                                                </span>
                                                now let
                                            </div>
                                            <div>you manage projects and converse</div>
                                            <div>with your AI pair programmer on</div>
                                            <div>the go.</div>
                                        </div>
                                        <div className="flex mt-auto text-lg gap-2">
                                            Download Github Mobile
                                            <FaGreaterThan size={12} className="mt-[12px]" />
                                        </div>
                                    </div>
                                    <div className="mt-auto z-[100]">
                                        <div className="mt-auto ml-auto">
                                            <Image
                                                alt="image"
                                                src="/illu-mobile-chat-9e7549906574.png"
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                className="w-auto h-[540px]"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </HoverCard>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Productivity;
