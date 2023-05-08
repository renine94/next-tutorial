import CartItem from "../common/components/CartItem";
import Banner from "../common/components/banners/Banner";
import 작명 from "./data";

export default function Cart() {
  return (
    <div>
      <h4 className="title">Cart</h4>
      <h5> {작명} </h5>
      <CartItem />
      <Banner />
      <Banner name="롯데카드" />
    </div>
  );
}
