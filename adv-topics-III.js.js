console.log("advanced topics III")


//* Operador spread => operador de esparcir

const someNumbers = [ 4, 8, 15, 16, 23, 42 ]

console.log(...someNumbers)
console.log(4, 8, 15, 16, 23, 42)

console.log( Math.max( ...someNumbers ) )
console.log( Math.min( ...someNumbers ) )

const students = [ "Marcos", "Sheyla", "Félix" ]
const students2 = [ "Iñigo", "Huanye", "Ivan" ]
const students3 = [ "Germán", "Michelle", "Mario" ]

const allStudents = [ ...students, ...students2, ...students3, "bob" ]
console.log(allStudents)

const clone = [ ...someNumbers ]
clone.pop()

console.log(clone)
console.log(someNumbers)


const user = {
  username: "bob",
  lugar: "piña debajo del mar",
  hobby: ["atrapar medusas", "molestar a calamardo"], // ref ABCD
} // ref 1234

const user2 = { ...user, lugarDeTrabajo: "crustacio cascarudo", username: "BOB", hobby: [...user.hobby] } // ref 4567

user2.hobby.pop() // ref ABCD

console.log(user)
console.log(user2)

//* usos del operador Spread

//1. para clonar arrays y objetos
//2. para concatenar arrays/objetos
//3. para usar arrays en metodos como Math.max y Math.min


//* Como clone una estructura de data en Spread?
// El operador spread crear un clone Shallow. Clone superficial. Solo crear una nueva referencia para el objeto/array del primer nivel
// el JSON.parse y JSON.stringify si hace un clone Deep. Clone profundo. Crear una referencia nueva para cada objeto/array anidados dentro de la estructura.


//* Operador Rest => Operador de el resto (...)

const hobbies = [ "surfear", "cocinar", "leer", "escalar", "videojuegos" ]

const [ hobby1, hobby2, ...elRestoDeLosHobbies ] = hobbies

console.log(hobby1, hobby2)
console.log(elRestoDeLosHobbies)
// JS coge el resto de los elementos del array (que no hayan sido destructurados) y los agrupa en un array nuevo

function checkIfStudentPassed(...todasLasNotas) {
  console.log(todasLasNotas)

  let sum = todasLasNotas.reduce((acc, nota) => {
    return acc + nota
  }, 0)
  let promedio = sum / todasLasNotas.length

  if (promedio < 5) {
    return `No, el estudiante no aprobó su promedio fue ${promedio}`
  } else {
    return `Si, el estudiante pasó con promedio de ${promedio}`
  }
  

}

console.log( checkIfStudentPassed(4, 9) )
console.log( checkIfStudentPassed(2, 7, 10) )
console.log( checkIfStudentPassed(3, 6, 7, 8, 2, 4, 4, 10, 8, 3, 4) )

//* para que usamos rest?
//1. para agrupar elementos que no hayan sido destructurados de un array
//2. para agrupar multiples argumentos de una funcion