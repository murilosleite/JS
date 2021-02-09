function gerar(){
    let casa = window.document.getElementById('casa')
    let tab = document.getElementById('seltab')
    
    if (casa.value.length == 0){
        window.alert('Por favor, digite um número')
    } else {
        var house = Number(casa.value)
        tab.innerHTML=''
        for (var c = 1; c <= 10; c++){
            let item = document.createElement('option') //Cria um option dentro do select
            item.text = `${house} x ${c} = ${house*c}` //Gera o resultado na parte de dentro do option
            item.value = `tab${c}`
            tab.appendChild(item) //Adiciona o elemento filho(item) no select(tab)
        }
    
      }    
}