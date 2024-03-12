import { useDispatch, useSelector } from "react-redux"
import Navbar from "../navbar/Navbar"
import { useEffect } from "react"
import { fetchNitrous, nitrousLoading } from "../../redux/nitrousSlice"
import NitrousChart from "./NitrousChart"
import "./Nitrous.css"
import { PropagateLoader } from "react-spinners"
import useWindowSize from "../../hook/useWindowSize"
import Footer from "../footer/footer"

function Nitrous(){
    const nitrous = useSelector((state) => state.nitrous)
    const dispatch = useDispatch()
    const windowSize = useWindowSize()

    useEffect(() =>{
        dispatch(nitrousLoading())
        setTimeout(() => {
            dispatch(fetchNitrous())
        }, 1000);
    }, [windowSize])

    return(
        <div className="nitrous flex flex-col justify-start">
            <Navbar></Navbar>

            <div className="lg:hidden advice">
                <p>
                    Per una migliore visualizzazione ruota il tuo dispositivo
                </p>
            </div>

            <div className="description-nitrous">
                <h3 className="text-xl lg:text-3xl uppercase text-center">nitrogen dioxide - no2</h3>
                <p className="text-sm">
                    It is an irritating gas for the respiratory system and eyes which can cause bronchitis and even pulmonary edema and death. It contributes to the formation of photochemical smog, as a precursor of tropospheric ozone, and contributes, by transforming into nitric acid, to the phenomenon of "acid rain".
                </p>
            </div>

            <div className="nitrous-chart flex flex-col justify-center items-center">
                {nitrous.loading && <div><PropagateLoader color="yellow"/></div>}
                {!nitrous.loading && nitrous.nitrousData ? <NitrousChart /> : null}
                {!nitrous.loading && nitrous.error && <p>Error..</p>}
            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Nitrous