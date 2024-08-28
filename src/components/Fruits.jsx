export default function Fruits() {
  //const fruits = ["apple", "banan", "tinga", "mimikatiz"];

  const fruits = [
    {name:'apple', price:58 ,info:'good condition'},
    {name:'mango', price: 50 ,info:'good condition'},
    {name:'water water', price: 15 ,info:'good condition'}
  ]
  return (
    <div>
    <ul>
      {fruits.map(fruit=><li key={fruit.name}>{fruit.name} ${fruit.price} {fruit.info}</li>)}
    </ul>
    </div>
  );
}
