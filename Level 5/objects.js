function isIdentical(pro1,pro2){

    //parameters should be objects
    if (typeof pro1 !== 'object' || typeof pro2 !== 'object' || pro1 === null || pro2 === null){
        console.warn('Parameters passed not an object');
        return false;
    }

//just a comment push

   //same reference
   if (pro1==pro2){
    return true;
   }

   if(pro1.name === pro2.name && 
    pro1.brand === pro2.brand && 
    pro1.price === pro2.price &&
    pro1['size-of-shirt'] === pro2['size-of-shirt']){
        return true;
   }else{
    return false;
   }
}

 


let product = {
    name: "Shirt" ,
    brand: "Mochino",
    price:  900,
    'size-of-shirt':   "M"
}

let product2 = {
    name: "Shirt" ,
    brand: "Mochino",
    price:  900.0,
    'size-of-shirt':   "M"
}


let copyProduct = {
    name: "Shirt" ,
    brand: "Mochino",
    price:  900,
    'size-of-shirt':   "M"
}

console.log(isIdentical(product,product2));
console.log(isIdentical(product,copyProduct)); 


console.log(product['size-of-shirt']);

let greeting = {
    message : 'good job',
    'status' :'complete' 
}
let message1 = greeting.message;
let status1 = greeting['status'];
console.log(message1);
console.log(status1);
let {message,status} = greeting;
console.log(message);
console.log(status);

let number = { value: 5 };
let number2 = number;
console.log(`number ${number.value}, number2 ${number2.value}`); 
number.value=15;
console.log(`number ${number.value}, number2 ${number2.value}`); 
