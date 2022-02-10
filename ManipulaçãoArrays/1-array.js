// Array.of
const persons = Array.of('Malcolm', 'Cris', 'Jenny')
const numbersAndStrings = Array.of(1, 2, 'string', 'texto')

// Apenas um parâmetro são três posições vazias 
const arr = Array(3)

// Normal ['Malcolm', 'Cris', 'Jenny'], semelhante ao Array.of
const arr2 = Array('Malcolm', 'Cris', 'Jenny')

// Array from algo que não é um array
const divs = document.querySelectorAll('div')
const arr = Array.from(divs)

// Push adiciona um ou mais elementos no final de um array e o retorno é o tamanho dessa lista
const frutas = ['melancia', 'banana']
const addedFruit = frutas.push('laranja')

// retorna 3, e frutas está igual a ['melancia', 'banana', 'laranja']

// pop, remove o último elemento do array, e retorna o item que foi removido
const removedItem = frutas.pop()

//unshift adiciona no início e retorna o lenght
const frutas = ['melancia', 'banana']
const addedFruit = frutas.unshift('laranja')

//shift remove no inicio, mesmo comportamento do pop
const removedItem = frutas.shift()

//concat concatena dois arrays e retorna um novo, é imutável
const salgados = ['coxinhas', 'kibe', 'empada']
const alimentos = frutas.concat(salgados)

// slice, retorna um array 'fatiando' o array de acordo com ínicio e fim, imutável
const arr = [1, 2, 3, 4, 5]
arr.slice(0, 2)
//[1, 2]
arr.slice(2)
// [3, 4, 5]
arr.slice(-1) //ao contráriio
// [5] 
arr.slice(-3)
// [3, 4, 5]

// splice não é imutável, ele mexe na referênciam retorna sempre o item que foi removido
arr.splice(2)
// [3, 4, 5]
console.log(arr)
// [1, 2]
arr.splice(0, 0, 'first')
console.log(arr)
// ['first', 1, 2]

const frutas = ['melancia', 'banana']
frutas.splice(1, 0, 'acerola')
// []
console.log(frutas)
// ['melancia', 'acerola', 'banana']


const frutas = ['melancia', 'acerola','banana']
frutas.splice(2, 1, 'laranha', 'amora')
// ['banana']
console.log(frutas)
// ['melancia', 'acerola', 'laranja', 'amora']