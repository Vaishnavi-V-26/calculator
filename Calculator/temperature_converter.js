var valueInput = document.getElementById("valueToConvert");
var answer = document.getElementById("answer");
var solutionDiv = document.getElementById("solution");

function calculateTemperature(){
    var fromSelect = document.getElementById("from");
    var toSelect = document.getElementById("to");
    var fromValue = fromSelect.value;
    var toValue = toSelect.value;
    var value = parseFloat(valueInput.value);
    var solution = "";

    if(fromValue==="fahrenheit" && toValue==="celcius"){
        var celcius = (value-32)*(5/9);
        solution += `°C = (°F - 32) * 5/9 <br>`;
        solution += `°C = (${value}-32)*5/9 <br>`;
        solution += `°C = ${value-32} *0.555556 <br>`;
        solution += `°C = ${celcius.toFixed(3) }`;
        answer.value = celcius.toFixed(3)+"°C"; 
    }
    else if(fromValue==="fahrenheit" && toValue==="kelvin"){
        var kelvin = (value-32) * (5/9) + 273.15;
        solution += `K = (°F-32) * (5/9) + 273.15 <br>`;
        solution += `K = (${value}-32)*5/9 + 273.15 <br>`;
        solution += `K = (${value-32})*${5/9}+273.15 <br>`;
        solution += `K =${kelvin.toFixed(3)}`;
        answer.value = kelvin.toFixed(3)+" K";
    }
    else if(fromValue==="fahrenheit" && toValue==="fahrenheit"){
        answer.value = value+ "°F";
    }
    else if(fromValue==="celcius" && toValue==="fahrenheit"){
        var fahrenheit = (value*(9/5)) + 32;
        solution += `°F = °C(9/5) + 32 <br>`;
        solution += `°F = ${value}(9/5) + 32 <br>`;
        solution += `°F = ${value*(9/5)} + 32 <br>`;
        solution += `°F = ${fahrenheit.toFixed(3)}`;
        answer.value = fahrenheit.toFixed(3)+" °C";
    }
    else if(fromValue==="celcius" && toValue==="kelvin"){
        var celcius_kelvin = value + 273.15;
        solution += `K = °C + 273.15 <br>`;
        solution += `K = ${value} + 273.15 <br>`;
        solution += `K = ${celcius_kelvin.toFixed(3)}`;
        answer.value = celcius_kelvin.toFixed(3);
    }
    else if(fromValue==="celcius" && toValue==="celcius"){
        answer.value = value+ "°C";
    }
    else if(fromValue==="kelvin" && toValue==="fahrenheit"){
        var kelvin_fahrenheit = (value-273.15) * (9/5) + 32;
        solution += `°F = (K-273.15) * (9/5) + 32 <br>`;
        solution += `°F = (${value}-273.15) * (9/5) + 32 <br>`;
        solution += `°F = ${(value-273.15)} * ${(9/5)} + 32 <br>`;
        solution += `°F = ${(value-273.15) * (9/5)} + 32 <br>`;
        solution += `°F = ${kelvin_fahrenheit.toFixed(3)} `;
        answer.value = kelvin_fahrenheit.toFixed(3)+" °F";
    }
    else if(fromValue==="kelvin" && toValue==="celcius"){
        var kelvin_celcius = value - 273.15;
        solution += `°C = K - 273.15 <br>`;
        solution += `°C = ${value} - 273.15 <br>`;
        solution += `°C = ${kelvin_celcius.toFixed(3)}`;
        answer.value = kelvin_celcius.toFixed(3);
    }
    else if(fromValue==="kelvin" && toValue==="kelvin"){
        answer.value = value + " K";
    }
    else{
        solution.innerHTML="Invalid Conversion.";
    }
    solutionDiv.innerHTML=solution;

}

function clearAll(){
    valueInput.value="";
    answer.value="";
    solutionDiv.innerHTML = "";
    document.getElementById("from").value="";
    document.getElementById("to").value="";
}