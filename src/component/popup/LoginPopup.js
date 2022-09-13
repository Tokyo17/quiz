
import { useState } from "react"
import loginPopup from "../img/loginPopup.png"
import hide from "../img/hide.png"
import show from "../img/show.png"
import "./stylePopup/loginPopup.css"

const LoginPopup=(props)=>{

const [navPopup,setNavPopup]=useState("Login")
const [showPass,setShowPass]=useState(false)
const [showPass2,setShowPass2]=useState(false)

const navPopupLogin={
    backgroundColor:navPopup =="Login"? "white" :"#42B4A5",
    color:navPopup == "Login" ? "#42B4A5": 'white',
    fontWeight: '700',
}

const navPopupRegister={
    backgroundColor:navPopup =="Register"? "white" :"#42B4A5",
    color:navPopup == "Register" ? "#42B4A5": 'white',
    fontWeight: '700',
}

const bingkai={
    height:navPopup == "Register" ? "470px" : "430px",
}

    return(
        <>
{ props.popup?     <div className="loginPopup">
           <div onClick={()=>{props.setPopup(!props.popup)}}  className="keluar"></div>
            <div className="bingkaiLoginPopup" style={bingkai}>
            
                <div className="navPopup">
                    <div className="navPopupLogin btn" style={navPopupLogin} onClick={()=>setNavPopup("Login")}>Login</div>
                    <div className="navPopupRegister btn" style={navPopupRegister} onClick={()=>setNavPopup("Register")}>Resgister</div>
                </div>
            
                <div className="imgLoginPopup">
                    <img src={loginPopup}/>
                </div>
                <input placeholder="Username" type="text"/>
                <br/>
                <div className="pass1">
                    <img className="btn" onClick={()=>setShowPass(!showPass)} src={showPass? show : hide}/>
                    <input placeholder="Password"  type={showPass ? "text":"password"}/>
                </div>
                <div style={navPopup=="Register" ? {visibility:"visible"} : {visibility:"hidden",position:"absolute"}}>
                    <br/>
                    <div className="pass1">
                    <img className="btn" onClick={()=>setShowPass2(!showPass2)} src={showPass2 ? show : hide}/>
                      <input placeholder="Repeat Password"  type={showPass2 ? "text":"password"}/>
                    </div>
                </div>
                <div className="loginPopupBtn btn loginHomeBtn">
                    {navPopup}
                </div>
            </div>
        </div> : ""}
        </>
    )
}


export default LoginPopup