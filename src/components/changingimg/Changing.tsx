import React, { useState } from "react";
import "./changing.css";
interface Props {}

const Changing: React.FC = ({}: Props) => {
  const [show , setShow] = useState(1);

  const changeshow =()=>{
    if(show == 3){
      setShow(1);
    }
    else if(show == 2){
      setShow(3);
    }
    else{
      setShow(2)
    }
  }

  setTimeout(changeshow , 5000);

  return (
    <React.Fragment>
      <div className=" mt-40 flex flex-col justify-center items-center w-full">
        <h3 className=" w-full text-center text-orange-600 font-bold mb-4 ">
          Hot Deals:
        </h3>
        <div className="  w-[100dvw]     relative h-72 lg:h-96">
          <div className={show == 1?"opacity-1  transition-all ease-in-out delay-300":"opacity-0 transition-all ease-in-out delay-300"}><div className=" w-[100vw] h-72 lg:h-96 absolute  bg-[#ff732244] flex justify-around items-center overflow-hidden">
            <div className=" flex w-full h-full justify-center items-center overflow-hidden">
              <div>
                <h3 className=" text-red-600 text-2xl font-bold md:text-3xl text-ellipsis overflow-hidden">
                  50% Off on <br /> all first Purchases
                </h3>
                <p>Proceed now to make Purchase</p>
              </div>
            </div>
            <div className="w-1/2">
              <img className="w-2/3 animate-pulse" src="show2.png" alt="" />
            </div>
          </div></div>
          <div className={show == 2?"opacity-1 transition-all ease-in-out delay-300":"opacity-0 transition-all ease-in-out delay-300"}><div className=" w-[100vw] h-72 lg:h-96 absolute  bg-[#4fff2344] flex justify-around items-center overflow-hidden">
            <div className=" flex w-full h-full justify-center items-center overflow-hidden">
              <div>
                <p>limited Offer!</p>
                <h3 className=" text-green-600 text-2xl font-bold md:text-3xl text-ellipsis overflow-hidden">
                  MacBook Pro
                </h3>
                <p className=" font-bold ">
                  <strike className=" text-red-800">$4300</strike> $3000
                </p>
              </div>
            </div>
            <div className="w-1/2">
              <img className="w-4/5 animate-pulse" src="show3.png" alt="" />
            </div>
          </div></div>
          <div className={show == 3?"opacity-1 transition-all ease-in-out delay-300":"opacity-0 transition-all ease-in-out delay-300"}><div className=" w-[100vw] h-72 lg:h-96 absolute  bg-[#d3c61644] flex justify-around items-center overflow-hidden">
            <div className="flex w-full h-full justify-center items-center overflow-hidden">
              <div>
                {" "}
                <h3 className=" text-yellow-600 text-2xl font-bold md:text-3xl text-ellipsis overflow-hidden">
                  <strong>Hot! Hot!</strong> <br /> Deals On Gadgets
                </h3>
                <p>Affordable Apple Gadgets</p>
              </div>
            </div>
            <div className="w-1/2">
              <img className="w-4/5 animate-pulse" src="show1.png" alt="" />
            </div>
          </div></div>
          <div className="  bottom-0 w-[5%]  rounded-t-xl h-6 bg-white"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default React.memo(Changing);
