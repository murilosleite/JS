//DOCUMENT.WRITE: INSERE DADOS NO ARQUIVO INDEX.HTML VIA JS
//document.write("Meu primeiro arquivo da biblioteca")
//document.write("<p style='color:#f00'> Meu primeiro arquivo da biblioteca</p>")
/*var msg = "Minha biblioteca"
var ano = 2021
var num = 10
document.write(msg + "<br>" + ano + "<br>")
document.write(msg + "<br>" + (ano + num))*/

//WINDOW.ALERT: INSERE DADOS EM FORMA DE POP-UP, COM DADOS CONCATENADOS
/*var msg = "Minha biblioteca "
var curso = "Curso de JS"
const separador = " - "
const quebra = "\n"
var ano = 2021
window.alert(msg + separador + curso + quebra + ano)*/

//WINDOW.PROMPT: INSERE DADOS EM FOR DE POP-UP COM UMA CAIXA DE TEXTO PARA LER DADOS
/*var nome = window.prompt("Digite seu nome: ", "Seu nome aqui")
    document.write(nome)*/

//WINDOW.CONFIRM: INSERE DADOS EM FOR DE POP-UP COM A OPÇÃO DE CONFIRMA, TRUE OU FALSE
/*var res = window.confirm("Deseja continuar?")
    document.write(res)*/
//NUMBER: CONVERTE STRING EM NUMBER PARA PODER FAZER A SOMA
/*var n1 = Number(window.prompt('Digite um número: '))
var n2 = Number(window.prompt('Digite outro número: '))
var s = n1 + n2
    window.alert(`A soma dos valores é: ${s}`)*/

//COMANDO PARA DIZER A QUANTIDADE DE LETRAS E COLOCAR A PALAVRA TODA EM MAIUSCULA
/*var nome = window.prompt('Qual seu nome?')
    document.write(`Olá, <strong>${nome}! Seu nome  tem ${nome.length} letras.<br>`)
    document.write(`Seu nome em maiúsculo é ${nome.toUpperCase()} letras.`)*/

//USANDO O DOM PARA MANIPULAR ELEMENTOS NO HTML
//var d = window.document.querySelector('div#msg') //# para Id
//var d = window.document.querySelector('div.msg') //. para class
//var d = window.document.getElementById('msg')
//var d = window.document.getElementsByClassName('msg')
//var d = window.document.getElementsByName('msg')[0]
//var d = window.document.getElementsByTagName('p')[0]

//EVENTOS
/*var a = window.document.getElementById('area')
    a.addEventListener('click', clicar)
    a.addEventListener('mouseenter', entrar)
    a.addEventListener('mouseout', sair)
    function clicar() {
        a.innerText = 'Clicou'
    }
    function entrar(){
        a.innerText = 'Entrou'
    }
    function sair(){
        a.innerText = 'Sair'
        a.style.background = 'green'
    }*/

//CONSOLE.LOG: MOSTRA O RESULTADO NO NODE.JS SEM PRECISAR ABRIR O NAVEGADOR WEB
/*var vel = 200
    console.log(`A velocidade do seu carro é de ${vel}km/h`)
    if (vel > 60){
    console.log('Você atingiu o limite de velocidade')
    }
    console.log('Dirija sempre usando sinto de segurança')*/

//res.innerHTML: INSERE TEXTO HTML ATRAVÉS DA VARIAVEL SELECIONADA
/*var txtv = window.document.querySelector('input#txtvel')
var res = window.document.querySelector('div#res')
var vel = Number(txtv.value)
    res.innerHTML = `<p>Sua velocidade atual é ${vel} Km/h</p>`
    if (vel > 60){
        res.innerHTML += '<p>Você está <strong>multado</strong> por excesso de velocidade</p>'
    }
    res.innerHTML += '<p>Dirija sempre com sinto de segurança</p>'
}*/

//IF's ANINHADOS
/*var idade = 100
console.log(`Você tem ${idade} anos.`)
if(idade < 16) {
    console.log('Não Vota')
 } else if (idade < 18 || idade > 67) {
        console.log('Voto opcional')
    } else {
        console.log('Voto obrigatório')     
}*/

//PEGA A HORA/DATA ATUAL DO SISTEMA
/*var agora = new Date()
var hora = agora.getHours()
    console.log(`Agora são exatamente ${agora}`)
    console.log(`Agora são ${hora} horas`)*/

//SWITCH-CASE
/*var agora = new Date()
var diaSem = agora.getDay()
    console.log(diaSem)
    switch (diaSem){
        case 0: 
            console.log('Domingo')
            break
        case 1: 
            console.log('Segunda-feira')
            break
        case 2: 
            console.log('Terça-feira')
            break
        case 4: 
            console.log('Quarta-feira')
            break
        case 5: 
            console.log('Quinta-feira')
            break
        case 6: 
            console.log('Sexta-feira')
            break
        case 7: 
            console.log('Sábado ')
            break
        default:
            console.log('Dia inválido')    
    }*/

