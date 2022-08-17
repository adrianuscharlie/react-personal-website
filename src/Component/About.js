import React from "react";
import Data from "../SocialsData";
import Social from "./Socials";
export default function About(){
    return (
        <section id="about" className="pt-36 pb-32">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full px-4 mb-10 lg:w-1/2">
                        <h4 className="font-bold uppercase text-primary text-lg mb-3">About Me</h4>
                        <h2 className="font-bold text-dark mb-5 text-3xl max-w-xl lg:text-4xl">Mari belajar coding bersama saya</h2>
                        <p className="font-medium text-base  text-secondary max-w-xl lg:text-lg">Have a strong desire, a high curiosity, good management and want to learn new things. I'm interested in some programming languages like Java, Python and Web Development using Java and Bootstrap. Im enthusiast with Machine Learning and already develop some Machine Learning project using Tensorflow. Lately, I've been studying Software Engineering using Flutter and developing some Apps Project</p>
                    </div>
                    <div className="w-full px-4 mb-10 lg:w-1/2">
                        <h3 className="font-semibold text-dark text-2xl mb-4 lg:text-3xl lg:pt-10">Mari Berteman</h3>
                        <p className="font-medium text-base text-secondary mb-6">If you want to know more about me, you can find me in this social media by clicking these button below:</p>
                        <div className="flex items-center">
                        {Data.map((data)=>(
                            <Social name={data.nama} url={data.url} path={data.path}/>
                        ))}
                    </div>
                    </div>
                    
                </div>
            </div>        
        </section>
    )
}