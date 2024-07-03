"use client";
import React from 'react'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from './ui/separator';

function Navbar() {
    const data = [
        { key: 1, title: "Actions", description: "Automate any workflow" },
        { key: 2, title: "Packages", description: "Host and manage packages" },
        { key: 3, title: "Security", description: "Find and fix vulnerabilities" },
        { key: 4, title: "Codespaces", description: "Instant dev environments" },
        { key: 5, title: "GitHub Copilot", description: "Write better code with AI" },
        { key: 6, title: "Code review", description: "Manage code changes" },
        { key: 7, title: "Issues", description: "Plan and track work" },
        { key: 8, title: "Discussions", description: "Collaborate outside of code" }
    ];

    return (
        <nav className='absolute flex px-2 py-3 gap-4 text-xs w-full pr-6 '>
            <div className='ml-1'>
                <FaGithub size={36} />
            </div>
            <div className='flex justify-end items-center ' >
                <HoverCard openDelay={0} closeDelay={0}>
                    <HoverCardTrigger className='flex gap-[2px] cursor-pointer' >
                        Product
                        <MdOutlineKeyboardArrowDown className='mt-[3px]' color='#86888B' />

                    </HoverCardTrigger>
                    <HoverCardContent sideOffset={10} align='start' className='-ml-3 w-fit'>
                        <div className=' flex flex-row h-full gap-1 p-1'>
                            <div className='flex flex-col gap-4 border-solid border-r-[1px] pr-3'>
                                {data.map((ele) => {
                                    return (
                                        <div key={ele.key}>
                                            <div className='font-semibold'>
                                                {ele.title}
                                            </div>
                                            <div>
                                                {ele.description}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                            <div className='pl-3 '>
                                <div>Explore</div>
                            </div>

                        </div>

                    </HoverCardContent>
                </HoverCard>
            </div>
            <div className='flex justify-end items-center'>
                <HoverCard openDelay={0} closeDelay={0}>
                    <HoverCardTrigger className='flex gap-[2px]'>
                        Solutions
                        <MdOutlineKeyboardArrowDown className='mt-[3px]' color='#86888B' />

                    </HoverCardTrigger>
                    <HoverCardContent sideOffset={10} align='start' className='-ml-3'>
                        The React Framework - created and maintained by @vercel.
                    </HoverCardContent>
                </HoverCard>
            </div>
            <div className='flex justify-end items-center'>
                <HoverCard openDelay={0} closeDelay={0} >
                    <HoverCardTrigger className='flex gap-[2px]'>
                        Resources
                        <MdOutlineKeyboardArrowDown className='mt-[3px]' color='#86888B' />

                    </HoverCardTrigger>
                    <HoverCardContent sideOffset={10} align='start' className='-ml-3'>
                        The React Framework - created and maintained by @vercel.
                    </HoverCardContent>
                </HoverCard>
            </div>
            <div className='flex justify-end items-center'>
                <HoverCard openDelay={0} closeDelay={0} >
                    <HoverCardTrigger className='flex gap-[2px] whitespace-nowrap'>
                        Open Source
                        <MdOutlineKeyboardArrowDown className='mt-[3px]' color='#86888B' />

                    </HoverCardTrigger>
                    <HoverCardContent sideOffset={10} align='start' className='-ml-3'>
                        The React Framework - created and maintained by @vercel.
                    </HoverCardContent>
                </HoverCard>
            </div>

            <div className='flex justify-end items-center'>
                <HoverCard openDelay={0} closeDelay={0} >
                    <HoverCardTrigger className='flex gap-[2px]'>
                        Enterprise
                        <MdOutlineKeyboardArrowDown className='mt-[3px]' color='#86888B' />

                    </HoverCardTrigger>
                    <HoverCardContent sideOffset={10} align='start' className='-ml-3'>
                        The React Framework - created and maintained by @vercel.
                    </HoverCardContent>
                </HoverCard>
            </div>

            <div className='flex justify-end items-center w-full '>
                <div>
                    <Input
                        className='h-7 rounded-sm bg-white/10 backdrop-blur-sm text-xs  placeholder:text-white/80 border-[1px]'
                        placeholder='Search or jump to...'

                    />


                </div>



                <div>
                    <Button className='bg-transparent border-0 text-xs' >Sign In</Button>
                </div>
                <div>
                    <button className='bg-transparent border-[1px] border-solid border-white px-2 py-[6px] rounded-sm text-xs'>Sign Up</button>
                </div>

            </div>

        </nav >
    )
}

export default Navbar