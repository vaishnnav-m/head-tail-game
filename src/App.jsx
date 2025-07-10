import Home from "./pages/Home";
import About from "./pages/About";
import HeadTail from "./pages/HeadTail";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/head-tail" element={<HeadTail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
