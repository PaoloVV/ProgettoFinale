import { useDispatch, useSelector } from "react-redux"
import MethaneChart from "./MethaneChart"
import { useEffect } from "react"
import { fetchMethane, impostaLoading } from "../../redux/methaneSlice"
import Navbar from "../navbar/Navbar"
import "./Methane.css"
import { PropagateLoader } from "react-spinners"
import useWindowSize from "../../hook/useWindowSize"
import Footer from "../footer/footer"

function Methane(){
  const methane = useSelector((state) => state.methane)
  const dispatch = useDispatch()
  const windowSize = useWindowSize()

  useEffect(() =>{
    dispatch(impostaLoading())

    setTimeout(() => {
      dispatch(fetchMethane())
    }, 1000)
  }, [windowSize])

    return(
        <div className="methane flex flex-col justify-start">
          <Navbar></Navbar>

          <div className="lg:hidden advice">
            <p>
              For better viewing, rotate your device horizontally
            </p>
          </div>

          <div className="description-methane">
            <h3 className="text-xl lg:text-3xl uppercase text-center">Methane</h3>
            <p className="text-sm">
              Methane is, after CO2, the main cause of global warming. Although it is relatively easy to reduce emissions, the improvement is slow and small. Methane has a much shorter residence time in the atmosphere than CO2, but its effect is 84 times stronger.
            </p>
          </div>

          <div className="methane-chart p-1 flex flex-col justify-center items-center">
              {methane.loading && <div><PropagateLoader color="blue" /></div>}
              {!methane.loading && methane.methaneData ? <MethaneChart /> : null}
              {!methane.loading && methane.error && <p>Error...</p>}
          </div>

          <div>
            <Footer />
          </div>
        </div>
        
    )
}

export default Methane