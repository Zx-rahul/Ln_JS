// let multi= (num1,num2) => num1*num2;
// let multply= multi(1,2);
// console.log(multply);

// let doGreeting= () => console.log('Namaste')
// let runTwice= inputFunction => {
//     inputFunction();
//     inputFunction();
// }

// runTwice(doGreeting);

let buttonElement= document.querySelector('.double');
console.log(buttonElement);
buttonElement.addEventListener('click', event => {
    setTimeout(()=>buttonElement.classList.add('do-double'),6000);
})


let arr=[1,3,4,6,8,8];
let sum=0;
arr.forEach(num => sum+=num);
console.log(sum);
let squares=arr.map(num=> num*num);
console.log(squares);