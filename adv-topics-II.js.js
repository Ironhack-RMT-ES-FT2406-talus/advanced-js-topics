console.log("advanced topics II")

// Destructuración

const unPerritoMuyMajo = {
  name: "Beethoven",
  breed: "San Bernardo",
  age: 6
}

let age = 20;

// console.log( `El perrito ${unPerritoMuyMajo.name} es de raza ${unPerritoMuyMajo.breed} y tiene ${unPerritoMuyMajo.age} añitos de edad` )

// console.log( `El perrito ${unPerritoMuyMajo.name} es el mejor. 10/10` )

// sintaxis
// let { propiedadesAExtraerDelObjeto } = objeto

let { name, breed, age: dogAge } = unPerritoMuyMajo
// console.log(name, breed, dogAge)

// para cambiar nombre de la variable as destructurar hacemos => nombrePropiedad: nuevoNombre

// console.log( `El perrito ${name} es de raza ${breed} y tiene ${dogAge} añitos de edad` )

// console.log( `El perrito ${name} es el mejor. 10/10` )


function describirPerrito({ breed = "Mestizo", age, name }) {
  //* podemos destructurar directamente en los parametros sin necesidad de recibir/crear el parametro del objeto

  //* si usamos "=" en la destructuración, le asignamos un valor predefinido en caso que no exista

  // const { name, breed, age } = unPerrito

  console.log( `El perrito ${name} es de raza ${breed} y tiene ${age} añitos de edad` )

  console.log( `El perrito ${name} es el mejor. 10/10` )

}

const otroPerrito = {
  name: "Layka",
  // breed: "Doberman",
  age: 10
}

describirPerrito(unPerritoMuyMajo)
describirPerrito(otroPerrito)


// Destructuración en arrays

const misTresLibrosFavoritosDelMundoMundial = [ "Dragonlance", "MundoDisco", "Dresden Files" ]



const [ libro1, libro2, libro3 ] = misTresLibrosFavoritosDelMundoMundial
//* en destructuración de arrays, nosotros asignamos el nombre al momento de destructurar. Lo que importa es el orden

console.log(`Mis tres libros favoritos son: ${libro1}, ${libro2} y  ${libro3}`)


// destructuración anidada

const person = {
  firstName: "Elon",
  lastName: "Musk",
  job: "X CEO",
  other: {
    about: {
      hobby: "Viajar a Marte",
      otherCompanies: ["Tesla", "Starlink"]
    }
  }
}

// const { other } = person
// console.log(other)

// const { about } = other
// const { hobby } = about

// console.log(hobby)

const { other: { about: { hobby } } } = person
console.log(hobby)

const { other: { about: { otherCompanies: [ comp1, comp2 ] } } } = person
console.log(comp2)

