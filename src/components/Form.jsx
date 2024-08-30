import { useState } from "react";

export default function Form() {
  //instead of accepting one value now lets accept the mulple as object
  const [name, setName] = useState({ firstName: "", secondName: "" });
  function handleSubmition(e) {
    e.preventDefault();
  }

  //use of spread operator ...name used to take the any available value in useStae name
  return (
    <div>
      {name.firstName} - {name.secondName}
      <form>
        <input
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          type="text"
          value={name.firstName}
        />
        <input
          onChange={(e) => setName({ ...name, secondName: e.target.value })}
          type="text"
          value={name.secondName}
        />
        <button onClick={(e) => handleSubmition(e)}>Add</button>
      </form>
    </div>
  );
}

/*first method
  since the function now way that is being used now
   onChange={function demo(e) {
   handleChange(e);
  }}
 

  to get rid of the code we can simply remove function 
  by passwing the data diractly this was code with that function
   function handleChange(e) {
    setName(e.target.value);
  }
  return (
    <div>
      <form>
        <input onChange={(e) => handleChange(e)} type="text" value={name} />
      </form>
    </div>
  );
}

*****************
for single input this code is actually right but i colud hard to mange if all space could be filled with useState
as
 const [name, setName] = useState("");
 const [lastName,setLastName] = useState("");

  <input onChange={(e) => setName(e.target.value)} type="text" value={name} />
  <input onChange={(e) => setLastName(e.target.value)} type="text" value={lastName} />

  */
