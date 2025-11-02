
let arr = [10 , true , "html",[20,"css"]]

console.log(arr)

console.log(arr[2])

// !  length

console.log(arr.length)


// !  array methods 

// ! 1. push()

let marks = [80,90,67,88]

marks.push(99)

console.log(marks)

// ! 2. pop() (remove last element)

let fruits = ['apple','banana','orange','lemon',]

fruits.pop()

console.log(fruits)

//!  3. unshift()
document.getElementById("viv").innerHTML = 'vicky'
let cartoons = ['tom','jerry','doreamon']

cartoons.unshift("ben10")

console.log(cartoons)

// ! 4. shift()

let laptops = ['hp','lenovo','acer','dell']

laptops.shift()

console.log(laptops)

// ! 5. includes()

// it is used to know the given element is present or not, if the element is present it will return true else it will return false.

console.log(laptops.includes("dell"))
console.log(laptops.includes("hp"))

// ! 6. indexOf()

let numbers = [10,20,30,40,20,30,10,15]

console.log(numbers.indexOf(20))

// ! 7. lastIndexOf()

console.log(numbers.lastIndexOf(20))

// ! 8. reverse()

numbers.reverse()

console.log(numbers)

// ! 9. concat()

let sub1 = ["html","css","js"]
let sub2 = ["java","python"]

console.log(sub1.concat(sub2))

// 10.splice()  ---(add,delete,replace)

let arr2=[10,20,30,40,50,60]
arr2.splice(1,3)
console.log(arr2);

let arr3=[10,20,30,40,50,60]
arr3.splice(1,3,1000)   // (start index,count,replace)
console.log(arr3);

// map()

let arr4 =[100,200,300,400,500,600]

arr4.map((ele,index,a)=>{
    console.log(ele,index,a);
    
})

// let m = arr5.map((ele)=>{
//     return ele + 2
// })

// console.log(m)

let subs = ['html','css', 'js', 'python', 'java']

let upper = sub1.map((ele)=>{
    return ele.toUpperCase()
})

console.log(upper)

let grater= arr4.filter((ele)=>{
    return ele > 300
})

console.log(grater);

// reduce ()

let total = arr4.reduce((acc,ele)=>{
    return acc + ele
},0)

console.log(total)
