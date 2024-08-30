export default function Message() {
    function handleClick(){
        console.log("the button clicked")
    }
  return (
    <div>
      <button  onClick={handleClick}>Click me</button>
    </div>
  );
}
