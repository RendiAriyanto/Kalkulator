const numbers = document.querySelectorAll(".number")

    numbers.forEach((number) => {
    numbers.addEventListener("click", ()=>{
        console.log("event.target.value")
    })
})
