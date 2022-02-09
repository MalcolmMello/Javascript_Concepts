//Imutabilidade
/*  Dados nunca mudam, criamos novos, sem alterar a referência, por exemplo o retorno da função
    abaixo não altera o objeto user, mas sim retorna um novo objeto, que aproveita os dados de user, e 
    adiciona o nome inteiro
*/
/* Sideeffects - Útil para não alterar dados de forma indesejada */

const user = {
    name: 'Malcolm',
    lastName: 'De Mello Lima'
}

function getUserWithFullName(user) {
    return {
        ...user,
        fullName: `${user.name} ${user.lastName}` 
    }
}

const userWithFullName = getUserWithFullName(user)

console.log(userWithFullName)