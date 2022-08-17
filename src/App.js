import React from "react";
import Hero from "./Component/Hero";
import About from "./Component/About";
import Navbar from "./Component/Navbar";

export default function App(){
    return (
        <div>
            <Navbar/>
            <Hero/>
            <About/>
        </div>
    )
}