import React from "react";
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from "react-router-dom";

function Common(){
    return(
        <div className="flex flex-col">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Common;