"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "we deliver your order whenever you are in OAU",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "the best food you can enjoy with your family",
    image: "/slide3.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentSlide((value) => (value === data.length -1 ? 0: value + 1)),
      2000
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" flex flex-col lg:flex-row h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] bg-fuchsia-50">
      {/* TEXT CONTAINER */}
      <div className="h-1/2 lg:w-1/2 lg:h-full flex items-center justify-center flex-col gap-8 text-red-500 font-bold">
        <h1 className="text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl">
          {data[currentSlide].title}
        </h1>
        <button className="bg-red-500 text-white py-4 px-8">order now </button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="w-full h-1/2 lg:w-1/2 lg:h-full relative">
        <Image src={data[currentSlide].image} alt="slide" fill />
      </div>
    </div>
  );
};

export default Slider;
