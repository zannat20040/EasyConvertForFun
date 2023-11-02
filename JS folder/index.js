const getFromText = (event, text) => {
    event.preventDefault();
    document.getElementById('customDropDown1').querySelector('a').innerText = text
}
const getToText = (event, text) => {
    event.preventDefault();
    document.getElementById('customDropDown2').querySelector('a').innerText = text
}


document.getElementById('convert-btn').addEventListener('click', () => {

    // find - from which , user want to convert

    // const convertFrom = document.getElementById('convert-from').value
    const convertFrom = document.getElementById('customDropDown1').querySelector('a').innerText

    // find - to which , user want to convert
    const convertTo = document.getElementById('customDropDown2').querySelector('a').innerText

    // get user inputted number
    const fromValue = document.getElementById('from-value').value
    // convert the inputed value into decimal


    // render condition for hexa conversion
    if (convertFrom === 'Hexa') {
        const decimalValue = parseInt(fromValue, 16)
        handleAllConvert(convertTo, decimalValue)
    }
    // render condition for decimal conversion
    else if (convertFrom === 'Decimal') {
        const decimalValue = parseInt(fromValue, 10)
        handleAllConvert(convertTo, decimalValue)
    }
    // render condition for binary conversion
    else if (convertFrom === 'Binary') {
        const decimalValue = parseInt(fromValue, 2)
        handleAllConvert(convertTo, decimalValue)
    }
    // render condition for octa conversion
    else if (convertFrom === 'Octa') {
        const decimalValue = parseInt(fromValue, 8)
        handleAllConvert(convertTo, decimalValue)
    }



})

// function for hexa conversion
const handleAllConvert = (convertTo, decimalValue) => {
    if (convertTo === 'Decimal') {
        document.getElementById('to-value').value = decimalValue
    }
    else if (convertTo === 'Binary') {
        const binaryValue = decimalValue.toString(2)
        document.getElementById('to-value').value = binaryValue
    }
    else if (convertTo === 'Octa') {
        const octaValue = decimalValue.toString(8)
        document.getElementById('to-value').value = octaValue
    }
    else if (convertTo === 'Hexa') {
        const hexaValue = decimalValue.toString(16)
        console.log("Decimal to hexa:", hexaValue);
        document.getElementById('to-value').value = hexaValue
    }
    else {
        console.log('same type conversion')
    }
}

// get dropdown text

