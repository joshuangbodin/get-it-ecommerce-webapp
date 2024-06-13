import { Link } from "react-router-dom"
import { HomeIcon } from "lucide-react";

interface Props{}

const NavMenu = ({}: Props) => {
  return (
    <div className="  h-[30vh] md-[40vh] mt-12 md:mt-5 lg:mt-0  w-full flex justify-center items-center">
        <nav className=" w-full flex justify-center mt-12  items-center">
            <ul className=" w-4/6 md:2/6 flex flex-wrap gap-2 md:justify-center md:gap-10">
            <li  ><Link className="" to="/"> <span className=" h-12 bg-slate-100 flex  justify-center items-center px-2 rounded-xl hover:bg-slate-200"> <HomeIcon/>  </span>   </Link> </li>
                <li  ><Link className="" to="/shoes"> <span className=" h-12 bg-slate-100 flex  justify-center items-center px-2 rounded-xl hover:bg-slate-200"> Shoes  </span>   </Link> </li>
                <li ><Link className="" to="/watches"> <span className=" h-12 bg-slate-100 flex  justify-center items-center px-2 rounded-xl hover:bg-slate-200">Watches </span>    </Link> </li>
                <li ><Link className="" to="/jewellry"> <span className=" h-12 bg-slate-100 flex  justify-center items-center px-2 rounded-xl hover:bg-slate-200">Jewellry</span>    </Link> </li>
                <li  ><Link className="" to="/drinks"> <span className=" h-12 bg-slate-100 flex  justify-center items-center px-2 rounded-xl hover:bg-slate-200">Drinks  </span>   </Link> </li>
                <li ><Link className="" to="/gadget"> <span className=" h-12 bg-slate-100 flex  justify-center items-center px-2 rounded-xl hover:bg-slate-200">Gadgets </span>   </Link> </li>
                
            </ul>  
        </nav>
    </div>
  )
}

export default NavMenu