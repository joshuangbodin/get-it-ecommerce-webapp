import watches from "../data/watches.json"
import NavMenu from '../../components/NavMenu/NavMenu'

import CardList from "../../components/CardList/CardList"
import TopVideo from "../../components/topDesign/TopVideo"
import React from "react"


interface Props{}

const Watche:React.FC = ({}: Props) => {
  return (
    <React.Fragment>
      <NavMenu/>
      <TopVideo  videoUrl='watchvideo.mp4'/>
      <CardList array={watches}/>
    </React.Fragment>
  )
}

export default Watche