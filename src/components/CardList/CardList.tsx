
import Card from "../Card/Card";
import "./CardList.css"

interface Props{
    array : any[];
}

const CardList = ({array}: Props) => {
  return (
    <div className=" flex mt-40 justify-center items-center">
        <div className=" flex flex-wrap md:w-5/6">
            {array && ( array.map((item, index) => <Card imgURL={item.ImgURL} key={String(index)}  name={item.name} price={item.Price} description={item.description}/>))
            }
        </div>
    </div>
  )
}

export default CardList