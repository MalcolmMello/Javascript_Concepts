//Iterar elementos
const arr = ['banana', 'morango', 'abacate', 'abacaxi']

arr.forEach((value, index) => {
    console.log(`${index}, ${value}`)
})

// Diferença para o forEach é que o Map retorna um novo array a partir das alterações

console.log(arr.map((fruta, index) => `${index} - ${fruta}`))

// flat, retorna um novo array pela profundidade especificada, de forma recursiva
const arr = [1, 2, [3, 4]]
arr.flat()
// [1, 2, 3, 4]

const idades = [20, 34, [35, 60, [70, 40]]]
idades.flat(2)
// [20, 34, 35, 60, 70, 40]

// recuperar chaves e values de um array
const numbers = [1, 2, 3, 4]
const numbersIterator = arr.keys()
const numbersIterator2 = arr.values()

// entries, retorna chave e valor
const frutas = ['banana', 'morango', 'abacate', 'abacaxi']
const frutasIterator = frutas.entries()

// {value: [0, 'banana'], done: false}
frutasIterator.next()
// {value: [1, 'morango'], done: false}

// find, buscar elementos, retorna o primeiro item que satisfazer determinada condição
const numbers2 = [1, 2, 3, 4]
const firstGreaterThanTwo = numbers2.find(value => value > 2)

console.log(firstGreaterThanTwo)

// findIndex, retorna o indice do primeiro item que satisfaz a condição, não o valor
const firstIndexGreaterThanTwo = numbers2.findIndex(value => value > 2)
console.log(firstIndexGreaterThanTwo)
// 2

//Todos os elementos que satisfazem uma condição
const allValuesGreaterThanTwo = numbers2.filter(value => value > 2)

console.log(allValuesGreaterThanTwo)
// [3, 4]

//indexOf, retorna o primeiro índice em que um elemento pode ser encontrado em um array
const number3 = [1, 3, 3, 4, 3]
const firstIndexOfItem = number3.indexOf(3)
// 1

//lastIndex, último index
const firstIndexOfItem = number3.lastIndexOf(3)
// 4

// includes, saber se algo está em um array, booleano
const hasItemOne = arr.includes(1)
//true
const hasItemTwo = arr.includes(2)
// false 

// some, verifica se pelo menos um item satisfaz a condição
const hasSomeEvenNumber = arr.some(value => value % 2 === 0)
// true

const students = [
    {name: 'malcolm', grade: 7},
    {name: 'pessoa2', grade: 5},
    {name: 'pessoa3', grade: 4},
]

students.some(student => student.grade >= 7)
// true
students.find(student => student.grade >= 7)
// malcolm
students.findIndex(student => student.grade >= 7)
// 0
const media = students.reduce((total, student) => total += student.grade, 0) / students.length
const names = students.reduce((studentNames, student) => studentNames += student.name + ' ', '')

// every, todos os itens correspondem
students.every(student => student.grade >= 7)
// false

//sort, ordena elementos de acordo com a condição
students.sort((current, next) => current.grade - next.grade) //menor para maior
students.sort((current, next) => next.grade - current.grade) //maior para menor

// somente ordenar do menor para maior 
const simpleShort = [1, 3, 2, 5, 4]
simpleShort.sort()

// reverse, inverter meu array
const reverseExample = [1, 2, 3, 4, 5]
reverseExample.reverse()
// [5, 4, 3, 2, 1]

//join, todos os elementos separados por um delimitador, retorna uma string
const join = [1, 2, 3, 4, 5]
join.join('-')
// "1-2-3-4-5"

// reduce, retorna um novo tipo e dado iterando cada posição de um array
const outrosNúmeros = [1, 2, 3, 4, 5]
outrosNúmeros.reduce((total, value) => total += value, 0)
// 15, total é o que eu vou retornar, value é o valor da posição, e 0 é o valor inicial