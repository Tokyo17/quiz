import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import "./component/style/app.css"

import NavTop from "./component/NavTop";
import Nav from "./component/Nav";
import Home from "./component/Home";
import Class from "./component/Class";
import Profile from "./component/Profile";
import Setting from "./component/Setting";


function App() {
  return (
    <>

     <Router>
      <NavTop/>
     <div className="app">
      <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path="/class" element={<Class/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/setting" element={<Setting/>}/>
        </Routes>
      </div>
     </Router>
    </>
  );
}

export default App;
