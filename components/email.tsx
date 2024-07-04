import React from 'react'
import { Separator } from './ui/separator'
import { Input } from './ui/input'
function EmailComponent() {
    return (
        <>

            <div className="flex z-[99]">
                <Input
                    placeholder="Email Address"
                    className="bg-white w-64 h-10 rounded-l-sm rounded-r-none"
                />
                <div className="flex gap-4">
                    <button className="px-5 py-2 bg-violet-600 h-10 rounded-r-sm font-semibold text-sm">
                        Sign Up for Github

                    </button>
                    <Separator orientation="vertical" />

                    <button className="py-1 px-5 h-10 font-semibold text-sm rounded-md border-solid border-[2px] border-violet-400">
                        Start a free enterprise trial
                    </button>


                </div>
            </div>
        </>
    )
}

export default EmailComponent