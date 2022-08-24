import React from "react";
export default function Skills(){
    return (
        <section id="skills" className="pt-36 pb-32 bg-slate-800">
        <div className="container">
            <div className="w-full px-4">
                <div className="mx-auto text-center mb-16">
                    <h4 className="font-semibold text-lg text-primary mb-2">Skills</h4>
                    <h2 className="font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xll">Skills that i have</h2>
                    <p className="font-medium text-md text-secondary">
                    The skills I have are that I master frontend web programming using react.js, backend using node.js. I'm also good at developing machine learning using tensorflow. Lately, I'm learning to make apps using flutter
                    </p>
                </div>
            </div>
            <div className="w-full px-4">
                <div className="flex flex-wrap items-center justify-center">
                    <a target={'_blank'} href="https://www.python.org/" className="max-w-[120px] mx-4 py--4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                        <img src="https://seeklogo.com/images/P/python-logo-A32636CAA3-seeklogo.com.png"alt="Python"/>
                    </a>
                    <a target={'_blank'} href="https://reactjs.org/" className="max-w-[120px] mx-4 py--4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"alt="React.js" />
                    </a>
                    <a target={'_blank'} href="https://www.tensorflow.org/" className="max-w-[120px] mx-4 py--4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/1200px-Tensorflow_logo.svg.png"alt="Tensorflow" />
                    </a>
                    <a target={'_blank'} href="https://flutter.dev/" className="max-w-[120px] mx-4 py--4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                        <img src="https://iconape.com/wp-content/files/yb/61798/svg/flutter-logo.svg"alt="Flutter" />
                    </a>
                    <a target={'_blank'} href="https://www.java.com/en/" className="max-w-[120px] mx-4 py--4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                        <img src="https://seeklogo.com/images/J/java-logo-7F8B35BAB3-seeklogo.com.png"alt="Java" />
                    </a>
                </div>
            </div>
        </div>
    </section>
    )  
}