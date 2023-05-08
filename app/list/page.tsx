"use client";

import Image from "next/image";
import { useState } from "react";

export default function List() {
  let products: String[] = ["Tomatoes", "Pasta", "Coconut"];
  let [quantity, setQuantity] = useState(Array(products.length).fill(0));

  let productCards = products.map((product, i) => {
    return (
      <div className="food" key={i}>
        <Image
          src={`/food${i}.png`}
          alt="help text"
          className="food-img"
          width={100}
          height={100}
        />
        <h4>{product} $40</h4>
        <span> {quantity[i]} </span>
        <button
          onClick={() => {
            quantity[i] += 1;
            setQuantity([...quantity]);
          }}
        >
          +
        </button>
      </div>
    );
  });

  return (
    <div>
      <h4 className="title">상품목록</h4>
      {productCards}
    </div>
  );
}
