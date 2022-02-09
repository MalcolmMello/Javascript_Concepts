// Arrays
let arvores = new Array('pau-brasil', 'louleiro', 'cedro', 'carvalho', 'sicômoro')
0 in arvores //true
3 in arvores //true
6 in arvores //false
'cedro' in arvores //false (você deve especificar o número do índice)
'cedro' in arvores[2] //true

'length' in arvores //true

// Objetos predefinidos
'PI' in Math  //true
let minhaString = new String('Malcolm')
'lenght' in minhaString //True

//Objetos personalizados, retorna as chaves
let meucarro = {marca: 'Honda', modelo: 'Accord', ano: 1998}
'marca' in meucarro //true
'modelo' in meucarro //true

//instance of
let dia = new Date(2018, 12, 17)

if(dia instanceof Date) {
    //code here
}