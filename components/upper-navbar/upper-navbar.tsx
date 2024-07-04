import React from "react";

function UpperNavbar() {
    return (
        <div className="fixed top-0 left-0 w-full h-14 bg-[#0D1117] flex gap-5 items-center px-5 text-sm drop-shadow-[0_4px_4px_rgba(0,0,0,0.85)]">
            <div>
                <a href="#productivity">Productivity</a>
            </div>
            <div>
                <a href="#security">Security</a>
            </div>

        </div>
    );
}

export default UpperNavbar;
