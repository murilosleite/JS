function calculamedia(){   
    var nome = window.prompt(`Qual é o nome do aluno?`)
    var nota1 = Number(window.prompt(`Primeira nota de ${nome}:`))
    var nota2 = Number(window.prompt(`Segunda nota de ${nome}:`))
    media = (nota1 + nota2)/2
    res = window.document.querySelector("div#res")
    res.innerHTML = `<strong>Analisando a sitação de ${nome}</strong><br>`
    if (media<3){
        res.innerHTML += `<p>Com as notas ${nota1} e ${nota2}, a média é ${media} <br></p>`
        res.innerHTML += `<p>Como a média está abaixo de 3,0, o aluno está REPROVADO<br></p>`
    } else if (media<6) {
        res.innerHTML += `<p>Com as notas ${nota1} e ${nota2}, a média é ${media} <br></p>`
        res.innerHTML += `<p>Como a média está entre 3,0 e 6,0, o aluno está RECUPERAÇÃO<br></p>`
    } else {
        res.innerHTML += `<p>Com as notas ${nota1} e ${nota2}, a média é ${media} <br></p>`
        res.innerHTML += `<p>Como a média está acima de 6,0, o aluno está APROVADO<br></p>`
    }
    
}