const numberInput = document.getElementById("number-input")
const lengthConversion = document.getElementById("length-conversion")
const volumeConversion = document.getElementById("volume-conversion")
const massConversion = document.getElementById("mass-conversion")


function multiply (input, multiplicand) { 
    let result = (input * multiplicand).toFixed(3);
    return result;
}

function calcLength(){
    const metersToFeet = multiply(numberInput.value,0.3048)
    const feetToMeters = multiply(numberInput.value,3.28084)
    return ` ${numberInput.value} meter(s) = ${feetToMeters} feet | ${numberInput.value} feet = ${metersToFeet} meter(s)`
}

function calcVolume() {
    const litersToGallons = multiply(numberInput.value, 3.78541)
    const gallonsToLiters = multiply(numberInput.value, 0.264172)

    return` ${numberInput.value} liter(s) = ${litersToGallons} gallon(s) | ${numberInput.value} gallon(s) = ${gallonsToLiters} liter(s)`
}

function calcMass() {
    const kilosToPounds = multiply(numberInput.value, 2.20462)
    const poundsToKilos = multiply(numberInput.value, 0.453592)

    return` ${numberInput.value} kilo(s) = ${kilosToPounds} pound(s) | ${numberInput.value} pound(s) = ${poundsToKilos} kilo(s)`
}


document.addEventListener("input", function convertUnit(){
    lengthConversion.textContent = calcLength()
    volumeConversion.textContent = calcVolume()
    massConversion.textContent = calcMass()
}
)

convertUnit()
