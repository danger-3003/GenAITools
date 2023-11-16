var insta = document.getElementById("instagram");
var linked = document.getElementById("linkedin");
var git = document.getElementById("github");

function unhide(idname)
{
    if(idname.classList.contains("-z-10"))
    {
        idname.classList.replace("bottom-0","bottom-[100%]");
        idname.classList.replace("opacity-0","opacity-100");
        idname.classList.replace("-z-10","z-10");
    }
    else
    {
        idname.classList.replace("bottom-[100%]","bottom-0");
        idname.classList.replace("opacity-100","opacity-0");
        idname.classList.replace("z-10","-z-10");
    }
}
function close_rem(idname)
{
    idname.classList.replace("bottom-[100%]","bottom-0");
    idname.classList.replace("opacity-100","opacity-0");
    idname.classList.replace("z-10","-z-10");
}
var instaacc=document.getElementById("insta-acc");
var gitacc=document.getElementById("git-acc");
var linkacc=document.getElementById("linked-acc");
insta.addEventListener('click',()=>
{
    unhide(instaacc);
    close_rem(gitacc);
    close_rem(linkacc);
})
linked.addEventListener('click',()=>
{
    unhide(linkacc);
    close_rem(gitacc);
    close_rem(instaacc);
})
git.addEventListener('click',()=>
{
    unhide(gitacc);
    close_rem(instaacc);
    close_rem(linkacc);
})