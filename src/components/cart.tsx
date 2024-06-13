import { useContext, useEffect, useState } from "react";
import { cartContext, itemContext } from "./context/cartContext";
import React from "react";
import { formatCurrency } from "../Utilities/utilitiesFxn";
import { ShoppingBasket } from "lucide-react";

type Props = {};

const Cart = ({}: Props) => {
  const [price, setPrice] = useState<number>(0);
  const [showCart] = useContext<boolean | any>(cartContext);

  const [Cartlist, setCartlist] = useContext(itemContext);

  useEffect(() => {
    var sum = 0;
    Cartlist.data.forEach((data: { price: number }) => {
      sum = sum + data.price;
    });
    setPrice(sum);
  },[Cartlist]);

  return (
    <React.Fragment>
      <div
        className={
          showCart
            ? `h-full w-3/4 md:w-1/3 lg:w-1/4 fixed flex  top-0 right-0  shadow-2xl z-50 bg-slate-50 transition-all ease-in-out delay-150`
            : `h-full w-2/3 md:w-1/2 lg:w-1/3 fixed top-0 right-[-2000px]  shadow-2xl z-50 bg-slate-50 transition-all ease-in-out delay-150`
        }
      >
        {Cartlist.data.length !== 0 ? (
          <div className=" w-full mt-40">
            {Cartlist.data.map(
              (
                data: {
                  imgUrl: string | undefined;
                  name:
                    | string
                    | number
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | Iterable<React.ReactNode>
                    | React.ReactPortal
                    | null
                    | undefined;
                  price: number;
                },
                index: React.Key | null | undefined
              ) => (
                <div
                  key={index}
                  className="w-full flex justify-between h-14 border-b items-center px-1 overflow-hidden"
                >
                  <img
                    className="w-12 h-12 rounded-md object-cover"
                    src={data.imgUrl}
                    alt=""
                  />
                  <p className="  px-2  text-ellipsis">{data.name}</p>
                  <p>{formatCurrency(data.price)}</p>
                  <button
                    onClick={() => {
                      const newlist = Cartlist.data.filter((ata: any) => {
                        if (ata.name !== data.name) {
                          return ata;
                        }
                      });
                      setCartlist({
                        data: newlist,
                        length: Cartlist.data.length,
                      });
                    }}
                    className=" bg-orange-600 w-[10%] rounded text-white  hover:bg-orange-800"
                  >
                    x
                  </button>
                </div>
              )
            )}
          </div>
        ) : (
          <p className="  self-center w-full text-center text-gray-600">
            Empty Cart
          </p>
        )}
        <div className="fixed top-16 text-orange-600 bg-slate-100 font-bold text-xl border-b w-full flex items-center h-20 px-6">
          <p>
            <ShoppingBasket />
          </p>{" "}
          <button
            className=" ml-[40px] bg-slate-200 w-20 rounded-lg text-sm h-8 hover:border hover:border-orange-600"
            onClick={() => {
              setCartlist({ data: [], length: 0 });
            }}
          >
            clear
          </button>
        </div>
        <div className="fixed bottom-0  bg-slate-100 font-bold  border-t w-full flex  h-40 px-6">
          <div className="flex px-4 min-w-40 h-8 items-center gap-10 text-gray-600 mt-16">
            <p className="w-[50px] ">Price:</p>
            <p className=" w-[69px] text-start">{formatCurrency(price)}</p>
          </div>
          <div className="  px-32">
            <button className=" min-w-20 mt-16    bg-slate-200 text-orange-600 h-8 rounded-lg hover:border hover:border-orange-600">
              Pay
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cart;
