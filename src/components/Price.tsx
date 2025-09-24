"use client";

import { useState, useEffect } from "react";

interface PriceInterface {
  price: number;
  options?:
    | {
        title: string;
        additionalPrice: number;
      }[];
  img?: string;
  desc?: string;
}

const Price = ({ price, options }: PriceInterface) => {
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setTotal(
      quantity *
        (options && options.length > 0 && selected < options.length
          ? price + options[selected].additionalPrice
          : price)
    );
  }, [quantity, selected, options, price]);

  return (
    <div className="flex  flex-col gap-4">
      <h2 className="font-bold text-2xl">${total.toFixed(2)}</h2>
      {/* OPTIONS CONTAINER  */}
      <div className="flex gap-4">
        {options?.map((option, index) => (
          <button
            key={option.title}
            className="min-w-[6rem] p-2 ring-1 ring-red-400 rounded-md"
            style={{
              background: selected === index ? "rgb(248 113 113" : "white",
              color: selected === index ? "white" : "red",
            }}
            onClick={() => setSelected(index)}
          >
            {option.title}
          </button>
        ))}
      </div>
      {/* QUANTITY AND ADD BUTTON CONTAINER  */}
      <div className="flex justify-between items-center">
        {/* QUANTITY */}
        <div className="flex justify-between w-full p-3 ring-1 ring-red-500">
          <span>Quantity</span>
          <div className="flex gap-4 items-center">
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              {"<"}
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
            >
              {">"}
            </button>
          </div>
        </div>
        {/* CART BUTTON */}
        <button className="uppercase bg-red-500 text-white ring-1 ring-red-500 p-3 rounded-md">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Price;
