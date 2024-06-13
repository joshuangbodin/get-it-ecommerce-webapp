
import "./App.css"
import { Route, Routes } from 'react-router-dom';
import Store from "./pages/store/Store";
import Jewellry from './pages/Jewellry/Jewellry';
import Watche from './pages/watches/Watche';
import Shoes from './pages/Shoes/Shoes';
import NavBar from './components/NavBar/NavBar';
import Gadget from "./pages/gadget/Gadget";
import Drinks from "./pages/drinks/Drinks";
import { cartContext, cartDataList, itemContext } from "./components/context/cartContext";
import {useState } from "react";
import React from "react";
import Cart from "./components/cart";


interface Props{

}

const App = ({}: Props) => {
  const [showCart, setShowCart] = useState<boolean | any>(false)
  const [Cartlist , setCartlist] = useState<cartDataList>({data:[] , length:0});


 
  return (
    <React.Fragment>
      <cartContext.Provider value={[showCart, setShowCart]}>
        <itemContext.Provider value={[Cartlist, setCartlist]}>
        <NavBar/>
        <Cart/>
        <Routes>
          <Route path="/" element = {<Store/>}></Route>
          <Route path="/jewellry" element = {<Jewellry/>}></Route>
          <Route path="/watches" element = {<Watche/>}></Route>
          <Route path="/shoes" element = {<Shoes/>}></Route>
          <Route path="/gadget" element = {<Gadget/>}></Route>
          <Route path="/drinks" element = {<Drinks/>}></Route> /  
        </Routes>
        </itemContext.Provider>
        </cartContext.Provider>
    </React.Fragment>
  )
}

export default App