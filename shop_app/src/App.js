import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import { Routes} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div> 

      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;