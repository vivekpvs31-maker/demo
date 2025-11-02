// -- Annonymus function
// function(){
//     console.log("hiii")
// }

// function namedFunction(){
//     console.log("i am named function")
// }

//-- NamedFunction()
//-- function with expression

// let iamFunctionwithExpression=function(){
//         console.log("i am function with Expression");
//  }

//  iamFunctionwithExpression()

//  let iamfunwexpress=function abc(){
//     console.log("i am also function with expression");
//  }
//  iamfunwexpress()

//  let vivek=function(){
//     console.log("i am vivek");
//  }
//  vivek()

//-- IIFE -Immedietly Invoked Function XPathExpression

(
    function (){
        console.log("i am IIFE");
    }
)()

let arrow = () =>{
    console.log("I am Arrow Function");
}
arrow()

let arrowwithoutcurlyBracess=() => console.log("I Am Also Arrow Function");

arrowwithoutcurlyBracess()

let arrowwithargument=(a,b)=> console.log(a+b);

arrowwithargument(10,20)

let singleargument=a=>console.log(a*2);

singleargument(10)

let arrowwithReturn= (a,b)=>{
    console.log(a);
    console.log(b);

    return a*b
}
console.log(arrowwithReturn(10,5));

let subarrow=(a,b)=>a-b
console.log(subarrow(20,5));

let cubearrow=a=>a*a*a
console.log(cubearrow(10));