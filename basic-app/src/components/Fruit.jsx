export default function Fruit({ name, price, info, soldout }) {
  return (
    <>
    {/* {name} {price} {info} */}
    
    {price>20 ? <li>{name} {price} {info} {soldout ? "Sold_Out" : ""} </li> : ""}
  
  </>
  );
}
  