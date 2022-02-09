const name = 'Malcolm'

/* Não posso reatribuir valores de tipos primitivos com a const 

name = 'Outro nome' 

*/

const user = {
    name: 'malcolm'
}

// Se for um objeto, podemos trocar as suas propriedades, mas não para onde o ponteiro ta apontando
user.name = 'Outro nome'

/*
não 
podemos alterar o ponteiro:
const user = {
    name: 'Outro nome'
}
*/

const persons = ['Malcolm', 'Pessoa', 'Pessoa2']

/*Não podemos alterar o ponteiro
const persons = ['outros dados']
*/

//Podemos adicionar novos itens
persons.push('Pessoa3')

//Podemos remover
persons.shift()
//Podemos alterar diretamente
persons[1] = 'Pessoa4'