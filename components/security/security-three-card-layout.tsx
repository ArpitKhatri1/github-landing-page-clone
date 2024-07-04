import React from 'react'
import Image from 'next/image'
import { FaGreaterThan } from "react-icons/fa";
import HoverCard from "../hover-card";
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function SecurityThreeCardLayout() {
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
                                <span className="text-white">Code scanning </span> is our code analysis{" "}
                            </div>
                            <div>tool that helps you remediate issues in</div>
                            <div> your code.</div>
                        </div>
                        <div className="flex mt-auto text-lg gap-2">
                            Download the latest SAST ebook
                            <FaGreaterThan size={12} className="mt-[12px]" />
                        </div>
                    </div>
                    <div className="ml-auto mt-auto z-[100]">
                        <Image
                            src={"/new/illu-code-scanning-fc9dfb212aa3.png"}
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
                <div className="h-[732px] w-full">
                    <HoverCard className="h-full">
                        <div className="h-full flex flex-col">
                            <div className="h-auto p-12 text-lg space-y-5 ">
                                <div className="text-neutral-600 text-xl ">
                                    <div>
                                        <span className="text-white">Dependabot  </span>
                                        makes it easy to find
                                    </div>
                                    <div>and fix vulnerable dependencies in</div>
                                    <div>your supply chain.</div>

                                </div>
                                <div className="flex mt-auto text-lg gap-2">
                                    Explore Dependabot
                                    <FaGreaterThan size={12} className="mt-[12px]" />
                                </div>
                            </div>
                            <div className="mt-auto z-[100]">
                                <div className="mt-auto ml-auto">
                                    <Image
                                        alt="image"
                                        src="/new/illu-dependabot-d98c73cc6724.png"
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
                <div className="h-[732px] w-full">
                    <HoverCard className="h-full">
                        <div className="h-full flex flex-col ">
                            <div className="h-auto p-12 text-lg space-y-5 ">
                                <div className="text-neutral-600 text-xl ">
                                    <div>
                                        <span className="text-white">
                                            Secret scanning{" "}
                                        </span>
                                        automatically looks
                                    </div>
                                    <div>for partner patterns and prevents</div>
                                    <div>fraudulent use of accidentally</div>
                                    <div>committed secrets.</div>
                                </div>
                                <div className="flex mt-auto text-lg gap-2">
                                    Read about secret scanning
                                    <FaGreaterThan size={12} className="mt-[12px]" />
                                </div>
                            </div>
                            <div className="mt-auto z-[100]">
                                <div className="mt-auto ml-auto">
                                    <Image
                                        alt="image"
                                        src="/new/illu-secret-scanning-2-88fb429376d6.png"
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

export default SecurityThreeCardLayout