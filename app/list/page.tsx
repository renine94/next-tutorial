import Image from "next/image";

export default function List() {
  let products: String[] = ["Tomatoes", "Pasta", "Coconut"];

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
