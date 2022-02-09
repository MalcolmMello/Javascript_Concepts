const user = {
    name: 'Malcolm',
    lastName: 'De Mello Lima'
}

// Recupera as chaves do objeto
console.log('Propriedades de objeto user:', Object.keys(user))

// Recupera os valore das chaves do objeto
console.log('\nPropriedades de objeto user:', Object.values(user))

// Recupera um array de arrays contendo [nome_prop, valor_prop]
console.log('\nPropriedades de objeto user:', Object.values(user))

//Imutabilidade
Object.assign(user, {fullName: 'Malcolm de Mello Lima'}) //ruim pois altera o ponteiro
console.log(user)

console.log(Object.assign({}, user, {age: 30})) //Bom pois gera um novo objeto sem alterar o ponteiro

// Previne todas as alterações em um objeto
const newObj = { foo: 'bar' }
Object.freeze(newObj)

newObj.foo = 'Tentando mudar'
newObj.name = 'Tentando criar'
delete newObj.foo //Tentando deletar

console.log(newObj)

// Permite alterar, mas não deletar e alterar
const newObj2 = { foo: 'bar' }
Object.seal(newObj2)

newObj2.foo = 'Tentando mudar'
newObj2.name = 'Tentando criar'
delete newObj2.foo //Tentando deletar

console.log(newObj2)