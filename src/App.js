import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Logo /> */}
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
