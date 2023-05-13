import React from "react";

function App() {

  var [buttonColor, setButtonColor]= React.useState("white");
  var [name, setName]= React.useState("");
  var [submittedName, setSubmittedName]= React.useState("");

  function handleMouseOut(){
    setButtonColor("white");
  }

  function handleMouseOver(){
    setButtonColor("black");
  }

  function handleChange(event){
    setName(event.target.value);
  }

  function handleClick(){
    setSubmittedName(name);
  }


  return (
    <div className="container">
      <h1>Hello {submittedName}</h1>
      <input type="text" placeholder="What's your name?" value={name} onChange={handleChange}/>
      <button style={{backgroundColor:buttonColor}} onMouseOut={handleMouseOut} onMouseOver={handleMouseOver} onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
