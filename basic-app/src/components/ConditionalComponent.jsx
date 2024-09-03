import Code from "./Code";
import Welcome from "./Welcome";

export default function ConditionComponent() {
  /*condtion self component
this is not  a best prectise since each component must have a single return type now
Lets try another way .. Using element variable that allow the storage of html components inside them
  const display = false;
  if (display) {
    return (
      <Code />
    );
  } else {
    return (
     <Welcome />
    );
  }

  //now this is element variable
  let message;
  const display = false;
  if(display){
    message = <h1>This is message 1</h1>
  } else(
    message = <h2>This is message 2</h2>
  )

  return message;
  */
//now using ternary operator
  
  const display = false;

  return display ? <Code/>: <Welcome /> ;

}
 