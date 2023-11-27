import "./App.css";
import Create from "./Components/Create";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Read from "./Components/Read";
function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>
        This is React Crud Application
      </h1>
      <BrowserRouter>
        <div className="routes">
          <Routes>
            <Route exact path="/" element={<Create />}></Route>
            <Route exact path="/read" element={<Read />}></Route>
            <Route exact path="/" element={<Create />}></Route>
            <Route exact path="/" element={<Create />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
