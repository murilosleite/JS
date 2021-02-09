function carrinho(){
    var produto = window.prompt("Que produto você está comprando?")
    var preco = Number(window.prompt(`Quanto custa ${produto} que você está comprando?`))
    var dinheiro = Number(window.prompt(`Qual foi o valor que você deu para pagar ${produto}`))
    troco = dinheiro - preco
    window.alert(`Você comprou ${produto} que custou ${preco}.\nDeu ${dinheiro} em dinheiro e vai receber ${troco} de troco.\nVolte sempre!`)
}