import { createContext} from "react";

export const cartContext = createContext<any>(null);
export const itemContext = createContext<any>({} as Cartprop);

interface Cartprop{
    list:cartDataList;
    quantity:number;
    addtoList: (list:cartDataList,name:string , imgURL:string , price:number) => void;
    removerFromList: ((list:cartDataList,name:string , imgURL:string , price:number) => void)
}

export interface cartData{
    name: string;
    imgUrl: string;
    price: number;
    quantity: number;
}

export interface cartDataList{
    data : cartData[];
    length : number;
}

 



/*export function addtocart(list:cartDataList,name:string , imgURL:string , price:number){
    const data:cartData = {name:"" , imgUrl: "" , price: 0}
    data.name = name;
    data.imgUrl = imgURL;
    data.price = price;
    list.data = [... list.data , data]
    list.length = list.data.length;
}*/