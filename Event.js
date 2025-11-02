
let viv = document.getElementById("viv")
console.log(viv);

viv.addEventListener("click",()=>{
    alert("viv has clicked")
})

let card5=document.querySelector(".card5")
card5.addEventListener("mouseover",()=>{
  card5.stylebackgroudcolor="green"
})

card5.addEventListener("mouseout",()=>
{
    card5.style.backgroundcolor="red"
})

//! form event

let form =document.querySelector("form")
console.log(form);
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let username=document.getElementById("username").value
    let userpass=document.getElementById("userpass").value
    console.log("submittrd......!");
    
})
