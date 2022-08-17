import React from "react";

export default function Navbar(){
  return (
    <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
        <div className="container">
            <div className="flex items-center justify-between relative">
              <div className="px-4">
                <a href="#home" className="font-bold text-primary  text-lg block py-6">Adrianus Charlie</a>
              </div>
              <div className="flex items-center px-4">
                <button id="hamburger" name="hamburger" type="button" className="block absolute right-4">
                  <span className="hamburger-line"></span>
                  <span className="hamburger-line"></span>
                  <span className="hamburger-line"></span>
                </button>
              </div>
            </div>
        </div>
    </header>
  )
}

const hamburger=document.querySelector('#hamburger');
hamburger.addEventListener('click',function(){
  hamburger.classList.toggle('hamburger-active')
})