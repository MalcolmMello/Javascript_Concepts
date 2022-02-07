/* Dessa maneira, o valor do atributo a é salvo na memória, sem necessidade de repetir o código */

function soma(a) {
	return function(b) {
		return a + b
    }
}

const soma2 = soma(2)

console.log(soma2(2))
console.log(soma2(3))
console.log(soma2(4))
console.log(soma2(5))