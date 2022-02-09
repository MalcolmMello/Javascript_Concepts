// Objeto atribuimos propriedades e definimos seus valores
let user = {
    name: 'Malcolm'
}

// Alterando propriedades de um objeto
console.log(user)

user.name = 'Outro nome 1';
console.log(user)
user['name'] = 'Outro nome 2'

console.log(user)
const prop = 'name'
user[prop] = 'Outro nome 3'

console.log(user)

// Criando propriedades
user.lastName = 'De Mello Lima'
console.log(user)

// Deletando propriedades
delete user.name
console.log(user)
