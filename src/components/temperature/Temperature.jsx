import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchTemperature, impostaLoading } from "../../redux/temperatureSlice"
import Navbar from "../navbar/Navbar"
import TemperatureChart from "./TemperatureChart"
import "./Temperature.css"
import { PropagateLoader } from "react-spinners"

function Temperature(){
    const temperature = useSelector((state) => state.temperature)
    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(impostaLoading())
        setTimeout(() => {
            dispatch(fetchTemperature())
        }, 2000);
    },[])
    return(
        <div className="temperature flex flex-col justify-start">
            <Navbar />
            <div className="temperature-chart flex flex-col justify-center items-center">
                {temperature.loading && <div><PropagateLoader  color="red"/></div>}
                {!temperature.loading && temperature.temperatureData ? <TemperatureChart /> : null}
                {!temperature.loading && temperature.error && <p>Error...</p>}
            </div>
        </div>
    )
}

export default Temperature