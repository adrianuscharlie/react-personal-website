import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
window.onscroll=function(){
  const header=document.querySelector('header');
  const fixnav=header.offsetTop;
  
  if(window.pageYOffset>fixnav){
    header.classList.add('navbar-fixed');
  }else{
    header.classList.remove('navbar-fixed');
  }
}




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

