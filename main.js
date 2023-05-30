
const inputName = document.querySelector("#input-nombre");
const inputNumber = document.querySelector("#input-number");
const inputMonth = document.querySelector("#input-mes");
const inputYear = document.querySelector("#input-año");
const inputCVC = document.querySelector("#input-cvc");
const cardNumber = document.querySelector("#numeros-frente");
const cardName = document.querySelector("#titular");
const cardMonth = document.querySelector("#exp-mes");
const cardYear = document.querySelector("#exp-año");
const cardCVC = document.querySelector("#tarjeta-cvc");
const form = document.querySelector("#form");
const thankYou = document.querySelector("#gracias");
const buttonContinue = document.querySelector("#continue");



inputName.addEventListener("input", () => {
    cardName.innerText = inputName.value;

    if (inputName.value.length === 0) {
        cardName.innerText = "Jane Appleseed";
    }

    inputName.addEventListener('input', function () {
        if (this.value.length > 24)
            this.value = this.value.slice(0, 24);
    })
})

inputNumber.addEventListener("input", () => {
    cardNumber.innerText = inputNumber.value;

    if (inputNumber.value.length === 0) {
        cardNumber.innerText = "0000 0000 0000 0000";
    }

    inputNumber.addEventListener('input', function () {
        if (this.value.length > 16)
            this.value = this.value.slice(0, 16);
    })

})

inputMonth.addEventListener("input", () => {
    cardMonth.innerText = inputMonth.value;

    if (inputMonth.value.length === 0) {
        cardMonth.innerText = "00";
    }

    inputMonth.addEventListener('input', function () {
        if (this.value.length > 2)
            this.value = this.value.slice(0, 2);
    })
})

inputYear.addEventListener("input", () => {
    cardYear.innerText = inputYear.value;

    if (inputYear.value.length === 0) {
        cardYear.innerText = "00";
    }

    inputYear.addEventListener('input', function () {
        if (this.value.length > 2)
            this.value = this.value.slice(0, 2);
    })
})

inputCVC.addEventListener("input", () => {
    cardCVC.innerText = inputCVC.value;

    if (inputCVC.value.length === 0) {
        cardCVC.innerText = "000";
    }

    inputCVC.addEventListener('input', function () {

        if (this.value.length > 3)
            this.value = this.value.slice(0, 3);
    })

})
