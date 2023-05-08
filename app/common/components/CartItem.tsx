function CartItem(props: any) {
  let name = props.name || "default name";

  return (
    <div className="cart-item">
      <p>상품명1 {name}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}

export default CartItem;
