import { useState } from "react";
function App() {
  const [value,setValue]=useState(0);
  return (
  <div className="box">
    <div className="container">
      <h1>React counter</h1>
      <h2>{value}</h2>
      <button className="btn" onClick={()=>{setValue(value+1)}}>Inc</button>
      <button className="btn" onClick={()=>{setValue(value-1)}}>Dec</button>
      <button className="btn" onClick={()=>{setValue(0)}}>Reset</button>
    </div>
  </div> 
  );
}

export default App;
