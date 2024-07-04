import React from 'react'
import Image from 'next/image'
import { FaGreaterThan } from "react-icons/fa";
import HoverCard from "../hover-card";
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function ThreeCardLayout() {
    const shapeRef2 = useRef(null);
    useGSAP(() => {
        gsap.to(shapeRef2.current, {
            rotateZ: 360,
            duration: 70,
            repeat: -1,
            ease: "none",
        });
    })
    return (
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
                                            GitHub Mobile and Copilot{" "}
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
    )
}

export default ThreeCardLayout