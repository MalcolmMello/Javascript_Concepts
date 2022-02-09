const myNumber = 12.4032

// Transformar número para string
const numberAsString = myNumber.toString()
console.log('Número transformado em string: ', typeof numberAsString)

// Retorna número com um número de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2)
console.log('\nNúmero com duas casas decimais: ', fixedTwoDecimals)

// Transforma uma string em float permite casas decimais
console.log('\nString parseada para float: ', parseFloat('13.22'))

// Transforma uma string em int, não permite casas decimais
console.log('\nString parseada para int: ', parseInt('12.20'))
