import { useState } from "react";
import { data } from "./data";
import AppShop from "./Script";
import './App.css'; 
import Buttons from "./Button";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import About from "./About";
import Home from "./Home";
import Shop from "./Shop";
import TeemComp from "./Teem";
import ContatUs from "./Contact";




function App() {

const [shoping, setShpoing] = useState(data);

  const chosenClothes = (searchTerm) => {
  const newClothes = data.filter(element => element.searchTerm === searchTerm);
  setShpoing(newClothes);
}

return <Router>
  <div>

   <nav>
    <Link to="/about" className="link">About</Link>
    <Link to="/home" className="link">Home</Link>
    <Link to="/" className="link">Shop</Link>
    <Link to="/teem" className="link">Teem</Link>
    <Link to="contact" className="link">Contact Us</Link>
   </nav>
   
   <Routes >
    <Route path="/about" element={<About/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/shop" element={<Shop/>}/>
    <Route path="/teem" element={<TeemComp/>}/>
    <Route path="contact" element={<ContatUs />}/>
   </Routes>

    <div className="cont">
      <h2 className="back">Free Standar Shoping</h2>
    </div>
    <Buttons filterProps={chosenClothes} />
    <AppShop newShopUseS={shoping}  />
  </div>
  </Router>
}

export default App;