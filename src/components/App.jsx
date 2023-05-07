import React from "react";

function App() {

  var [buttonColor, setButtonColor]= React.useState("white");

  function handleMouseOut(){
    setButtonColor("white");
  }

  function handleMouseOver(){
    setButtonColor("black");
  }

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{backgroundColor:buttonColor}} onMouseOut={handleMouseOut} onMouseOver={handleMouseOver}>Submit</button>
    </div>
  );
}

export default App;
