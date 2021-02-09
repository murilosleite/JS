var botao = document.querySelector('button')
botao.innerHTML = 'Mudar COR'

var h1 = document.querySelector('h1')
// h1.style.display = 'none'

//botao.addEvenListener('mouseover', function(){
    //h1.style.display = 'none'
    //h1.style.opacity = 0.1
//})

botao.addEventListener('click', clicar)

function clicar(){
    var cor = document.querySelector('#cor').value
    document.querySelector('body').style.backgroundColor = cor
}





