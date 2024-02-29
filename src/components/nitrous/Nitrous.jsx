import { useDispatch, useSelector } from "react-redux"
import Navbar from "../navbar/Navbar"
import { useEffect } from "react"
import { fetchNitrous, nitrousLoading } from "../../redux/nitrousSlice"
import NitrousChart from "./NitrousChart"
import "./Nitrous.css"
import { PropagateLoader } from "react-spinners"

function Nitrous(){
    const nitrous = useSelector((state) => state.nitrous)
    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(nitrousLoading())
        setTimeout(() => {
            dispatch(fetchNitrous())
        }, 2000);
    },[])

    return(
        <div className="nitrous flex flex-col justify-start">
        <Navbar></Navbar>
        <div className="nitrous-chart flex flex-col justify-center items-center">
            {nitrous.loading && <div><PropagateLoader color="yellow"/></div>}
            {!nitrous.loading && nitrous.nitrousData ? <NitrousChart /> : null}
            {!nitrous.loading && nitrous.error && <p>Error..</p>}
      </div>
        </div>
    )
}

export default Nitrous