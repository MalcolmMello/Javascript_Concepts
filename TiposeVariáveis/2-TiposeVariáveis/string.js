//Retorna o tamanho de uma string
const textSize = 'Texto'.length
console.log(`Quantidade de letras: ${textSize}`)

//Retorna um array quebrando a string por um delimitador
const splittedText = 'Texto'.split('x')
console.log('\nArray com as posições separads pelo delimitador: ', splittedText)

// Busca por um valor e substitui por outro
const replacedText = 'Texto'.replace('Text', 'txeT')
console.log('n\Substituição de valor: ', replacedText)

// Retorna a "fatia" de um valor
const lastChar = 'Texto'.slice(0, 2)  //start e end
console.log('n\Última letra de uma string: ', lastChar)

// Retorna N caracteress a partir de uma posição
const twoCharsBeforeFirstPos = 'Texto'.substr(0, 2)
