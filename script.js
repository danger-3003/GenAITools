ScrollReveal().reveal('.reveal', {delay:1,easing:"ease-in-out",interval:0,scale:0.95,reset:true});
ScrollReveal().reveal('.rotate-div', {rotate: {x: 10,z: 10},reset:true,delay:1,origin:'left',delay:10,easing:'ease-in-out'});

var menu=document.getElementById("menu");
var button=document.getElementById("bars");
var nav=document.querySelectorAll(".nav");
var note=document.getElementById("Notice");
var cont=document.getElementById("continue");
button.addEventListener("click",()=>
{
    if(button.classList.contains("fa-bars"))
    {
        button.classList.replace("fa-bars","fa-times");
        menu.classList.replace("h-0","h-[10.5rem]");
        menu.classList.replace("-top-28","top-0");
        menu.classList.remove("opacity-0");
    }
    else
    {
        button.classList.replace("fa-times","fa-bars");
        menu.classList.replace("h-[10.5rem]","h-0");
        menu.classList.replace("top-0","-top-28");
        menu.classList.add("opacity-0");
    }
})
cont.addEventListener('click', ()=>
{
    note.classList.add("hidden");
})
