import Image from 'next/image';
import React from 'react'

export default function HeroSection() {
  return (
    <div className="h-[650px] bg-backgroundHero flex  items-center   justify-center">
      <div className=" w-full text-white  grid gap-9  items-center justify-end ">
        <div className="gap-40">
          <h3 className="text-[64px] font-bold">Mobile money, </h3>
          <h3 className="text-[64px] mt-[-25px] font-bold">reinvented </h3>

          <p className="text-[24px] mt-8 font-bold">
            Deposit, withdraw, pay bills for free.<br/> Send for only 1%.
          </p>
        </div>

        <div className="flex w-full  gap-10 items-center">
          <div>
            <Image
              src="/google-play-badge.png"
              alt=" "
              width={250}
              height={200}
            />
          </div>
          <div>
            <Image
              src="/app-store-badge.svg"
              alt=" "
              width={250}
              height={200}
            />
          </div>
        </div>
      </div>
      <div className="flex pl-20  w-full  pt-20">
        <div
          className="bg-white border-lg rounded-lg rounded-b-none p-6 mt-28 "
          style={{ borderTopRightRadius: 40, borderTopLeftRadius: 40 }}
        >
          <Image
            src="/homepage.svg"
            alt=" "
            width={350}
            height={110}
            style={{ paddingTop: 5 }}
          />
        </div>
      </div>
    </div>
  );
}
