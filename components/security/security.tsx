"use client";
import React from 'react'
import HoverCard from '../hover-card'
import { GoLock } from "react-icons/go";
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger)
function Security() {
  const line1 = useRef(null)
  const lockIcon = useRef(null)
  const line2 = useRef(null)

  // const timeline = useRef<GSAPTimeline>(
  //   gsap.timeline({
  //     defaults: {
  //       ease: 'back.out',
  //     }, scrollTrigger: {
  //       trigger: line1.current,
  //       markers: true
  //     }
  //   })
  // )

  // const tl = timeline.current

  // useGSAP(() => {

  //   tl.from(line1.current, { scaleY: 0, duration: 0.5, ease: "power1.out", transformOrigin: "top center" })
  //     .from(lockIcon.current, { opacity: 0, duration: 0.2, ease: "power1.out" })
  //     .from(line2.current, { scaleY: 0, duration: 0.5, ease: "power1.out", transformOrigin: "top center" })




  // })
  return (
    <div className="relative h-full ">
      <div className="container-xl max-w-[1280px] ml-auto mr-auto ">
        <div className="flex relative">
          <div className="w-1/12 flex flex-col justify-center items-center relative">
            <div className="w-[3px] h-[57%]  mx-auto mt-1">
              <div ref={line1} className='gradient-5 w-full h-full'></div>
            </div>
            <div ref={lockIcon} className="p-5 relative">
              <GoLock size={25} className="z-50 " />
              <div className="bg-[#33B3AE] absolute mt-2 blur-[20px] w-6 h-6 flex top-3"></div>
            </div>
            <div ref={line2} className="w-[3px] bg-white h-full gradient-6 mx-auto mt-1"></div>
          </div>
          <div className='pt-40 pb-24'>
            <div className='text-xl'>
              Application Security
            </div>
            <div className='space-y-1'>

              <div className='text-teal-500  text-5xl mt-4'>
                Empower developers
              </div>
              <div className='text-5xl'>
                With GitHub, you can secure
              </div>

              <div className='text-5xl'>
                code in minutes.
              </div>
            </div>
          </div>
        </div>
        <div className='h-[480px] w-auto relative pb-10'>
          <Image
            alt="image"
            src={"/shape-2-f30dcc9bd35c.svg"}
            height={0}
            width={0}
            sizes='100vw'
            className='h-auto w-[740px] absolute bottom-[10%] right-[-20%]'
          />
          <HoverCard className='p-14 h-full'>
            <div className='text-xs text-neutral-400'>
              <div>cmake.yml</div>
              <div className='text-[11px]'>
                on: push
              </div>
            </div>
            <div className='flex h-full w-full justify-center items-center relative '>
              <div className='h-fit w-[450px] '>
                <div className='absolute top-[23%]'>


                  <div className='bg-[#41474E] h-fit w-[450px] rounded-lg relative'>
                    <div className='py-4 flex px-4 items-center'>

                      <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" className="text-green-500 fill-current mr-2 ">
                        <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z"></path>
                      </svg>
                      Build
                      <div className='ml-auto text-xs text-neutral-400'>
                        1m 21s
                      </div>
                    </div>
                    <div >
                      <div className='h-[13px] w-[13px] bg-neutral-500 border-solid border-[2px] border-[#41474E] rounded-full absolute right-[-1%] top-[40%]'></div>
                      <div className='h-[4px] w-[50px]  bg-white absolute right-[-12%] top-[46%]'></div>
                      <div className='h-[13px] z-[10] w-[13px] bg-neutral-500 border-solid border-[2px] border-[#41474E] rounded-full absolute right-[-14%] top-[40%]'></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='relative'>
                <div className='absolute text-sm p-2 top-[-23%] left-[55px] rounded-t-md px-4 bg-[#41474E]'>
                  Steps
                </div>
                <div className='ml-11 w-[450px] text-sm bg-[#41474E] h-fit rounded-r-lg rounded-bl-lg '>

                  <div className='py-4 flex px-4 items-center'>

                    <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" className="text-green-500 fill-current mr-2 ">
                      <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z"></path>
                    </svg>
                    Initialize CodeQL
                    <div className='ml-auto text-xs text-neutral-400'>
                      1m 42s
                    </div>

                  </div>
                  <div className='py-4 flex px-4 items-center'>

                    <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" className="text-green-500 fill-current mr-2 ">
                      <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z"></path>
                    </svg>
                    Autobuild
                    <div className='ml-auto text-xs text-neutral-400'>
                      1m 24s
                    </div>

                  </div>
                  <div className='py-4 flex px-4 items-center'>

                    <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" className="text-green-500 fill-current mr-2 ">
                      <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z"></path>
                    </svg>
                    Perform CodeQL Analyses
                    <div className='ml-auto text-xs text-neutral-400'>
                      1m 36s
                    </div>

                  </div>

                </div>
              </div>


            </div>

          </HoverCard>

        </div>
      </div >
    </div >
  )
}

export default Security