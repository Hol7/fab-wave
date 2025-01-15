import React from "react";
import Image from "next/image";

export default function ServiceSection() {
  const services = [
    { id: 0, text: "Deposit & withdraw money for FREE", url: "/bank.png" },
    { id: 1, text: "Send money to anyone for only 1%", url: "/coins.png" },
    { id: 2, text: "Pay your bills for FREE", url: "/bulb.png" },
    { id: 3, text: "Buy airtime instantly", url: "/phone.png" },
    {
      id: 4,
      text: "Call our toll-free number for instant customer support",
      url: "/headset.png",
    },
    {
      id: 5,
      text: "Protect your money with our best-in-class securityE",
      url: "/shield.png",
    },
  ];

  return (
    <div className="bg-backgroundw z-20 flex justify-center  items-center absolute w-full h-full">
      <div className=" w-full text-left">
        <div className="w-full bg-red text-left px-44 font-black">
          <h3 className="text-[56px] text-bold text-textBleu">
            What you can do with Wave
          </h3>
        </div>
        <div className="grid grid-cols-3 gap-4 px-44 py-10 ">
          {services.map((sevice) => {
            return (
              <div
                className=" border bg-backgroundw shadow-sm drop-shadow-2xl transition duration-300  ease-in-out rounded-sm p-10 hover:cursor-pointer  hover:-translate-y-6 hover:scale-100"
                key={sevice.id}
              >
                <Image src={sevice.url} width={25} height={25} alt="" />
                <h4 className="text-textBleu text-left font-bold pt-4">
                  {sevice.text}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
