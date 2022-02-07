// escopo global

{
    //escopo de bloco
}

function fn() {
    //escopo de função
}

// var não aceita escopo de bloco, let sim

(() => {
    let teste = 'teste'

    if(true) {
        let teste = 'escopo da condicional'
        console.log(`Valor de teste dentro da condicional: ${teste}`)
    }

    console.log(`Valor de teste escopo da primeira função: ${teste}`)
})()