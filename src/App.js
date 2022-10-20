import React from 'react'
import Home from "./Components/Home/Home";
import Store from "./Components/Store/Store";
import { Routes, Route } from 'react-router-dom'
import Iphone from "./Components/Iphone/Iphone";
import Watches from "./Components/Watches/Watches";
import Macbook from "./Components/Macbook/Macbook";
import Headfones from "./Components/Headfones/Headfones";
import Cart from "./Components/Cart/Cart";




function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="/ipad" element={<Watches />} />
        <Route path="/macbook" element={<Macbook />} />
        <Route path="/accessories" element={<Headfones />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>

    </>
  );
}

export default App;
