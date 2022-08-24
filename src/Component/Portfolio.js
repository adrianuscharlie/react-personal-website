import React from "react";
import Data from '../ProjectsData.js';
import Project from "./Project.js";

export default function Portfolio(){
    return (
        <section id="portfolio" className="pt-36 pb-16 bg-slate-100">
            <div className="container">
                <div className="w-full px-4">
                    <div className="max-w-xl mx-auto text-center mb-16">
                        <h4 className="font-bold text-lg mb-2  text-primary">Portfolio</h4>
                        <h2 className="font-bold text-dark text-3xl mb-4">Project Terbaru</h2>
                        <p className="font-medium text-secondary">Berikut beberapa project yang telah saya buat dan selesaikan. Project yang saya buat dan selesaikan berasal dari perusahaan, perkuliahan maupun project buatan sendiri.</p>
                    </div>
                    <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
                    {Data.map((data)=>(
                        <Project name={data.nama} url={data.url} desc={data.desc}/>
                    ))}
                    </div>
                </div>
            </div>
        </section>
    )
}