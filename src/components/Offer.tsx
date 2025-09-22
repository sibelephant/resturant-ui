import Image from "next/image";
import CountDown from "./CountDown";

const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:h-[70vh] md:bg-[url('/offerBg.png')] md:bg-cover md:bg-center">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex flex-col justify-center items-center gap-8 p-6">
        <h1 className="text-white text-5xl font-bold xl:text-6xl">
          Delicious Burger & French Fries
        </h1>
        <p className="text-white xl:text-xl">
          Get the best flavours in the whole school which is just an Order away
        </p>
        <CountDown />
        <button className="cursor-pointer bg-red-500 text-white rounded-md py-3 px-6">
          order now
        </button>
      </div>

      {/* IMAGE CONTAINER */}

      <div className="flex-1 w-full relative md:h-full ">
        <Image src="/offerProduct.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Offer;
