let arr = [3, 5, 7]
arr.foo = 'hello'

// Mostra tudo inclusive o foo
for (let i in arr) {
    console.log(i)
}

//Mostra somente os numéricos
for (let i of arr) {
    console.log(i)
}