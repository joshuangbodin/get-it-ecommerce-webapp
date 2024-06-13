import React from "react";
import CardList from "../../components/CardList/CardList"
import NavMenu from "../../components/NavMenu/NavMenu"
import TopVideo from "../../components/topDesign/TopVideo"
import wine from "../data/wine.json";

interface Props{}



const Drinks:React.FC = ({}: Props) => {
  return (
    <React.Fragment>
        <NavMenu/>
        <TopVideo videoUrl="wine.mp4"/>
        <CardList array={wine}/>
        
    </React.Fragment>
  )
}

export default Drinks