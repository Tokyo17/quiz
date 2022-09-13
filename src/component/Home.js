
import imgExplore from "./img/home.png"
import "./style/home.css"
import { useSelector, useDispatch } from 'react-redux'
import LoginPopup from "./popup/LoginPopup"
import { useState } from "react"

const Home=()=>{

const [popup,setPopup]=useState(false)

    return(
        <>
        <div className="home">
            <LoginPopup popup={popup} setPopup={setPopup}/>
            <img src={imgExplore}/>
            <p>You have question? or will answer a question?</p>
            <p>Please login first!</p>
            <div className="loginHomeBtn btn" onClick={()=>setPopup(!popup)}>Login</div>
        </div>
        </>
    )
}

export default Home