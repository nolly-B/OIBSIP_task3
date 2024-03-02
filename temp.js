let celsiusField= document.querySelector("#celsius");
let fahrenheitField= document.querySelector("#fahrenheit");
let degreeInput= document.querySelector("#degree");
let convertButton= document.querySelector("#button");
let tempType= document.querySelector("#temp-type");

window.addEventListener("load", () => {
    degree.value = "";
    celsiusField.innerHTML= "";
})
convertButton.addEventListener("click", (e) => {
    e.preventDefault();
    convertToCelsius();
    
    
})
function convertToCelsius() {
    let input= degreeInput.value;

    if (tempType.value === "Fahrenheit") {
        let fahrenheitToCelsius = Math.round((input - 32)* (5/9));
        celsiusField.innerHTML= `${fahrenheitToCelsius} ℃`
    }
    else if (tempType.value === "Celsius") {
        let celsiusToFahrenheit = Math.round((input * 9/5) +32 );
        celsiusField.innerHTML= `${celsiusToFahrenheit} F`
        
    } 
}

    

