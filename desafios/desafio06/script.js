function converter(){
    var tempC = Number(window.prompt(`Digite uma temperatura em ºC (Celsius)`))
    res = window.document.querySelector("div#res")
    res.innerHTML = `<strong>A temperatura de ${tempC}ºC, corresponde a...</strong><br>`
    K = tempC + 273,15
    F = (tempC * 1.8) + 32
    
    res.innerHTML += `<p>${K}ºK (Kelvin)<br></p>`
    res.innerHTML += `<p>${F}ºF (Fahrenheit)<br></p>`
}