//WHILE
/*var  c = 1 
while (c <= 5){
    console.log(`Passo ${c}`)
    c++
}*/

//DO-WHILE
/*var  c = 1 
    do {
        console.log(`Passinho ${c}`)
        c++
    } while (c <= 5)*/

//FOR
/*for (var c = 1; c <= 5; c++){
    console.log(`Passo ${c}`)
}*/

//CRIA VALORES DENTRO DE UMA TABELA NO HTML
/*function gerar(){
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
}*/

//VETOR
/*
//EXEMPLO 01
let num = [5,8,2,9,3]
num[5] = 6
num.push(7)
console.log(`Nosso vetor é o ${num}`)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O primeiro vetor é ${num[0]}`)
console.log(`O vetor em ordem crescente é ${num.sort()}`)*/
//EXEMPLO 02
/*let valores = [8, 9, 7, 4, 2, 3]
valores.sort()
console.log(valores)

for (let pos = 0; pos<valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/

//EXEMPLO 03
/*'for (let pos in valores){ //Para cada posição em   'valores', mostre 'valores[pos]'
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
console.log(`O valor 9 está na posição ${valores.indexOf(9)}`)*/

//SWITCH É CHAMADO A PARTIR DO RESULTADO DA ESTRUTURA DE CONDIÇÃO IF
/*var pos, msg, pontos
pontos = 1001
if (pontos >= 1000){
    pos = 1
} else if (pontos >= 800){
    pos = 2
} else if (pontos >= 600){
    pos = 3
} else {
    pos = 0
}
switch (pos){
    case 1:
        msg = "Primeiro Lugar <br> Medalha de Ouro" 
        break
    case 2: 
        msg = "Segundo Lugar <br> Medalha de Prata"
        break
    case 3:
        msg = "Terceiro Lugar <br> Medalha de Bronze"
        break
    default:
        msg = "Não foi ao pódio <br> Não obteve medalha" 
}
switch (pos){
    case 1:
    case 2:
    case 3:
        msg += "<br>Subiu ao pódio"
        break
    default:
        msg += "<br>Não obteve colocação"
}
document.write(msg)*/

//VETOR COM METODO PUSH
/*var cor = []
cor[0]="Preto"
cor[1]="Branco"
cor[2]="Vermelho"
cor[3]="Verde"
cor[4]="Azul"
cor.push("Rosa")
document.write(cor)*/

//CONCATENAÇÃO DE VETORES E METODOS (UNSHIFT, POP, SHIFT)
/*var itens = ["Faca","Pederneira","Corda","Lanterna","Luvas","Chave de Fenda","Arame"]
/*var mochila = []
mochila.push("Faca")
mochila.push("Corda")
mochila.push("Pederneira")
mochila.push("Chave")
mochila.push("Lanterna") //insere no final
mochila.unshift("Pedra") //insere no começo
mochila.pop() //remove do final
mochila.shift() //remove do começo
document.write(mochila[0] + "<br>")
document.write(mochila[1] + "<br>")
document.write(mochila[2] + "<br>")
document.write(mochila[3] + "<br>")
document.write(mochila[4] + "<br>")
document.write(mochila[5] + "<br>")*/

//VETOR COM METODO SPLICE
/*var mochila = []
mochila.push("Faca")
mochila.push("Corda")
mochila.push("Pederneira")
mochila.push("Chave")
mochila.push("Lanterna")
mochila.push("Pedra")
mochila.splice(3,2) //a partir do índice especificado (3) remove tantos elementos (2). Ex: Splice (3,2)
document.write(mochila[0] + "<br>")
document.write(mochila[1] + "<br>")
document.write(mochila[2] + "<br>")
document.write(mochila[3] + "<br>")
document.write(mochila[4] + "<br>")
document.write(mochila[5] + "<br>")*/

//indexOf: faz uma busca no array e retorna a posição que o elemento está 
/*var mochila = [], pos
mochila.push("Faca")
mochila.push("Corda")
mochila.push("Pederneira")
mochila.push("Chave")
mochila.push("Lanterna")
mochila.push("Pedra")
pos = mochila.indexOf("Corda")
if (pos < 0){
    document.write("Este item não está na mochila")
} else {
    document.write("Item está na mochila <br> Posição: ",pos)
}*/

//VETOR COM METODO: SORT, REVERSE
/*var mochila = [],pos
var num = [5, 8, 4, 9, 7, 6, 3, 0, 2, 1]
var numeros
num.sort()
num.reverse()
numeros = num.join()
document.write(numeros + "<br>")
document.write(num[0]+ "<br>")
document.write(num[1]+ "<br>")
document.write(num[2]+ "<br>")
document.write(num[3]+ "<br>")
document.write(num[4]+ "<br>")
document.write(num[5]+ "<br>")
document.write(num[6]+ "<br>")
document.write(num[7]+ "<br>")
document.write(num[8]+ "<br>")
document.write(num[9]+ "<br>")*/

