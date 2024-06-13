import "./we.css";

type Props = {};

const Welcome = ({}: Props) => {
  return (
    <div className="container">
      <div className="searchbanner">
        <h3>Start <strong>Shopping</strong> For <br /> Consumer Goods <strong>Now!</strong> </h3>
        <button className=" bg-orange-600 h-12 rounded-full text-white  w-3/4 md:w-1/4"> Discover </button>
      </div>
    </div>
  );
};

export default Welcome;
