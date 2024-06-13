import { Link } from "react-router-dom";

import "./NavBar.css";
import { Contact2Icon, ShoppingCartIcon } from "lucide-react";
import React, { useContext, } from "react";
import { cartContext, itemContext } from "../context/cartContext";
interface Props {}

const NavBar = ({}: Props) => {
  const [showCart, setShowCart] = useContext<boolean | any>(cartContext)
  
  const [Cartlist ] = useContext(itemContext);






  const ShowCartHandler = () =>{
    setShowCart(!showCart)
  }

  return (
    <React.Fragment>
    <nav className="topNavBar">
      <Link className="links" to={"/"}>
        <h3 className="logo">Get It!</h3>
      </Link>

      <div className="btncarrier">
        <span className="carticon">
          <Contact2Icon className="cartlinks" />
        </span>{" "}
        <span className="carticon" onClick={ShowCartHandler}>
          {showCart?<p className=" text-xl font-bold text-[#ff1c1c]">X</p> :<ShoppingCartIcon className="cartlinks"  />}
          {showCart? null: <span className="count">{Cartlist.data.length }</span>}
        </span>{" "}
      </div>
    </nav>
    </React.Fragment>
  );
};

export default React.memo(NavBar);
