function contar(){
    var txtinicio = document.getElementById('txtinicio')
    var txtfim = document.getElementById('txtfim')
    var txtpasso = document.getElementById('txtpasso')
    var res = document.querySelector('div#res')
    
    if (txtinicio.value.length == 0 || txtfim.value.length == 0 || txtpasso.value.length == 0){
        window.alert('[ERRO] Faltam dados!!!')
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(txtinicio.value)
        var f = Number(txtfim.value)
        var p = Number(txtpasso.value)
        if (p <= 0 ){
            window.alert('Passo inválido. Considerando Passo igual a 1')
            p = 1
        }
        if (i < f) { 
            // Contagem crescente
            for (var c = i; c <= f; c+=p){
                res.innerHTML += `${c} \u{1F449} ` //www.unicode.org
            }
        } else {
            // Contagem decrescente
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3c1}`
      }

}
