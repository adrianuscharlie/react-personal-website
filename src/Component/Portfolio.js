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
                        <h2 className="font-bold text-dark text-3xl mb-4">My latest project</h2>
                        <p className="font-medium text-secondary">
                        Here are some projects that I have created and completed. The projects that I create and complete come from companies, lectures or self-made projects.</p>
                    </div>
                    <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
                    {Data.map((data)=>(
                        <Project name={data.name} url={data.url} desc={data.desc} github={data.github}/>
                    ))}
                    <a target={'_blank'} href={"https://github.com/adrianuscharlie"} className="text-base text-white font-semibold bg-teal-500 py-3 px-8 rounded-full
                        hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">More Project? Visit My Github Now!</a>
                    </div>
                </div>
            </div>
        </section>
    )
}