function carregar(){
    cotacao = Number(window.prompt(`Antes de mais nada. Quanto está a cotação do dolár agora?`))
    return cotacao
}

function converter(){   
    var realBR = Number(window.prompt(`Quantos reais você tem na carteira?`))
    res = window.document.querySelector("div#res")
    res.innerHTML = `<strong>O valor de R$${realBR} reais, corresponde a...</strong><br>`
    
    Dolar = realBR / cotacao
    res.innerHTML += `<p>${Dolar} dolares <br></p>`
}