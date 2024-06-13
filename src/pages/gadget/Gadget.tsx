import gadgets from "../data/gadgets.json";
import NavMenu from '../../components/NavMenu/NavMenu'
import TopImg from '../../components/topDesign/TopImg'
import CardList from "../../components/CardList/CardList";
import React from "react";

interface Props{}

const Gadget:React.FC = ({}: Props) => {
  return (
    <React.Fragment>
        <NavMenu/>
        <TopImg videoUrl='gadget6.jpg'/>
        <CardList array={gadgets}/>
    </React.Fragment>
  )
}

export default Gadget