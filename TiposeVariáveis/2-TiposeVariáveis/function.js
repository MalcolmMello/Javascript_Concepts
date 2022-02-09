// Executar alguma regra mas antes precisa de algo, segue ideia do currying

function fn() {
    return 'Hello World!'
}
// Receber e retornar funções
const controlFnExec = fnParam => allowed => {
    if(allowed) {
        fnParam()
    }
}

const handleFnExecution = controlFnExec(fn)

handleFnExecution(true) // Executará a função fn
handleFnExecution() // Não executará a função fn

//controlFnExec como função
function controlFnExec(fnParam) {
    return function(allowed) {
        if(allowed) {
            fnParam()
        }
    }
}