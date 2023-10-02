import { NavLink } from 'react-router-dom'
import './App.css'

function Navbar() {

    return (
        <>
            <nav>
                <h1>Xiao</h1>
                <ul>
                    <li>
                        <NavLink to={"/"} >Xiao</NavLink>
                    </li>
                    <li> <NavLink to={"/dowland"} >Arşiv</NavLink></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
