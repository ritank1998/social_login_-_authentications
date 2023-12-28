import React from "react";
import "../App.css"
const Navbar = ()=>{
    return(
        <>
        <div className="navbar">
            <span className="logo">CRCL</span>
            <ul className="list">
                <li className="listItem">
                    Social Login
                </li>
                <li className="listItem">
                    Logout
                </li>
            </ul>
        </div>
        </>
    )
}
export default Navbar