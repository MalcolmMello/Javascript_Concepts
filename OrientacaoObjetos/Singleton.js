// A partir do momento que é instanciado, não há como alterar a instância em outro contexto

function Pessoa() {
    if(!Pessoa.instance) {
        Pessoa.instance = this
    }

    return Pessoa.instance
}

const p = Pessoa.call({name: 'Malcolm'})
const p2 = Pessoa.call({name: 'Custon Name'})

console.log(p)
console.log(p2)