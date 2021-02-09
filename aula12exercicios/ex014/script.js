function carregar(){
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img#imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 20
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        //Bom dia
        img.src = 'manhaweb.jpg'
        document.body.style.background ='#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        //Boa tarde
        img.src = 'tardeweb.jpg'
        document.body.style.background ='#e2cd9f'
    } else {
        //Boa noite 
        img.src = 'noiteweb.jpg'
        document.body.style.background ='#515154'
    }
}
