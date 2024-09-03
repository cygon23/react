import Hellow from "./components/hellow";
import Fruits from "./components/Fruits";
import ConditionComponent from "./components/ConditionalComponent";
import Message from "./components/Message";
import Counter from "./components/Counter";
import Form from "./components/Form";

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
      <Form/>
      {/* <Counter/> */}
      {/* <Message /> */}
      {/* <Fruits /> */}
      {/* <ConditionComponent /> */}
    </div>
  );
}

export default App;
