function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var txtano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (txtano.value.length == 0 || Number(txtano.value) > ano){
        window.alert('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(txtano.value)
        var genero = ''
        var img = document.createElement ('img') //Criou uma tag <img> no arquivo modelo.HTML
        img.setAttribute('id','foto') //Atribuiu a tag <img> o id=foto
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 12){
                //Criança
                img.setAttribute('src','bebehomem.jpg') //Atribuiu a tag <img> o scr='bebehomem.jpg'
            } else if (idade < 21 ){
                //Jovem
                img.setAttribute('src','jovemhomem.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src','adultohomem.jpg')
            } else {
                //Idoso
                img.setAttribute('src','idosohomem.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 12){
                //Criança
                img.setAttribute('src','bebemulher.jpg') //Atribuiu a tag <img> o scr='bebehomem.jpg'
            } else if (idade < 21 ){
                //Jovem
                img.setAttribute('src','jovemmulher.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src','adultamulher.jpg')
            } else {
                //Idoso
                img.setAttribute('src','idosamulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
    
}