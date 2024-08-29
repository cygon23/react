import Hellow from "./components/hellow";
import Fruits from "./components/Fruits";
import ConditionComponent from "./components/ConditionalComponent";

function App() {
  //using object instead of individual
  // const person = {
  //   name:"kymah ",
  //   message:"i love food ",
  //   info:"meet ",
  //   seatNumber:[1,1,1,3]
  // };
  return (
    <div className="App">
      <Fruits />
      {/* <ConditionComponent /> */}
    </div>
  );
}

export default App;
