/* em funções ela simplesmente irá funcionar, por tanto é uma boa prática declarar
funções antes de usar, dessa forma evitamos não saber a origem da função em um escopo
muito grande */

function fn() {
	log('Hoisting de função')

	function log(value) {
		console.log(value)
	}
}