let personasArreglo = ["Daniel", "Francisco", "juan"];
let numerosArreglo = [10, 13, 2, 15, 8, 22];
// console.log(personasArreglo);

// personasArreglo.push("Laura");

let personasArreglo2 = [...personasArreglo, { nombre: "Laura", edad: 25 }];

// console.log(personasArreglo2);

//Métodos para arreglos (Callback)

//MAP

//Recorrer un arreglo, transformarlo y retornar un arreglo nuevo transformado, sin alterar el original
// const personasMap = () => {

// }
// numerosArreglo.map((number, index, array) => {
//   console.log(number * 2);
//   console.log(valorActual);
//   console.log(indice);
//   console.log(arreglo);
//   console.log(valorActual);
//   console.log(arreglo[indice]);
// });

// let numerosArregloNuevo = numerosArreglo.map((number, index, array) => {
//   return number * 2;
// });
// let arreglo3 = [...numerosArreglo, ...numerosArregloNuevo];
// console.log(numerosArreglo);
// console.log(numerosArregloNuevo);
// console.log(arreglo3);

//FILTER

// let filtrarNumerosPares = numero => {
//   if (numero % 2 !== 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// let filtrarNumerosPares = numero => numero % 2 !== 0;

// let filtrarNumerosMayores10 = numero => numero > 10;

// const numerosArregloFilter = numerosArreglo.filter(filtrarNumerosPares);
// console.log(numerosArregloFilter);
// console.log(numerosArreglo);
//FIND

// const personasfind = personasArreglo2.find(persona => {
//   if (persona === "Javier") {
//     return true;
//   } else {
//     return false;
//   }
// });

// const personasfind = personasArreglo2.find(persona => persona === "Daniel");

// console.log(personasfind);
