
let takedata="outer">{
   //  console.log(data)
   let input = document.querySelector("input")
   input.value+=data
}

let calculate =()=>{
    let inputvalue = document.querySelector("input").value
    console.log(inputvalue);
    let ans = eval(inputvalue)  // ! important
    document.querySelector("input").value=ans;
    
}

let clearscreen=()=>{
    document.querySelector("input").value=""
}

let remove =()=>{
    let inputvalue = document.querySelector("input").value
    let data = inputvalue.slice(0,-1)
    // console.log()
}