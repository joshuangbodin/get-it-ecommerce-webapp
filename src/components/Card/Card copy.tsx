



interface Props{
    imgURL : string;
    name : string;
    
    
    
}

const Card = ({imgURL , name }: Props) => {
  return (
    
        <div className=" relative h-20 text-orange-600 md:h-32 md:w-32 lg:h-52 w-20 lg:w-full overflow-hidden hover:text-orange-300">
          
            <img className="  lg:block w-full h-full object-cover rounded-xl" src={imgURL} alt="" />
            <div className="w-full flex justify-center absolute bottom-1 lg:bottom-0">
                <span className="w-5/6 h-1/6 flex bg-[#000]/40 lg:bg-white  justify-center rounded-md  lg:rounded-t-2xl   font-semibold"><h4 className="">{name}</h4></span>
                
            </div>
            
        </div>
   
  )
}

export default Card