/* retorna primeiro undefined, pois o JS irá elevar a variável e declarar ela antes,
 porém sem valor algum, abaixo irá atribuir o valor que foi passado, e então o próximo
 console vai mostrar o valor */

 function fn() {
	console.log(text);

	var text = 'Exemplo'
	
	console.log(text)
}

/*o que acontece na execução

function fn() {
	var text;
	console.log(text)

	text = 'Exemplo'
	
	console.log(text)
} 

*/