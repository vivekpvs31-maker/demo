

FormData.addeventlistener("submit",(e)=>{
    e.preventdefault()
    let num1 = parseInt (document.getElementById("num1").value)
    let num2 = parseInt (document.getElementById("num2").value)

    let sum=num1+num2

    let output = document.querySelector(".output")
    output.innerHTML=`<h1>the addition of $ {num1} and {num2} is ${sum}</h1>`
    console.log("done")
})

let select =document.querySelector("select")

select.addeventlistener("change",(e)=>{
    // console.log(e.target.value)

    document.body.style.backgroundColor = e. target.value
    console.log('changing....')
})