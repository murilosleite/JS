let valores = [8, 9, 7, 4, 2, 3]
//valores.sort()
//console.log(valores)

/*for (let pos = 0; pos<valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for (let pos in valores){ //Para cada posição em   'valores', mostre 'valores[pos]'
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
console.log(`O valor 9 está na posição ${valores.indexOf(9)}`)