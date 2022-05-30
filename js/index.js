import { validate } from "./validation.js"


const inputs = document.querySelectorAll("input");

//this function receives all inputs typed in the contact form and send them to a validation function 

inputs.forEach(input => {

    input.addEventListener("blur", (event) => {
        validate(event.target);
    })

})

const productClick = document.querySelector("[data-product-button]");

productClick.addEventListener("click", () => {
    alert("fuii clicado")

})

