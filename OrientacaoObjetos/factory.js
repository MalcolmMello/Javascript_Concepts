// Factory
function FakeUser() {
    return {
        name: 'Malcolm',
        lastName: 'Lima'
    }
}

const user = FakeUser()

function Pessoa(customProperties) {
    return {
        name: 'Malcolm',
        lastName: 'De Mello Lima',
        ...customProperties
    }
}

const p = Pessoa({name: 'Malcolm', age: 27})
console.log(p)