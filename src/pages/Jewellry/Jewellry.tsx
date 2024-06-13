import jewellry from "../data/jewellry.json"
import NavMenu from '../../components/NavMenu/NavMenu'
import TopVideo from '../../components/topDesign/TopVideo'
import CardList from '../../components/CardList/CardList'
import React from "react"

interface Props{}

const Jewellry:React.FC = ({}: Props) => {
  return (
    <React.Fragment>
      <NavMenu/>
      <TopVideo videoUrl='gem.mp4'/>
      <CardList array={jewellry}/>
    </React.Fragment>
  )
}

export default Jewellry