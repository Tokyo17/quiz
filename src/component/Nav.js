import { useEffect, useLayoutEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import {Link, useLocation, useNavigate} from "react-router-dom"
import { navWidth } from "../app/Slice";


import "./style/nav.css"

import explore from "./img/explore.png"

import claz from "./img/class.png"

const Nav=()=>{

    const location = useLocation();
    let navigate=useNavigate();
    
   


    return(
        <>
        <div className="nav">
            <div className={location.pathname == "/" ? "active navLink" :"navLink"}>
                <div className="exploreImg navImg">
                    <img src={explore}/>
                </div>
                <Link  to="/">Explore</Link> 
            </div>
            <div onClick={()=>navigate("/class")} className={location.pathname == "/class" ? "active navLink" :"navLink"}>
                <div className="classImg navImg">
                    <img src={claz}/>
                </div>
                <Link  to="/class">Class</Link> 
            </div>
    
            <Link className={location.pathname == "/profile" ? "active" :""}  to="profile">Profile</Link>
            <Link className={location.pathname == "/setting" ? "active" :""} to="setting">Setting</Link>
        </div>
        </>
    )
}
export default Nav