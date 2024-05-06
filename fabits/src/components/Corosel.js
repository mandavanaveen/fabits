import React from "react";
import "../App.css";

function Corosel({ margin, width }) {
  const details = [
    {
      Coricon: "./Images/Coricon1.png",
      maintheme: "Retirement",
      paraline: "Your old age, taken care of",
    },
    {
      Coricon: "./Images/Coricon2.png",
      maintheme: "Emergency",
      paraline: "Be prepared at all times",
    },
    {
      Coricon: "./Images/Coricon3.png",
      maintheme: "Wedding",
      paraline: "Plan your dream wedding today",
    },
    {
      Coricon: "./Images/Coricon4.png",
      maintheme: "Vacation",
      paraline: "Never too late for the Bahamas!",
    },
    {
      Coricon: "./Images/Coricon5.png",
      maintheme: "Education",
      paraline: "Build your career, tension-free",
    },
    {
      Coricon: "./Images/Coricon6.png",
      maintheme: "Education",
      paraline: "Build your career, tension-free",
    },
    {
      Coricon: "./Images/Coricon7.png",
      maintheme: "Education",
      paraline: "Build your career, tension-free",
    },
  ];

  return (
    <div
      className={`absolute m-[${margin}px] w-[${width}px] h-40 mt-8 mb-8 flex ml-[319px] gap-4`}
    >
      {details.map((details, index) => (
        <div key={index} className="w-40 h-40 flex flex-col gap-4">
          <div className="iconbg w-12 h-12 mt-4 ml-4 rounded-full flex justify-center items-center">
            <img className="" alt="Corosel Icon" src={details.Coricon}></img>
          </div>
          <div className="flex flex-col w-32 h-16  gap-0 ml-4 mr-4">
            <h1 className="w-[82px] h-6 font-semibold text-base">
              {details.maintheme}
            </h1>
            <p className="w-32 h-10 font-normal text-sm text-gray-700">
              {details.paraline}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Corosel;
