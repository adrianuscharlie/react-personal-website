import React from "react";
import Hero from "./Component/Hero";
import About from "./Component/About";
import Navbar from "./Component/Navbar";
import Portfolio from "./Component/Portfolio";
import Skills from "./Component/Skills";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";

export default function App(){
    return (
        <div>
            <Navbar/>
            <Hero/>
            <About/>
            <Portfolio/>
            <Skills/>
            <Contact/>
            <Footer/>
        </div>
    )
}
