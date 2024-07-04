import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import Image from 'next/image'
function VideoAnimation() {
    const monaRef = useRef(null)
    const starRef = useRef(null)
    const diamondRef = useRef(null)
    const orbRef = useRef(null)
    const copilotRef = useRef(null)
    useGSAP(() => {
        gsap.to(monaRef.current, {
            repeat: -1,
            rotateZ: 10,
            translateY: -20,
            duration: 4,
            yoyo: true,
            ease: "none"
        })
        gsap.to(copilotRef.current, {
            repeat: -1,
            rotateZ: -10,
            translateY: 20,
            duration: 4,
            yoyo: true,
            ease: "none"
        })
        gsap.to(starRef.current, {
            repeat: -1,
            rotateZ: 360,

            duration: 25,
            yoyo: true,
            ease: "none"
        })
        gsap.to(diamondRef.current, {
            repeat: -1,
            rotateZ: 360,

            duration: 25,
            yoyo: true,
            ease: "none"
        })
        gsap.to(orbRef.current, {
            repeat: -1,

            translateY: 10,
            duration: 4,
            yoyo: true,
            ease: "none"
        })

    })
    return (
        <div className="h-full bg-[#040E1E]  -z-[999]">
            <div className="container-xl max-w-[1280px] ml-auto mr-auto relative  ">
                <div className='w-full flex justify-center relative'>
                    <div>
                        <video
                            src="/globe-900.h264-975e7b5ac572.mp4"
                            autoPlay
                            muted
                            loop
                            className="w-[900px] h-[900px]"
                        ></video>
                    </div>


                </div>
                <div ref={monaRef} className='absolute top-[55%] left-[60%]'>
                    <Image
                        src={"/footer-mona-d1c861cd8018.png"}
                        alt="Image"
                        width={0}
                        height={0}
                        sizes='100vw'
                        className='h-auto w-[180px] '
                    />

                </div>
                <div ref={copilotRef} className='absolute top-[30%] left-[15%]'>
                    <Image
                        src={"/footer-copilot-54114bfd1d20.png"}
                        alt="Image"
                        width={0}
                        height={0}
                        sizes='100vw'
                        className='h-auto w-[140px] '
                    />

                </div>
                <div ref={starRef} className='absolute top-[50%] left-[11%]'>
                    <Image
                        src={"/footer-star-36e5b5724973.png"}
                        alt="Image"
                        width={0}
                        height={0}
                        sizes='100vw'
                        className='h-auto w-[50px] '
                    />

                </div>
                <div ref={diamondRef} className='absolute top-[20%] left-[72%]'>
                    <Image
                        src={"/footer-diamond-ed642fc95144.png"}
                        alt="Image"
                        width={0}
                        height={0}
                        sizes='100vw'
                        className='h-auto w-[50px] '
                    />

                </div>
                <div ref={orbRef} className='absolute top-[30%] left-[80%]'>
                    <Image
                        src={"/footer-orb-a0438104a7a2.png"}
                        alt="Image"
                        width={0}
                        height={0}
                        sizes='100vw'
                        className='h-auto w-[80px] '
                    />

                </div>

            </div>
        </div>

    )
}

export default VideoAnimation