import React from "react";
import Image from "next/image";
import { FaRegCircleDot } from "react-icons/fa6";
import { Input } from "../ui/input";
import { PiBracketsAngleBold } from "react-icons/pi";
import { Separator } from "@/components/ui/separator"
import Navbar from "../navbar";
import EmailComponent from "../email";


function HeroSection() {


  return (
    <div className="relative h-full ">
      <Navbar />
      <Image
        src="/hero-desktop-a38b0fd77b6c.jpg"
        alt="heroimage"
        width={0}
        height={0}
        sizes="100vw"
        className="absolute -z-10 left-[62%] h-auto w-[1160px] "
        priority
      />

      <div className="container-xl max-w-[1280px] ml-auto mr-auto ">
        <div className="pt-44 h-full flex">
          <div className="w-1/12 flex flex-col justify-center items-center ">
            <div className="h-full space-y-2 flex flex-col items-center">
              <div>
                <FaRegCircleDot />
              </div>
              <div className="w-[3px] bg-white h-[47%] gradient-1 mx-auto"></div>
              <div className="p-2 relative">
                <PiBracketsAngleBold
                  size={25}
                  className="z-50"
                />
                <div className="bg-violet-500 absolute mt-2 blur-[20px] w-6 h-6 flex top-0"></div>
              </div>


              <div className="w-[3px] bg-white h-[70%] gradient-2 mx-auto mt-1"></div>
            </div>
          </div>
          <div>
            <div className="text-7xl font-semibold ">Let’s build from here</div>
            <div className="text-gray-500 text-xl mt-3 mb-20">
              The world’s leading AI-powered developer platform.
            </div>
            <div className="flex">
              <Input
                placeholder="Email Address"
                className="bg-white w-64 h-10 rounded-l-sm rounded-r-none"
              />
              <div className="flex gap-4">
                <EmailComponent />


              </div>
            </div>
            <div className="pt-16 pb-24 space-y-4">
              <div className="text-gray-500 text-lg">
                Trusted by the world’s leading organizations
              </div>
              <div className="flex gap-16">
                <Image
                  src={"/3m-0151c2fda0ce.svg"}
                  alt="img"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-auto w-[75px]"
                />
                <Image
                  src={"/kpmg-c249f20c5173.svg"}
                  alt="img"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-auto w-[105px]"
                />
                <Image
                  src={"/mercedes-fcf97d2d6ec4.svg"}
                  alt="img"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-auto w-[195px]"
                />
                <Image
                  src={"/pg-f1f19955c4e4.svg"}
                  alt="img"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-auto w-[75px]"
                />
                <Image
                  src={"/sap-96248a56d312.svg"}
                  alt="img"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-auto w-[75px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
