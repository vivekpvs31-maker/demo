
let student = {
    sid:10,
    sname : "Rahul",
    isplayer:false,
    skills : ['html', 'css' , 'js'],
    address :{
        city : "chennai",
        state : "Tamil Nadu",
        country : "India"
    }
}

console.log(student.sname);
console.log(student.sid);
console.log(student.address.state);

// ! how to modify

console.log(student);
student.sid=20
console.log(student);

// ! how to add a new key

student.phone = 8825533977
console.log(student);

//! how to delete

delete student.phone
console.log(student);

// ! methods 
// ! 1. objects.keys()

// it will return one array where all the keys will be present.

console.log(Object.keys(student));

// ! 2.objects.values()

// it will return one array where all the keys are present 

console.log(Object.values(student));

//! 3.object.entries()

// it will return one nested arry , where all the key value pairs will be stored in each indiviual arrays.

console.log(Object.entries(student));

// ! 4.object.freeze()

let pen ={
    color : "green",
    price : 50,

}
console.log(pen);
Object.freeze(pen)
console.log("after freez");

pen.price=100          // we can't change
pen.brand ="camlin"    // we can't add
delete pen.price       // we can't delete

// ! 5.

// ! 6. object.seal()

let laptop ={
    color:"gray",
    brand:"hp"
}
console.log(laptop);

console.log("after sealed")
Object.seal(laptop)

laptop.price=70000
delete laptop.brand
laptop.color="black"
console.log(laptop);

//! 7. object.issealed()

//! 