//VETOR USANDO O METODO CONCAT
/*var mochila = [], mochila1 = [], mochila2=[], pos
mochila1.push("Faca")
mochila1.push("Corda")
mochila1.push("Pederneira")
mochila1.push("Chave")
mochila2.push("ARAME")
mochila2.push("LUVAS")
mochila2.push("JOELHEIRA")
mochila2.push("MEIAS")
mochila = mochila1.concat(mochila2)
document.write(mochila[0] + "<br>")
document.write(mochila[1] + "<br>")
document.write(mochila[2] + "<br>")
document.write(mochila[3] + "<br>")
document.write(mochila[4] + "<br>")
document.write(mochila[5] + "<br>")
document.write(mochila[6] + "<br>")
document.write(mochila[7] + "<br>")
document.write(mochila[8] + "<br>")
document.write("Tamanho da mochila 1: " + mochila1.length + "<br>")
document.write("Tamanho da mochila 2: " + mochila2.length + "<br>")
document.write("Tamanho da mochila: " + mochila.length + "<br>")*/

//MATRIZ: VETOR DENTRO DO VETOR (LINHA X COLUNA)
/*var mochila = new Array()
var item1 = ["Corda", 2]
var item2 = ["Faca", 1]
var item3 = ["Cura", 5]
var item4 = ["Prego", 35]

mochila.push(item1)
mochila.push(item2)
mochila.push(item3)
mochila.push(item4)

document.write(mochila[0][0] + " - " + mochila[0][1] + "<br>")
document.write(mochila[1][0] + " - " + mochila[1][1] + "<br>")
document.write(mochila[2][0] + " - " + mochila[2][1] + "<br>")
document.write(mochila[3][0] + " - " + mochila[3][1] + "<br>")*/

//INCREMENTADOR i++ ++i
/*var num=10
document.write(num++) //10
document.write("<br>")
document.write(num) //11
document.write("<br>")
var numero=10
document.write(++numero) //11
document.write("<br>")
document.write(numero) //11*/

//VETOR COM FOR E PROMPT
/*var num=[]
for (cont=0;cont<5;cont++){
    num.push(prompt("Digite seu nome",""))
}
for (cont=0;cont<5;cont++){
    document.write(num[cont]+"<br>")
}*/

//MATRIZ COM FOR
/*var mochila=[["Corda",1],
["Cura",10],
["Lanterna",1],
["Pilhas",20]]
for (var l=0;l<4;l++){
for (var c=0;c<2;c++){
document.write(mochila[l][c] + "")
}
document.write("<br>")
}*/

//MANIPULAÇÃO DE ELEMENTOS POR getElementById
//document.getElementById("texto").innerHTML="aula 24 - innerHTMLL"
//document.getElementById("dv").innerHTML="Novo texto da DIVV"

//MOSTRADOR DE DATA, HORA, DIA, MES E ANO
/*var dt=new Date()
var diasem=dt.getDay()
var dia=dt.getDate()
var mes=dt.getMonth()
var ano=dt.getFullYear()
var horas=dt.getHours()
var minutos=dt.getMinutes()
var segundos=dt.getSeconds()
var meses=new Array("Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro")
var semanas=new Array("Domingo","Segunda-Feira","Terça-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sábado")
document.write(semanas[diasem] + ", " + dia + " de " + meses[mes] + " de " + ano + "<br>")
document.write(horas + ":" + minutos + ":" + segundos)*/

//3 FORMAS DE USAR FUNÇÃO, SENDO 2 COM PASSAGEM DE PARÂMETROS  
/*function escreve(){
    document.write("Função sem passagem de parâmetro")
}
escreve()*/
/*function soma(n1,n2){
    var res=n1+n2
    document.write("1ª forma de Função com passagem de parâmetro <br>")
    document.write(res)
}
soma(7,7)*/
/*function soma2(n1,n2){
    return n1+n2
}
var res=soma2(7,7)
document.write("2ª forma de Função com passagem de parâmetro <br>")
document.write(res)*/
/*var numeros=new Array(1,2,3,4,5,6,7,8,9)
function media(nums){
    var tam=nums.length
    var soma=0
    for (var i=0;i<tam;i++){
        soma+=nums[i]
    }
    return Math.round(soma/tam)
}
document.write("3ª forma de Função com passagem de parâmetro <br>")
document.write(media(numeros))*/

//MANIPULAR DIV USANDO AS SETAS DO TECLADO 
/*var px=0
var py=0
function move(){
    var obj=document.getElementById("dv1")
    var tecla=event.keyCode
    //37-Esquerda  -  38-Cima  -  39-Direita  -  40-Baixo  - 13-Remove Keydown
    if (tecla==37){
        px-=10
        obj.style.left=px+"px"
    } else if (tecla==38){
        py-=10
        obj.style.top=py+"px"
    } else if (tecla==39){
        px+=10
        obj.style.left=px+"px"
    } else if (tecla==40){
        py+=10
        obj.style.top=py+"px"
    } else if (tecla==13){
        alert("Evento keydown Removido")
        document.removeEventListener("keydown",move)
    }
}
document.addEventListener("keydown",move)*/














