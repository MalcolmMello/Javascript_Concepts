const users = ['Malcolm', 'Cleito', 'Gaam']

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons = [
    {
        name: 'Malcolm',
        age: 16,
        gender: gender.MAN
    },
    {
        name: 'Cleito',
        age: 16,
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

// Retornar um novo
const personWithCourse = persons.map((person) => {
    person.course = 'Introdução ao javascript'
    return person
})
console.log('\nPessoas com adição do curso: ', personWithCourse)

// Transformar array em outro time
const totalAge = persons.reduce((age, person) => {
    age += person.age
    return age
}, 0)
console.log('\nSoma de idade das pessoas', totalAge)

//Juntando as opereações
const totalEvenAges = persons
                        .filter(person => person.age % 2 === 0)
                        .reduce((age, person) => {
                            age += person.age
                            return age
                        }, 0)