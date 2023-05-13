import React from "react";

function App() {

  var [list, setList]= React.useState(["My first task"]);
  var [item, setItem]= React.useState("");

  function handleClick(e){
    console.log(e);
    setList(prev => {
      return [...prev, item];
    });
    setItem("");

  }

  function handleChange(e){
    setItem(e.target.value);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={item} onChange={handleChange}/>
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map(element => <li>{element}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
