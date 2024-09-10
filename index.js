// arrays
let metas = ["Matheus", "ola"]

console.log(metas[1] + " " + metas[0])

// objetos
let meta = {
    value: 'Ler um livro por mês',
    address: 2,
    checked: false,
    log:  (info) => {
        console.log(info)
    }
}

meta.value = "Não é mais ler um livro"
meta.log(meta.value)


// function
function criarMeta() {}

// arrow function
// const criarMeta = () => {}