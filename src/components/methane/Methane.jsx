import { useDispatch, useSelector } from "react-redux"
import MethaneChart from "./MethaneChart"
import { useEffect } from "react"
import { fetchMethane, impostaLoading } from "../../redux/methaneSlice"
import Navbar from "../navbar/Navbar"
import "./Methane.css"
import { PropagateLoader } from "react-spinners"

function Methane(){
  const methane = useSelector((state) => state.methane)
  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(impostaLoading())
    setTimeout(() => {
      dispatch(fetchMethane())
    }, 2000)
  }, [])

    return(
        <div className="methane flex flex-col justify-start">
          <Navbar></Navbar>
          <div className="methane-chart flex flex-col justify-center items-center">
              {methane.loading && <div><PropagateLoader color="blue" /></div>}
              {!methane.loading && methane.methaneData ? <MethaneChart /> : null}
              {!methane.loading && methane.error && <p>Error...</p>}
          </div>
        </div>
        
    )
}

export default Methane