function calcular(){   
    var a = Number(window.prompt(`Qual é o valor de a?`))
    var b = Number(window.prompt(`Qual é o valor de b?`))
    var c = Number(window.prompt(`Qual é o valor de c?`))
    res = window.document.querySelector("div#res")
    res.innerHTML = `<strong>Resolvendo Bhaskara</strong><br>`
    res.innerHTML += `<p>A equação atual é ${a}x2 + ${b}x + ${c} = 0 .<br></p>`
    res.innerHTML += `<p>O cálculo realizado será ${b}2 - 4.${a}.${c} <br></p>`
    resultado = (b*b) - (4*a*c)
    res.innerHTML += `<p>O valor calculado foi ${resultado}<br></p>`
    

    NovoSal = salario * (1+(percentualUP/100))
    diferenca = NovoSal - salario
    res.innerHTML += `<p>E a partir daí, ${funci} vai passar a ganhar ${NovoSal} <br></p>`
}