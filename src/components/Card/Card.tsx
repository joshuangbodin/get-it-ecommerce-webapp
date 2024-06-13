
import { useContext} from "react";
import { formatCurrency } from "../../Utilities/utilitiesFxn";
import {  itemContext } from "../context/cartContext";




interface Props{
    imgURL : string;
    name : string;
    description : string;
    price : number;
    
}

const Card = ({imgURL , description, name ,price}: Props) => {
const [Cartlist , setCartlist] = useContext(itemContext);
  
const addnewitem = () =>{
  
  setCartlist({data:[...Cartlist.data, {name:name , imgUrl:imgURL , price:price}] , length: Cartlist.data.length})
}
 

  return (
    <div className=" w-[49%] md:w-[24%] lg:w-[19%] h-[400px] lg:h-[300px] overflow-hidden">
        <div className="w-full p-2 h-full bg-[#f7f6f6] flex flex-col justify-between rounded-md overflow-hidden">
        <div className=" flex-1 overflow-hidden">
            {imgURL? <img className="rounded-md h-3/5 w-full object-cover" src={imgURL} alt="" /> : <div className=" rounded-md h-3/5 w-full bg-slate-500"></div>}
            <div className=" flex justify-between overflow-hidden">
                <h4 className=" font-bold w-2/3 text-ellipsis ">{name}</h4>
                <p className=" font-bold"> {formatCurrency(price)} </p>
                
            </div>
            {description?<p className=" text-sm  text-ellipsis">{description}</p>: <p className=" bg-slate-200"></p>}
            </div>
            <button className="w-full h-10 text-white rounded-lg  bg-orange-600 mt-2 hover:bg-orange-700"  onClick={addnewitem}>Add to Cart</button>

        </div>
    </div>
  )
}

export default Card