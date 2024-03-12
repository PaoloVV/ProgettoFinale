import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { arcticLoading, fetchArctic } from "../../redux/arcticSlice"
import Navbar from "../navbar/Navbar"
import ArcticChart from "./ArcticChart"
import "./Arctic.css"
import { PropagateLoader } from "react-spinners"
import useWindowSize from "../../hook/useWindowSize"
import Footer from "../footer/footer"


function Artcic(){
    const arctic = useSelector((state) => state.arctic)
    const dispatch = useDispatch()
    const windowSize = useWindowSize()

    useEffect(() =>{
        dispatch(arcticLoading())
        setTimeout(() => {
            dispatch(fetchArctic())
        }, 1000);
    },[windowSize])

    return(
        <div className="arctic flex flex-col justify-start">
            <Navbar />

            <div className="lg:hidden advice">
                <p>
                    Per una migliore visualizzazione ruota il tuo dispositivo
                </p>
            </div>

            <div className="description-arctic">
                <h3 className="text-xl lg:text-3xl text-center uppercase">Polar Ice</h3>
                <p className="text-sm">
                    Sea level is a very sensitive indicator of climate change. Global warming in fact results in the thermal expansion of the oceans and the increase in the flow of fresh water into the sea due to the melting of glaciers and ice caps.
                    The entry of fresh water into the oceans produces a further effect on sea level: it reduces the salinity and therefore the density of sea water, with effects on ocean circulation that are reflected in how sea level varies from region to region.
                </p>
            </div>
            
            <div className="arctic-chart flex flex-col justify-center items-center">
                {arctic.loading && <div><PropagateLoader color="blue" /></div>}
                {!arctic.loading && arctic.arcticData ? <ArcticChart /> : null}
                {!arctic.loading && arctic.error && <p>Error..</p>}
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Artcic