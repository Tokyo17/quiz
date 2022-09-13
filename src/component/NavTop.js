
import { useSelector } from "react-redux"
import logo from "./img/logo2.png"

import "./style/navTop.css"
import notif from "./img/notif.png"
import search from "./img/search.png"


const NavTop=()=>{

    return(
        <>
        <div className="navTop" > 
            <div className="navTopImg" >
                <img src={logo}/>
            </div>
            <div className="navTopMenu">
                <div className="search">
                    <img src={search}/>
                    <input type="text" placeholder="Search"/>
                </div>
                <div className="joinbtn btn">
                    Join
                </div>
                <div className="notifBtn">
                    <img src={notif}/>
                </div>
            </div>
        </div>
        </>
    )
}
export default NavTop