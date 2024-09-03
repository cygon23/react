import Fruit from "./Fruit"; 
export default function Fruits() {
  //const fruits = ["apple", "banan", "tinga", "mimikatiz"];

  const fruits = [
    {name:'apple', price:58 ,info:'good condition',soldout:false},
    {name:'mango', price: 30 ,info:'good condition',soldout:true},
    {name:'water water', price: 45 ,info:'good condition',soldout:false},
    {name:'watermelon', price: 18 ,info:'good condition',soldout:true},
    {name:'sugar cane', price: 15 ,info:'good condition',soldout:false}
  ]
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit key={fruit.name}  name={fruit.name} price={fruit.price} info={fruit.info} soldout={fruit.soldout} />
        ))}
      </ul>
    </div>
  );
}
 