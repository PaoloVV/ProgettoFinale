import { useDispatch, useSelector } from "react-redux"
import Co2Chart from "./Co2Chart"
import { useEffect } from "react"
import { co2Loading, fetchCo2} from "../../redux/co2Slice"
import Navbar from "../navbar/Navbar"
import "./Co2.css"
import { PropagateLoader } from "react-spinners"

function Co2(){
  const co2 = useSelector((state) => state.co2)
  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(co2Loading())
    setTimeout(() => {
      dispatch(fetchCo2())
    }, 2000);
  },[])

    return(
      <div className="co2 flex flex-col justify-start">
        <Navbar></Navbar>
        {/* <div>
          <p>Start Date</p>
          <label htmlFor="startYear">Year</label>
          <input type="number" id="startYear" min={"2014"} max={"2024"} />
          <label htmlFor="startMonth">Month</label>
          <input type="number" id="startMonth" min={"1"} max={"12"} />
          <label htmlFor="startDay">Day</label>
          <input type="number" id="startDay" min={"1"} max={"31"} />
        </div> */}
        {/* <button onClick={filtraDate}>Filtra</button> */}
        <div className="chart-container flex flex-col justify-center items-center">
          {co2.loading && <div><PropagateLoader color="red"/></div>}
          {!co2.loading && co2.co2Data ? <Co2Chart /> : null}
          {!co2.loading && co2.error && <p>Error...</p>}
        </div>
      </div>

    )
}

export default Co2