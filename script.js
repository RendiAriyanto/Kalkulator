const calculatorScreen = document.querySelector(`calculator-screen`);

const updateScreen = (number) =>{
    calculatorScreen.value = number;
}


const numbers = document.querySelectorAll(".number");

    numbers.forEach((number) => {
    numbers.addEventListener("click", (event)=>{
        console.log(event.target.value);
        updateScreen(currentNumber);
    });
});
let prevNumber = ``;
let calculationOperator = ``;
let currentNumber = `0`;
const inputNumber = (number) =>{
 curentNumber += number;   
}
