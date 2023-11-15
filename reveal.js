var insta=document.getElementById("instagram");
var git=document.getElementById("github");
var link=document.getElementById("linkedin");
console.log(insta,git,link);
function toggle(variable)
{
    document.getElementBy("body").addEventListener('click',()=>{
        variable.classList.replace("block","hidden");
    })
}
insta.addEventListener('click',()=>
{
    let insta_acc=document.getElementById("insta-acc");
    if(insta_acc.classList.contains("hidden"))
    {
        insta_acc.classList.replace("hidden","block");
    }
    else
    {
        toggle(insta_acc);
    }
})