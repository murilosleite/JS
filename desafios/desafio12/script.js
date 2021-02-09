function verificar(){   
    var precoanterior = Number(window.prompt(`Qual era o preço anterior do produto?`))
    var precoatual = Number(window.prompt(`Qual era o preço atual do produto?`))
    res = window.document.querySelector("div#res")
    res.innerHTML = `<strong>Analisando os valores informados</strong><br>`
    res.innerHTML += `<p>O produto custava R$${precoanterior} e agora custa R$${precoatual} <br></p>`
    if (precoatual>precoanterior){
        res.innerHTML += `<p>Hoje o produto está mais caro.<br></p>`
        diferCaro = precoatual - precoanterior
        res.innerHTML += `<p>O preço subiu R$${diferCaro} em relação ao preço anterior <br></p>`
        variacao = (diferCaro / precoanterior) * 100
        res.innerHTML += `<p>Uma variação de ${variacao}% para cima <br></p>`
         
    } else {
        res.innerHTML += `<p>Hoje o produto está mais barato.<br></p>`
        diferBarato = precoanterior - precoatual
        res.innerHTML += `<p>O preço baixou R$${diferBarato} em relação ao preço anterior <br></p>`
        variacao2 = (diferBarato / precoanterior) * 100
        res.innerHTML += `<p>Uma variação de ${variacao2}% para baixo <br></p>`        
    }
}