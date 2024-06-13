import { Link } from "react-router-dom";
import { categories } from "../../pages/data/gen";
import Card from "../Card/Card copy";
import "./CardList.css";

type Props = {};

const Card2 = ({}: Props) => {
  return (
    <div className="w-full">
      <h3 className=" w-full text-center text-orange-600 font-bold mb-4 ">Our Categories:</h3>
      <div className=" flex  justify-center items-center flex-wrap gap-2">
        
        {categories
          ? categories.map((e, index) => (
              <Link key={index} to={`/${e.name}`}>
                <Card name={e.name} imgURL={e.imgUrl} />
              </Link>
            ))
          : null}
      </div>
      
    </div>
  );
};

export default Card2;
