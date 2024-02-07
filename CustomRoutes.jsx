import { Routes, Route } from "react-router-dom";
import Userdetails from "./Userdetails.jsx";
import SocialApp from "./SocialApp.jsx";

export default function Customroutes(){
 return (


    <Routes>
        <Route path="/" element={<SocialApp/>}/>
        <Route path="user" element={<Userdetails/>}/>
    </Routes>

 )
}