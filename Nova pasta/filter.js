let numeros = [5, 12, 8, 20, 3, 15]
let maiores = numeros.filter(function (numeros) {
    return numeros > 10;
});
console.log(maiores);


let nomes = ['Ana', 'Carlos', 'Beatriz', 'João', 'Fernanda'];
let nomesmaiores = nomes.filter(function (nomes) {
    return nomes.length > 4;
})
console.log(nomesmaiores);

let valores = [1, 2, 3, 4, 5, 6, 7, 8 ];
let pares = valores.filter(function (valores) {
    return valores % 2 === 0;
});
console.log(pares);

let produtos = [
    { nome: 'Mouse', preco: 50 },
    { nome: 'Teclado', preco: 120 },
    { nome: 'Monitor', preco: 900 },
    { nome: 'Cabo USB', preco: 25 }
    ];
    let novosprodutos = produtos.filter(function (p) {
        return p.preco < 100;
    });
    console.log(novosprodutos);

    let historico = [
        { imc: 17.5 },
        { imc: 22.3 },
        { imc: 28.7 },
        { imc: 31.2 },
        { imc: 24.0 }
        ];
        let imcmaior = historico.filter(function (p) {
            return p.imc > 25;
        });
        console.log(imcmaior);