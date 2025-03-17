/**
 * Los límites del array
 *
 * Una de las cosas que más cuesta entender al comenzar programación, es que la primera posición del array, viene dada en realidad por la posición "cero".
 *
 * A la posición que ocupa un elemento en un array se le llama "índice"
 *
 * Así, lista_peces[0] nos da el primer pez
 * lista_peces[1] nos da el segundo pez
 * ..y así hasta el último.
 *
 * En el array: let muchosPeces = ["Dory", "Nemo", "Shipho", "Estrella"]
 *
 * El array tiene 4 elementos. Para acceder a "Dory" debo poner muchosPeces[0]. Para acceder a "Estrella" debo poner muchosPeces[3].
 */

/**
 * Ejecuta el siguiente código e intenta averiguar que está sucediendo. CONTESTA A LA PREGUNTA: ¿Porque el úñtimo mensaje dice "Pez siguiente: undefined?"
 */

let muchosPeces = ["Dory", "Nemo", "Shipho", "Estrella"];

for (let i = 0; i <= muchosPeces.length; i++) {
  let siguiente_pez = muchosPeces[i];
  console.log("Pez siguiente: " + siguiente_pez);
}
console.log("El error está en '<= muchosPeces.length', puesto que cuando llegue a un indice igual a muchosPeces.length, la posción no existirá.")
/**
 * BONUS: Este ejercicio no sigue la convención de JavaScript camelCase. ¿Podrías modificar el nombre de todas las variables para adecuarlas a la norma?
 */
