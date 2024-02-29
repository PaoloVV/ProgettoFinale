import { FaLinkedinIn } from "react-icons/fa"
import "./Navbar.css"
import { Link } from "react-router-dom"
import { FaGithubAlt } from "react-icons/fa"
import { FaLaptopCode } from "react-icons/fa"

function Navbar(){
    return(
        <div className="navbar flex flex-row justify-evenly items-center h-20">
            <div>
                <ul className="list min-w-40 flex flex-row justify-between font-bold">
                    <li className="item-list"><Link to={"/"}>Home</Link></li>
                    <li className="item-list"><Link to={"/co2"}>Co2</Link></li>
                    <li className="item-list"><Link to={"/methane"}>Methane</Link></li>
                    <li className="item-list"><Link to={"/nitrous"}>Nitrous</Link></li>
                    <li className="item-list"><Link to={"/temperature"}>Temperature</Link></li>
                    <li className="item-list"><Link to={"/arctic"}>Polar ice</Link></li>
                </ul>
            </div>

            <div className="social">
                <ul className="flex flex-row min-w-20 justify-evenly items-center">
                    <li className="icons-list"><a href="https://www.linkedin.com/in/paolo-viviani-aa1618278/" rel="noopener" target="_blank"><FaLinkedinIn size={"2rem"}/></a></li>
                    <li className="icons-list"><a href="https://github.com/PaoloVV" rel="noopener" target="_blank"><FaGithubAlt size={"2rem"}/></a></li>
                    <li className="icons-list"><a href="https://paolovv.github.io/SitoPortfolioPv/" rel="noopener" target="_blank"><FaLaptopCode size={"2rem"}/></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar