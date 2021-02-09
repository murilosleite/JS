function descontar(){   
    var produto = window.prompt(`Qual é o produto que você está comprando?`)
    var preco = Number(window.prompt(`Qual é o preço de ${produto}?`))
    res = window.document.querySelector("div#res")
    res.innerHTML = `<strong>Calculando desconto de 10% para ${produto}</strong><br>`
    res.innerHTML += `<p>O preço original era R$${preco}.<br></p>`
    desconto = preco * (10/100)
    res.innerHTML += `<p>Você acaba ganhar R$${desconto} de desconto (-10%).<br></p>`
    precofinal = preco - desconto
    res.innerHTML += `<p>No fim, você vai pagar R$${precofinal} no produto ${produto}.<br></p>`
}