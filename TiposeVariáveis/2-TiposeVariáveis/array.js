const users = ['Malcolm', 'Cleito', 'Gaam']

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons = [
    {
        name: 'Malcolm',
        age: 17,
        gender: gender.MAN
    },
    {
        name: 'Cleito',
        age: 17,
        gender: gender.MAN
    },
    {
        name: 'Gaam',
        age: 15,
        gender: gender.MAN
    }
]

// Retornar a quantidade de itns de um array
console.log('Items: ', persons.length)

//Verificar se é um array
console.log('A váriavel persons é um array?: ', Array.isArray(persons))

// Iterar os itens do array
persons.forEach((person, index, arr) => {
    console.log(`Nome: ${person.name}, index: ${index}`, arr)
})

//Filtrar um array
const mens = persons.filter(person => person.gender === gender.MAN)
console.log('\nNova lista com somente homens')

//
