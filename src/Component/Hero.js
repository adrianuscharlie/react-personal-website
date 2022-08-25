import React from "react";
import photo from "../Images/photo.png"

export default function Hero (){
    return (
        <section id="home" className="pt-36 lg:pt-0">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full self-center px-4 lg:w-1/2">
                        <h1 className="text-base font-semibold text-primary md:text-xl">Hello Everyone 👋, I'm
                        <span className="block font-bold text-dark text-4xl mt-1 lg:text-5xl">Adrianus Charlie</span> </h1>
                        <h2 className="font-medium text-secondary text-lg mb-5 lg:text-2xl">Undergraduated Student in Sanata Dharma University</h2>
                        <p className="font-medium text-slate-400 mb-10 leading-relaxed">Web Developer - Machine Learning - Software Engineering - Data Scientist</p>
                        <a href="#contact" className="text-base text-white font-semibold bg-teal-500 py-3 px-8 rounded-full
                        hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">Hire Me!</a>
                    </div>
                    <div className="w-full self-end px-4 lg:w-1/2">
                        <div className="relative mt-10 lg:mt-9 lg:right-0">
                        <img src={photo} alt="charlie_photo" className="max-w-full mx-auto"/>
                        <span className="absolute bottom-20 -z-10 left-1/2 -translate-x-1/2">
                            <svg width={400} height={400} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#14b8a6" d="M50.4,-59.4C60.6,-51.5,60.9,-31.1,61,-13.3C61.2,4.6,61.2,20,55.9,35.1C50.5,50.3,39.9,65.2,24.5,73.6C9.1,81.9,-10.9,83.5,-24.1,74.9C-37.3,66.4,-43.6,47.6,-48.5,31.6C-53.3,15.6,-56.9,2.5,-54.4,-9.3C-51.9,-21,-43.5,-31.4,-33.4,-39.4C-23.4,-47.4,-11.7,-53,4.2,-58C20.1,-63,40.2,-67.4,50.4,-59.4Z" transform="translate(100 100) scale(1.2)" />
                            </svg>
                        </span>
                        </div> 
                    </div>
                </div>
            </div>
        </section>
    )
}