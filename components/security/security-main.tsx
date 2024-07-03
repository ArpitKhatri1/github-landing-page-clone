import React from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import { GoLock } from "react-icons/go";
gsap.registerPlugin(ScrollTrigger);
function SecurityMain() {
    const line1 = useRef(null);
    const lockIcon = useRef(null);
    const line2 = useRef(null);
    const appLine = useRef(null)
    const mainContent = useRef(null)

    const timeline = useRef<GSAPTimeline>(
        gsap.timeline({
            defaults: {
                ease: "back.out",
            },
            scrollTrigger: {
                trigger: mainContent.current,

                start: "0% center"
            },
        })
    );

    const tl = timeline.current;

    useGSAP(() => {
        tl.from(line1.current, {
            scaleY: 0,
            duration: 0.5,
            ease: "power1.out",
            transformOrigin: "top center",
        })
            .from(lockIcon.current, { opacity: 0, duration: 0.2, ease: "power1.out" })
            .from(appLine.current, { translateX: -40, opacity: 0, duration: 0.4 })
            .from(mainContent.current, { translateX: -40, opacity: 0, duration: 0.4 })
            .from(line2.current, {
                scaleY: 0,
                duration: 0.7,
                ease: "power1.out",
                transformOrigin: "top center",
            }, "-=0.5");
    });
    return (
        <>
            <div className="w-1/12 flex flex-col justify-center items-center relative">
                <div className="w-[3px] h-[57%]  mx-auto mt-1">
                    <div ref={line1} className="gradient-5 w-full h-full"></div>
                </div>
                <div ref={lockIcon} className="p-5 relative">
                    <GoLock size={25} className="z-50 " />
                    <div className="bg-[#33B3AE] absolute mt-2 blur-[20px] w-6 h-6 flex top-3"></div>
                </div>
                <div
                    ref={line2}
                    className="w-[3px] bg-white h-full gradient-6 mx-auto mt-1"
                ></div>
            </div>
            <div className="pt-40 pb-24">
                <div className="text-xl" ref={appLine}>Application Security</div>
                <div className="space-y-1" ref={mainContent}>
                    <div className="text-teal-500  text-5xl mt-4 ">
                        Empower developers
                    </div>
                    <div className="text-5xl">With GitHub, you can secure</div>

                    <div className="text-5xl">code in minutes.</div>
                </div>
            </div>
        </>
    )
}

export default SecurityMain