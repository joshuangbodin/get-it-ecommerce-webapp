import shoes from  "../data/shoes.json"
import NavMenu from '../../components/NavMenu/NavMenu'
import TopVideo from '../../components/topDesign/TopVideo'
import CardList from "../../components/CardList/CardList"
import React from "react"

interface Props{}

const Shoes:React.FC = ({}: Props) => {
  return (
    <React.Fragment>
      <NavMenu/>
      <TopVideo videoUrl='shoe.mp4'/>
      <CardList array={shoes}/>
    </React.Fragment>
  )
}

export default Shoes