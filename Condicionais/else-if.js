const array = [0, 1, 2, 3, 4, 5]
// Para na primeira condição que encontrar
array.forEach(item => {
    if(item % 2 === 0) {
        console.log(`O número ${item} é divisível por 2`)
    } else if(item % 3 === 0) {
        console.log(`O número ${item} é divisível por 3`)
    } else if(item % 5 === 0) {
        console.log(`O número ${item} é divisível por 5`)
    }
})

//Executa todas que atender
array.forEach(item => {
    if(item % 2 === 0) {
        console.log(`O número ${item} é divisível por 2`)
    } 
    if(item % 3 === 0) {
        console.log(`O número ${item} é divisível por 3`)
    } 
    if(item % 5 === 0) {
        console.log(`O número ${item} é divisível por 5`)
    }
})