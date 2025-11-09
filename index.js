/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const convertBtn = document.getElementById("convert-btn")
lengthString = document.getElementById("meter-feet")
volumeString = document.getElementById("liter-gallon")
massString = document.getElementById("kg-lb")

convertBtn.addEventListener("click", function() {
    const inputValue = document.getElementById("number")
    const value = Number(inputValue.value)
    if (Number.isInteger(value)) {
        const feet = (value * 3.281).toFixed(3)
        const meter = (value * 0.3048).toFixed(3)
        const gallon = (value * 0.264).toFixed(3)
        const liter = (value * 3.78541).toFixed(3)
        const pound = (value * 2.204).toFixed(3)
        const kilo = (value * 0.453592).toFixed(3)
        lengthString.innerHTML = `${value} meters = ${feet} feet | ${value} feet = ${meter} meters`
        volumeString.innerHTML = `${value} liters = ${gallon} gallons | ${value} gallons = ${liter} liters`
        massString.innerHTML = `${value} kilos = ${pound} pounds | ${value} pounds = ${kilo} kilos`
        
            
    }
    
    
    
    
})
