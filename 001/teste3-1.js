
class Cachorro {
    nome = 'Rex'
    idade = 2
    
    latir() {
       return `${this.nome}: au! au!`
    }
}

 
let pet = new Cachorro()
 
console.log(pet)
console.log(pet.latir())
console.log(pet.nome)
console.log('--------------------')
 
class Cachorro2 {
    constructor(n, i) {
       this.nome = n
       this.idade = i
    }
    
    latir() {
       return `${this.nome}: au! au!`
    }

    imprimir() {
       return `this: ${this}`
    }
}

let pet2 = new Cachorro2('Aladin', 3)

console.log(pet2)
console.log(pet2.latir())
console.log(pet2.nome)
console.log(pet2.imprimir)

