import { useDispatch, useSelector } from "react-redux"
import Co2Chart from "./Co2Chart"
import { useEffect } from "react"
import { co2Loading, fetchCo2} from "../../redux/co2Slice"
import Navbar from "../navbar/Navbar"
import "./Co2.css"
import { PropagateLoader } from "react-spinners"
import useWindowSize from "../../hook/useWindowSize"
import Footer from "../footer/footer"

function Co2(){
  const co2 = useSelector((state) => state.co2)
  const dispatch = useDispatch()
  const windowSize = useWindowSize()

  useEffect(() =>{
    dispatch(co2Loading())
    setTimeout(() => {
      dispatch(fetchCo2())
    }, 2000);
  },[windowSize])

    return(
      <div className="co2 flex flex-col justify-start">
        <Navbar></Navbar>

        <div className="description-co2">
          <h3 className="text-xl lg:text-3xl text-center uppercase">carbon dioxide - co2</h3>
          <p>
            Carbon dioxide (CO2) is among the greenhouse gases that contribute most to global warming. These gases present in the Earth's atmosphere capture the sun's heat, preventing it from returning to space.
          </p>
        </div>

        <div className="chart-container p-1 flex flex-col justify-center items-center">
          {co2.loading && <div><PropagateLoader color="red"/></div>}
          {!co2.loading && co2.co2Data ? <Co2Chart /> : null}
          {!co2.loading && co2.error && <p>Error...</p>}
        </div>

        <div>
          <Footer />
        </div>
      </div>

    )
}

export default Co2