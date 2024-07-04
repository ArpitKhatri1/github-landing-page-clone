import React, { useEffect } from "react";
import Image from "next/image";
import ThreeCardLayout from "./three-card-layout";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GoBriefcase } from "react-icons/go";
import AllEditors from "./all-editors";
import ProductivityMainContent from "./productivity-main-content";
gsap.registerPlugin(ScrollTrigger)

function Productivity() {
    const shapeRef1 = useRef(null);

    const prodLine = useRef(null)

    useGSAP(() => {
        gsap.to(shapeRef1.current, {
            rotateZ: 360,
            duration: 50,
            repeat: -1,
            ease: "none",
        });


        gsap.from(prodLine.current, {
            transformOrigin: "center top",
            scale: 0,
            duration: 0.5,
            scrollTrigger: {
                trigger: prodLine.current,
                start: "top 75%",
                toggleActions: "play none none reverse",

            }
        })

    });

    return (
        <div className="relative h-full ">
            <a id="productivity"></a>
            <div className="container-xl max-w-[1280px] ml-auto mr-auto ">
                <div className="flex relative">
                    <div className="w-1/12 flex flex-col  items-center relative">
                        <div className="p-5 relative">
                            <GoBriefcase size={25} className="z-50 " />
                            <div className="bg-green-500 absolute mt-2 blur-[20px] w-6 h-6 flex top-3"></div>
                        </div>
                        <div ref={prodLine} className="w-[3px] bg-white h-full gradient-3 mx-auto mt-1"></div>
                    </div>

                    <div className="pb-28 pt-4">
                        <div className="text-xl ">Productivity</div>
                        <div className="mt-4 text-[2.5rem] leading-9  text-green-500">
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
                    <AllEditors />
                </div>
                <div className="flex ">
                    <ProductivityMainContent />
                </div>
                <ThreeCardLayout />
            </div>
        </div>

    );
}

export default Productivity;
