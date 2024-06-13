import { useContext, useState } from "react";
import { formatCurrency } from "../../Utilities/utilitiesFxn";
import {  cartData, itemContext } from "../context/cartContext";


interface Props {
  imgURL: string;
  name: string;
  description: string;
  price: number;
}

const Card = ({ imgURL, description, name, price }: Props) => {
  const [Cartlist, setCartlist] = useContext(itemContext);
  const [quantity, setQuantity] = useState<number>(1);
  

  const addnewitem = () => {
    var t: boolean = true;
    Cartlist.data.forEach((ata: cartData) => {
      if (ata.name !== name) {
        console.log("doesnt exist");
      } else {
        t = false;
        alert(" The Item is already in the Cart!");
        
      }
    });
    var igt: cartData = {
      name: name,
      imgUrl: imgURL,
      price: price,
      quantity: quantity,
    };
    t
      ? setCartlist({
          data: [...Cartlist.data, igt],
          length: Cartlist.data.length,
        })
      : null;
  };

  window.alert =(message , timeout=null)=>{
    const alert = document.createElement('div');
    const btn = document.createElement("button");
    const instruction = document.createElement("p");
    instruction.innerHTML = "For financial security purposes Please Remove existing Product in Cart Before Updating Quantity, Thank you."

    btn.innerHTML = "Ok"
    btn.setAttribute('style', `
      width: 90%;
      height: 40px;
      border-radius: 10px;
      border: 1px solid rgb(219, 73, 5);
      background: rgb(219, 73, 5);
      color: white;
      `)
      instruction.setAttribute('style', `
        color: gray;
        padding: 10px;
        text-align: center;
        font-size:15px;
        `)
    
    alert.innerHTML = `<p>${message}</p>`;
    alert.setAttribute("style",
      `
        position:fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 400px;
        height:300px;
        background: white;
        color: rgb(219, 73, 5);
        border-radius: 20px;
        display: flex;
        gap:25px;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding: 20px;
        box-shadow: 0px 0px 3000px gray;
        font-size:20px;
      `
    )
    btn.addEventListener('click' , ()=>{
      alert.remove();
    })

    timeout !== null? ()=>{
      setInterval
    }:null

    alert.appendChild(instruction);
    alert.appendChild(btn);
    document.body.appendChild(alert);
  }

  return (
    <div className=" w-[49%] md:w-[24%] lg:w-[19%] h-[400px]  overflow-hidden">
      <div className="w-full p-2 h-full bg-[#f7f6f6]  flex flex-col justify-between rounded-md overflow-hidden">
        <div className=" flex-1 overflow-hidden">
          {imgURL ? (
            <img
              className="rounded-md h-3/5 w-full object-cover"
              src={imgURL}
              alt=""
            />
          ) : (
            <div className=" rounded-md h-3/5 w-full bg-slate-500"></div>
          )}
          <div className=" flex justify-between overflow-hidden">
            <h4 className=" font-bold w-2/3 text-ellipsis ">{name}</h4>
            <p className=" font-bold"> {formatCurrency(price)} </p>
          </div>
          {description ? (
            <p className=" text-sm  text-ellipsis">{description}</p>
          ) : (
            <p className=" bg-slate-200"></p>
          )}
        </div>
        <div className=" w-full h-12 flex justify-center items-center ">
          <span className=" flex gap-12 text-orange-600 font-semibold">
            <button
            onClick={
              ()=>{
                quantity>1 ?
                setQuantity(quantity-1):null
              }
            }
             className=" w-6 h-6 flex justify-center items-center bg-slate-300 rounded-lg hover:bg-slate-400 text-black font-medium">
              -
            </button>
            {quantity}
            <button 
            onClick={
              ()=>{
                
                setQuantity(quantity+1)
              }
            }
            className=" w-6 h-6 flex justify-center items-center bg-slate-300 rounded-lg hover:bg-slate-400 text-black font-medium">
              +
            </button>
          </span>
        </div>
        <button
          className="w-full h-10 text-white rounded-lg  bg-orange-600 mt-2 hover:bg-orange-700"
          onClick={addnewitem}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
