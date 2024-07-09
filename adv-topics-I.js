console.log("advanced topics I")

// const saludar = (name) => {
//   return `Hola ${name}`
// }

const saludar = (name) => `Hola ${name}`
// const saludar = name => `Hola ${name}`

// si la funcion de flecha solo tiene una linea de código podemos reducirla así
// 1. pongo la linea arriba donde se declaró la funcion
// 2. removemos las llaves {}
// 3. la palabra return queda implicita
// 4. si solo tiene un parametro, los parentesis del parametro son opcionales

console.log( saludar("bob") )

const oneArr = ["patata", "tomate", "aguacate", "pepino"]

// filter solo con letra p
// cambiar a mayuscula
// hacer un console.log de cada una en un string "vegetal: PATATA"

// const filteredArr = oneArr.filter((veggie) => {
//   if (veggie[0] === "p") {
//     return true
//   } else {
//     return false
//   }
// })

const resultArr = oneArr
.filter((veggie) => veggie[0] === "p")
.map((veggie) => veggie.toUpperCase())
.forEach((veggie) => console.log(`vegetal: ${veggie}`))

// console.log(resultArr)


// Object Property Shorthand
// Propiedad de objeto abreviada

let username = "bob";
let age = 29;

// const user = {
//   username: username,
//   age: age
// }

// si el nombre de la propiedad es el mismo de la variable de donde viene el valor, entonces podemos escribirlo una sola vez

const user = {
  username,
  age,
  address: "Una piña debajo del mar"
}

console.log(user)