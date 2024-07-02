import React from 'react'
import { Separator } from './ui/separator'
function EmailComponent() {
    return (
        <>

            <button className="px-5 py-2 bg-violet-600 h-10 rounded-r-sm font-semibold text-sm">
                Sign Up for Github

            </button>
            <Separator orientation="vertical" />

            <button className="py-1 px-5 h-10 font-semibold text-sm rounded-md border-solid border-[2px] border-violet-400">
                Start a free enterprise trial
            </button>
        </>
    )
}

export default EmailComponent