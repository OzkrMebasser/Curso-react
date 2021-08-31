let persona = {
  nombre: "Antonio",
  edad: 25,
  pais: "Colombia",
  ciudad: "Bogotá",
  hermano: {
    nombre: "José",
    pais: "México",
    apellido: "Meza"
  }
};

// console.log(persona);
// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.pais);
// console.log(persona.hermano);

// const {
//   nombre,
//   edad,
//   pais,
//   hermano: { nombre, pais }
// } = persona;

// let nombre = persona.nombre
// let edad = persona.edad
// .......
// const { nombre, edad, pais, hermano } = persona;

// const { nombre: nombreHermano, pais: paisHermano, apellido } = hermano;

// console.log(nombre);
// console.log(pais);

// console.log(nombreHermano);
// console.log(paisHermano);
// console.log(apellido);

let mostrarPais = ({ nombre, pais }) => {
  //   let paisFuncion = personaFuncion.pais;
  //   const { pais } = personaFuncion;
  //   return { nombre: nombre, pais: pais };
  return { nombrePersona: nombre, lugarNacimiento: pais };
};

// console.log(mostrarPais(persona));

//Crear una funcion que, dado un objeto previamente creado
//retorne otro objeto, imprimir por consola las propiedades
//Del objeto retornado
let auto = {
  marca: "Mazda",
  modelo: "2020",
  puertas: 5,
  color: "Rojo",
  duenio: "Diego"
};
const regresarAutos = ({ marca, modelo, puertas }) => {
  //   const { marca, modelo } = carro;
  let autoRetornado = {
    nombre_auto: marca,
    modelo_auto: modelo,
    puertas_auto: puertas
  };
  return autoRetornado;
};
// console.log(regresarAutos(auto));
let autoMarca = auto.marca;
let autoModelo = auto.modelo;
let autoPuertas = auto.puertas;
console.log(autoMarca, autoModelo, autoPuertas);

console.log({ ...regresarAutos(auto) });

const { nombre_auto, modelo_auto, puertas_auto } = regresarAutos(auto);
console.log(nombre_auto, modelo_auto, puertas_auto);

// const { marca, modelo, ...rest } = auto;
// console.log(marca, modelo);
// console.log(rest);
