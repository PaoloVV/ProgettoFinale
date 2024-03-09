import { FaLinkedinIn } from "react-icons/fa"
import "./Navbar.css"
import { Link } from "react-router-dom"
import { FaGithubAlt } from "react-icons/fa"
import { FaLaptopCode } from "react-icons/fa"
import { HiMenuAlt1 } from "react-icons/hi";
import { useState } from "react"
import { Spin as Hamburger } from 'hamburger-react'

function Navbar(){
    const [btnState, setBtnState] = useState(false)
    const handleMenu = () =>{
        setBtnState(btnState => !btnState)
    }
    let hiddenClass = btnState ? "flex" : "hidden"
    return(
        <>
        
        
        <div className="navbar flex flex-row justify-between lg:justify-evenly items-center h-20">
            <div className="hidden lg:inline lg:w-3/4 px-3">
                <ul className="list flex flex-row justify-between font-bold">
                    <li className="item-list"><Link to={"/"}>Home</Link></li>
                    <li className="item-list"><Link to={"/co2"}>Co2</Link></li>
                    <li className="item-list"><Link to={"/methane"}>Methane</Link></li>
                    <li className="item-list"><Link to={"/nitrous"}>Nitrous</Link></li>
                    <li className="item-list"><Link to={"/temperature"}>Temperature</Link></li>
                    <li className="item-list"><Link to={"/arctic"}>Polar ice</Link></li>
                </ul>
            </div>
            <div className="inline mx-5 lg:hidden">
                {/* <button onClick={handleMenu}><HiMenuAlt1 size={"2rem"} /></button> */}
                <Hamburger onToggle={toggle =>{
                    if(toggle){
                        setBtnState(true)
                    } else{
                        setBtnState(false)
                    }
                }} />
            </div>


            <div className="social max-lg:mx-5 w-1/2 lg:w-1/4 px-3">
                <ul className="flex flex-row justify-evenly items-center">
                    <li className="icons-list"><a href="https://www.linkedin.com/in/paolo-viviani-aa1618278/" rel="noopener" target="_blank"><FaLinkedinIn className="react-icon"/></a></li>
                    <li className="icons-list"><a href="https://github.com/PaoloVV" rel="noopener" target="_blank"><FaGithubAlt className="react-icon"/></a></li>
                    <li className="icons-list"><a href="https://paolovv.github.io/SitoPortfolioPv/" rel="noopener" target="_blank"><FaLaptopCode className="react-icon"/></a></li>
                </ul>
            </div>
        </div>

        <div>
        <div className={`${hiddenClass} navbar flex flex-col items-center`}>
                    <ul className="list flex flex-col justify-center items-center font-bold p-3">
                        <li className="item-list"><Link to={"/"}>Home</Link></li>
                        <li className="item-list"><Link to={"/co2"}>Co2</Link></li>
                        <li className="item-list"><Link to={"/methane"}>Methane</Link></li>
                        <li className="item-list"><Link to={"/nitrous"}>Nitrous</Link></li>
                        <li className="item-list"><Link to={"/temperature"}>Temperature</Link></li>
                        <li className="item-list"><Link to={"/arctic"}>Polar ice</Link></li>
                    </ul>
                </div>
        </div>
        </>
    )
}

export default Navbar