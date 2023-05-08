function Banner(props: any) {
  let name = props.name || "삼성카드";
  return <h4>{name} 행사중</h4>;
}

export default Banner;
