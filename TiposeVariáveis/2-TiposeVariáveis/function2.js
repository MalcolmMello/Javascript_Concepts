/* 
    Arrow function aponta para onde ela foi criada,
    já function para onde ela é executada
*/

(() => {
    this.name = 'arrow function'
    const getNameArrowFn = () => this.name

    function getName() {
        return this.name
    }

    const user = {
        name: 'Nome no objeto em execução',
        getNameArrowFn,
        getName
    }

    console.log(user.getNameArrowFn())
    console.log(user.getName())
})()