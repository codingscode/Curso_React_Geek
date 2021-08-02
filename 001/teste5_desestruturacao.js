
const frutas = [ 'laranja', 'jaca', 'graviola', 'goiaba' ]
console.log(frutas)

let [fruta1, fruta2, fruta3, fruta4, fruta5] = frutas

console.log(fruta1)
console.log(fruta2)
console.log(fruta3)
console.log(fruta4)
console.log(fruta5)

console.log('---------------')

const eletronicos = [ 'pendrive', 'mouse', 'teclado', 'placa de video', 'wifi adaptador' ]
console.log(eletronicos)

let [ item1, , item2 ] = eletronicos

console.log(item1)
console.log(item2)
console.log('--------------')

const pessoa = { nome: 'Simon', idade: 19, pais: 'canadá', idioma: 'francês' }
console.log(pessoa)  

let { idade, idioma, propriedade_nao_existente } = pessoa

console.log(idade)
console.log(idioma)
console.log(propriedade_nao_existente)

const localidade = (objeto) => `ele ${objeto.nome} mora no ${objeto.pais}`
console.log(localidade(pessoa))

const localidade2 = ({ nome, pais }) => `ele ${nome} mora no ${pais}`
console.log(localidade2(pessoa))
