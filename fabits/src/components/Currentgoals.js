import React from "react";

function Currentgoals() {
  const paragraphs = [
    {
      plan: "Dhairyadev & Sayali’s Vacation Plan 1",
      GoalProgress: "₹ 11,24,00,000",
      GoalAmount: "₹ 15,00,00,000",
      GoalDate: "March 2035",
      src: "/Images/progress 1.png",
      GoalHealth: "Excellent",
      src1: "/Images/heart1.svg",
      Goaltrack: " Goal ahead by 16 months",
      height: "h-[448px]",
      healthcolor: "text-green-800",
    },
    {
      plan: "Dhairyadev & Sayali’s Vacation Plan 1",
      GoalProgress: "₹ 2,70,00,000",
      GoalAmount: "₹ 5,00,00,000",
      GoalDate: "Jan 2040",
      src: "/Images/progress2.png",
      GoalHealth: "Good",
      src1: "/Images/heart2.svg",
      Goaltrack: "On track",
      height: "h-[448px]",
      healthcolor: "text-green-500",
    },
    {
      plan: "Dhairyadev & Sayali’s Vacation Plan 1",
      GoalProgress: "₹ 42,00,000",
      GoalAmount: "₹ 1,00,00,000",
      GoalDate: "March 2035",
      src: "./Images/progress3.png",
      GoalHealth: "Weak",
      src1: "/Images/heart3.svg",
      Goaltrack: "Goal behind by 2 months",
      boast: true,
      height: "h-[448px]",
      healthcolor: "text-yellow-600",
    },
    {
      plan: "Dhairyadev & Sayali’s Vacation Plan 1",
      GoalProgress: "₹ 11,24,00,000",
      GoalAmount: "₹ 15,00,00,000",
      GoalDate: "March 2035",
      src: "/Images/progress4.png",
      GoalHealth: "Poor",
      src1: "/Images/heart4.svg",
      Goaltrack: " Goal behind by 18 months",
      height: "h-[368px]",
      healthcolor: "text-red-500",
    },
    {
      plan: "Dhairyadev & Sayali’s Vacation Plan 1",
      GoalProgress: "₹ 11,24,00,000",
      GoalAmount: "₹ 15,00,00,000",
      GoalDate: "March 2035",
      src: "/Images/progress5.png",
      GoalHealth: "Excellent",
      Goalreach: true,
      Goaltrack: "Goal reached 3 months ahead",
      height: "h-[368px]",
    },
  ];

  return (
    <div className="grid grid-cols-3 ">
      {paragraphs.map((paragraph, index) => (
        <div
          key={index}
          className={`w-[336px] ${paragraph.height} border rounded-3xl border-gray-300 m-3`}
        >
          <div className="h-80 w-72 absolute m-6 ">
            <div className="w-[288px] h-[228px]">
              <div className="flex gap-[16px] w-[288px] h-[72px]">
                <div className="w-[72px] h-[72px] bg-gray-300  rounded-md"></div>
                <p className="w-[200px] h-[72px] text-xl font-semibold">
                  {paragraph.plan}
                </p>
              </div>
              <hr className="my-4"></hr>
              <div className="grid grid-cols-2 w-288 h-108 gap-x-16 gap-y-3">
                <div className="flex flex-col">
                  <p class="w-91  text-sm text-gray-600 mb-1">Goal Progress</p>
                  <p className="w-120  text-gray-900 text-base font-semibold">
                    {paragraph.GoalProgress}
                  </p>
                </div>
                <div className="flex flex-col">
                  <p class="w-91  text-sm text-gray-600 mb-1">Goal Amount</p>
                  <p className="w-120 text-gray-900 text-base font-semibold">
                    {paragraph.GoalAmount}
                  </p>
                </div>
                <div className="flex flex-col">
                  <p class="w-91  text-sm text-gray-600 mb-1">Goal Date</p>
                  <p className="w-120  text-gray-900 text-base font-semibold">
                    {paragraph.GoalDate}
                  </p>
                </div>
                <div className="flex flex-col">
                  <p class="w-91  text-sm text-gray-600 mb-1">Goal Health</p>
                  {paragraph.Goalreach ? (
                    <div className="text-gray-900 text-base font-semibold">
                      {paragraph.GoalHealth}
                    </div>
                  ) : (
                    <div className="flex gap-1">
                      <div className="flex justify-center items-center">
                        <img
                          src={paragraph.src1}
                          alt="Goal health"
                          className="w-5 h-5"
                        />
                      </div>
                      <p
                        className={`${paragraph.healthcolor} w-120 text-gray-900 text-base`}
                      >
                        {paragraph.GoalHealth}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <hr className="my-3"></hr>
            <div className="flex flex-col">
              <img src={paragraph.src} alt="Goal track" />
              <p className="w-120  text-gray-900">{paragraph.Goaltrack} </p>
              {paragraph.boast && (
                <div className="">
                  <p className="flex  justify-center w-120  rounded-md py-0.5 text-yellow-700 bg-yellow-100 my-4">
                    Boost to reach your goal sooner!
                  </p>
                  <p className="flex  justify-center w-120 filter-color py-2 rounded-md border border-solid border-gray-300">
                    Boost
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Currentgoals;
