import { ChangeEvent, useEffect, useState } from "react";
import { products } from "../pages/data/gen";
import Card from "./Card/Card";
import React from "react";

const ProductList: React.FC = () => {
  const [searchv, setSearchv] = useState<string>("");
  const [productv, setProductv] = useState<
    {
      type: string;
      name: string;
      description: string;
      ImgURL: string;
      Price: number;
    }[]
  >(products);

  useEffect(() => {
    const data = products.filter((product) => {
      if (searchv == "") {
        return product;
      } else if (
        product.name.toLowerCase().includes(searchv.toLowerCase()) ||
        product.type.toLowerCase().includes(searchv.toLowerCase())
      ) {
        return product;
      }
    });
    setProductv(data);
  }, [searchv]);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchv(e.target.value);
  };
  return (
    <React.Fragment>
      <div className="w-full flex  min-h-[200vh] items-center mt-40 flex-col">
        <div className=" w-full h-72 flex flex-col justify-center items-center">
          <h3 className=" text-xl font-semibold">
            Great <strong className=" text-orange-600">Deals</strong> For You
          </h3>
          <form className="w-full flex justify-center  " action="">
            <input
              onChange={changeHandler}
              type="search"
              className="w-3/6  bg-slate-100 border border-slate-400 h-12 rounded-full px-4 mt-2"
              placeholder="Search For an Item"
              name=""
              id=""
            />
          </form>
        </div>
        <div className=" md:w-5/6 flex flex-wrap ">
          <React.Fragment>
            {productv? productv.map((product,index) => (
              <Card
                key={index}
                name={product.name}
                price={product.Price}
                imgURL={product.ImgURL}
                description={product.description}
              />
            )): <p>Currently not found or Internet Error</p>}
          </React.Fragment>
        </div>
      </div>
    </React.Fragment>
  );
};

export default React.memo(ProductList);
