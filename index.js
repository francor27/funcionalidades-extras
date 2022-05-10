// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

//asi se agrega un pollyfills de manera manual

Number.prototype.multiplicar = function (num) {
  let accu = 0
  
  for(let i = 0; i < num; i++) {
    accu += this
  }
  
  return accu
}


const myNum = 5
const myNum2 = 10

const result = myNum.multiplicar(5)
const result2 = myNum2.multiplicar(20)

console.log(result)
console.log(result2)
