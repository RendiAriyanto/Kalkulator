const calculatorScreen = document.querySelector(`calculator-screen`);

const updateScreen = (number) =>{
    calculatorScreen.value = number;
}

let prevNumber = ``;
let calculationOperator = ``;
let currentNumber = `0`;
const numbers = document.querySelectorAll(".number");
const inputNumber = (number) =>{
 curentNumber += number;   
}
    numbers.forEach((number) => {
    numbers.addEventListener("click", (event)=>{
        console.log(event.target.value);
        updateScreen(currentNumber);
    });
});
