import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { arcticLoading, fetchArctic } from "../../redux/arcticSlice"
import Navbar from "../navbar/Navbar"
import ArcticChart from "./ArcticChart"
import "./Arctic.css"
import { PropagateLoader } from "react-spinners"


function Artcic(){
    const arctic = useSelector((state) => state.arctic)
    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(arcticLoading())
        setTimeout(() => {
            dispatch(fetchArctic())
        }, 2000);
    },[])

    return(
        <div className="arctic flex flex-col justify-start">
            <Navbar />
            <div className="arctic-chart flex flex-col justify-center items-center">
                {arctic.loading && <div><PropagateLoader color="blue" /></div>}
                {!arctic.loading && arctic.arcticData ? <ArcticChart /> : null}
                {!arctic.loading && arctic.error && <p>Error..</p>}
            </div>
        </div>
    )
}

export default Artcic