import { useContext } from "react"
import { CalcContext } from "../context/CaclContext"
import { Textfit } from 'react-textfit';


const Screen = () => {
    const {calc} = useContext(CalcContext);

  return (
    <Textfit className="screen">1654658</Textfit>
  )
}

export default Screen