import React from  'react';


export default function Project(props){
    return (
        <div className="mb-4 p-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden">
                <img src={props.url}alt="landing page"/>
            </div>
            <h3 className="font-semibold text-xl text-dark mt-5 mb-3">{props.name}</h3>
            <p className="font-medium text-base text-secondary">{props.desc}</p>
        </div>
    )
}