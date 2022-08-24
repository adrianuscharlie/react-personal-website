const hamburger=document.querySelector('#hamburger');
const navMenu=document.querySelector('#nav-menu');
console.log(hamburger);
hamburger?.addEventListener('click',function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hiden');

})