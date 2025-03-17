/**
 * Detectar si hay al menos tres caramelos iguales seguidos en la fila
 * 
 * En Candy Crush, cuando hay tres caramelos seguidos del mismo tipo, desaparecen.
 * Dado un array de caramelos representados como emojis 🍬, devuelve true si hay al menos 
 * tres seguidos del mismo tipo, o false si no los hay.
 */
function hasThreeInARow(candies) {
    for (x=0; x<candies.length;x++){
        if (!(candies[x-1]==undefined) && !(candies[x+1] == null)){
            if ((candies[x]==candies[x-1])&&(candies[x]==candies[x+1])){
                console.log(candies[x] + candies[x-1] + candies[x+1])
                return true;
            }
        }
    }
    return false;
    }
        
    
// Ejemplo de uso:
console.log(hasThreeInARow(["🍬", "🍬", "🍬", "🍫", "🍭"])); // true -> Tres 🍬 seguidos
console.log(hasThreeInARow(["🍫", "🍬", "🍭", "🍭", "🍭"])); // true -> Tres 🍭 seguidos
console.log(hasThreeInARow(["🍬", "🍫", "🍭", "🍬", "🍫"])); // false -> No hay tres seguidos
console.log(hasThreeInARow(["🍬", "🍬", "🍬", "🍬", "🍬"])); // true -> Cinco 🍬 seguidos
console.log(hasThreeInARow(["🍫", "🍭", "🍬"])); // false -> No hay suficientes caramelos
console.log(hasThreeInARow([])); // false -> No hay caramelos en la fila