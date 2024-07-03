import React, { useEffect } from "react";
import Image from "next/image";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function AllEditors() {
    const copilotEditor = useRef(null);
    const copilotPopUp = useRef<HTMLDivElement>(null);
    const purpleBg = useRef(null);
    useGSAP(() => {

        gsap.from(copilotEditor.current, {
            translateX: 100,
            opacity: 0,
            duration: 0.5,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: copilotEditor.current,
                start: "0% 90%",
                end: "0% 90%",
                toggleActions: "play none none reverse",
            },
        });
        gsap.from(copilotPopUp.current, {
            translateX: 100,
            opacity: 0,
            duration: 0.5,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: copilotPopUp.current,
                start: "0% center",
                end: "100% center",

                toggleActions: "play none none reverse",
            },
        });
        gsap.from(purpleBg.current, {
            translateX: 100,
            opacity: 0,
            duration: 0.5,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: copilotPopUp.current,
                start: "0% center",
                end: "100% center",
                toggleActions: "play none none reverse",
            },
        });
    });
    return (
        <>
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
            <div
                className="copilotpopup  h-full absolute top-[40%] right-10"
                ref={copilotPopUp}
            >
                <Image
                    src={"/illu-copilot-sidebar-3d2efb504577.png"}
                    alt="circle"
                    height={0}
                    width={0}
                    sizes="100vw"
                    className="w-[468px] h-auto rounded-xl "
                />
            </div>
            <div
                ref={purpleBg}
                className="absolute -z-50 right-[-20%]  top-[40%]"
            >
                <Image
                    src={"/bg-glow-purple-6e9a6a96cb04.png"}
                    alt="circle"
                    height={0}
                    width={0}
                    sizes="100vw"
                    className="w-[1068px]  h-auto rounded-xl"
                />
            </div>
        </>
    )
}

export default AllEditors