function reajustar(){   
    var funci = window.prompt(`Qual é o nome do funcionário?`)
    var salario = Number(window.prompt(`Qual é o salário de ${funci}?`))
    var percentualUP = Number(window.prompt(`O salário de ${funci} vai ser reajustado em qual porcentagem(%)?`))
    res = window.document.querySelector("div#res")
    res.innerHTML = `<strong>${funci} recebeu um aumento salarial</strong><br>`
    res.innerHTML += `<p>O salário atual era R$${salario}.<br></p>`
    NovoSal = salario * (1+(percentualUP/100))
    diferenca = NovoSal - salario
    res.innerHTML += `<p>Com um aumento de ${percentualUP}%, o salário vai aumentar R$${diferenca} no próximo mês<br></p>`
    res.innerHTML += `<p>E a partir daí, ${funci} vai passar a ganhar ${NovoSal} <br></p>`
}