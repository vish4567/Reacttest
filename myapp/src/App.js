import "./App.css";
import { Routes, Route } from "react-router-dom";
import Usereducer from "./Components/Usereducer";


import Homepage from "./Components/Homepage";
import Todolist from "./Components/Todolist";
import Login from "./Components/Login";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/homepage" element={<Homepage />} />

        <Route exact path="/usereducer" element={<Usereducer />} />
        <Route exact path="/todo" element={<Todolist />} />
        <Route exact path="/login" element={<Login/>}/>
     
      </Routes>
    </div>
  );
}

export default App;
