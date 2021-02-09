function converter(){
    var distM = Number(window.prompt(`Digite uma distância em metros (m)`))
    res = window.document.querySelector("div#res")
    res.innerHTML = `<strong>A distancia de ${distM} metros, corresponde a...</strong><br>`
    km = distM / 1000
    hm = distM / 100
    dam = distM / 10
    dm = distM * 10
    cm = distM * 100
    mm = distM * 1000
    res.innerHTML += `<p>${km} quilômetros (Km)<br></p>`
    res.innerHTML += `<p>${hm} hectômetros (Hm)<br></p>`
    res.innerHTML += `<p>${dam} decâmetros (Dam)<br></p>`
    res.innerHTML += `<p>${dm} decimetros (dm)<br></p>`
    res.innerHTML += `<p>${cm} centímetros (cm)<br></p>`
    res.innerHTML += `<p>${mm} milímetros (mm)<br></p>`
}