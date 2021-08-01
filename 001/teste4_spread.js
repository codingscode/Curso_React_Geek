
const numeros = [1, 2, 3, 4]

const novosNumeros = numeros
novosNumeros.push(5)


console.log(numeros)
console.log(novosNumeros)
console.log('----------------')

const numeros2 = [1, 2, 3, 4]

const novosNumeros2 = [...numeros2]
novosNumeros2.push(7)


console.log(numeros2)
console.log(novosNumeros2)
console.log('----------------')

const numeros3 = [1, 2, 3, 4]

const novosNumeros3 = [...numeros3, 10]


console.log(numeros3)
console.log(novosNumeros3)
console.log('----------------')

const pet1 = { nome: 'rex' }
const pet2 = { ...pet1, idade: 3, tipo: 'canina' }

pet2.nome = 'ladin'

console.log(pet1)
console.log(pet2)
console.log('----------------')

const somar1 = (n1, n2) => {
    return n1 + n2
}
 
console.log(somar1(2, 3))
console.log(somar1(2, 3, 5))  // ignora argumentos extras

console.log('----------------')

const somar2 = (...numeros) => {
    console.log(`...numeros é : ${numeros}`)

    let somando = numeros.reduce((acumulador, atual) => acumulador + atual, 0)

    return somando
}

console.log(somar2(4, 2, 8))

console.log('----------------')
