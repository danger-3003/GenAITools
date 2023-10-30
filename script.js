ScrollReveal().reveal('.reveal', {delay:0,easing:"ease-in-out",interval:10,scale:0.9,reset:true});

var menu=document.getElementById("menu");
var button=document.getElementById("bars");
var nav=document.querySelectorAll(".nav");
var note=document.getElementById("Notice");
var cont=document.getElementById("continue");
// nav.forEach(element=>{
//     element.addEventListener('click',()=>
//     {
//         if(button.classList.contains("fa-times"))
//         {
//             button.classList.replace("fa-times","fa-bars");
//             menu.classList.replace("h-[10.5rem]","h-0");
//             menu.classList.replace("top-0","-top-28");
//             menu.classList.add("opacity-0");
//         }
//     })
// })
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
