let persona = {
  nombre: "Ricardo",
  apellido: "Rodriguez",
  trabajo: "Web Developer"
};
// console.log(persona)
// console.table(persona);
// console.log(persona.trabajo);

// console.log(persona);
// let persona2 = persona;
// persona2.edad = 26;
// console.log(persona2);
// console.log(persona)

persona.edad = 27;
let persona2 = { ...persona, ciudad: "México" };

console.log(persona);
console.log(persona2);
