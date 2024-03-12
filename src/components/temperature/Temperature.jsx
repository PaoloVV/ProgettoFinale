import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchTemperature, impostaLoading } from "../../redux/temperatureSlice"
import Navbar from "../navbar/Navbar"
import TemperatureChart from "./TemperatureChart"
import "./Temperature.css"
import { PropagateLoader } from "react-spinners"
import useWindowSize from "../../hook/useWindowSize"
import Footer from "../footer/footer"

function Temperature(){
    const temperature = useSelector((state) => state.temperature)
    const dispatch = useDispatch()
    const windowSize = useWindowSize()

    useEffect(() =>{
        dispatch(impostaLoading())
        setTimeout(() => {
            dispatch(fetchTemperature())
        }, 1000);
    },[windowSize])
    return(
        <div className="temperature flex flex-col justify-start">
            <Navbar />

            <div className="lg:hidden advice">
                <p>
                    Per una migliore visualizzazione ruota il tuo dispositivo
                </p>
            </div>

            <div className="description-temperature">
                <h3 className="text-xl lg:text-3xl text-center uppercase">temperature</h3>
                <p className="text-sm">
                    The main effects of global warming are the decrease in water availability and crop yields, the increasing risks of drought and loss of biodiversity, forest fires and heat waves.
                </p>
            </div>

            <div className="temperature-chart flex flex-col justify-center items-center">
                {temperature.loading && <div><PropagateLoader  color="red"/></div>}
                {!temperature.loading && temperature.temperatureData ? <TemperatureChart /> : null}
                {!temperature.loading && temperature.error && <p>Error...</p>}
            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Temperature