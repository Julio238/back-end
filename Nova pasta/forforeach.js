let alunos = ["Ana", "pedro", "Maria"];
for (let i = 0; i < alunos.length; i++) {
    console.log("presentes:", alunos[i]);
}
alunos.forEach(function (elemento) {
    console.log("presentes:", elemento);
});




let base = [5, 10, 15];
for (let i = 0; i < base.length; i++) {
    console.log(base[i]*2);
};
base.forEach(function (elemento) {
    console.log(elemento*2);
});




let marcas = ["Fiat", "Ford", "VW"];
for (let i = 0; i < marcas.length; i++) {
    console.log("indici:", i," ", marcas[i]);
};
marcas.forEach(function (elemento) {
    console.log("indici:",i," ", elemento);
});