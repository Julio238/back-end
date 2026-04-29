let numeros = [10, 20, 30, 40, 50, 60];
console.log(numeros);
console.log(numeros[2]);
let frutas = ["Banana", "Uva", "pera", "maça", "Abacaxi"];
console.log(frutas[3]);

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
};
numeros.forEach(function (elemento) {
    console.log(elemento);
});