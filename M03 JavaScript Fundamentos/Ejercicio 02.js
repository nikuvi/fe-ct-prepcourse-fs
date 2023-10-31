/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código: 
   console.log(string + ' que tal');
   return string + ' que tal';
}
devolverString('hola');

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
   console.log(x+y);
   return x + y;
}
suma(x=10,y=2)

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   console.log(x-y);
   return x - y;
}
resta(x,y)

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   console.log(x/y);
   return x/y;
}
divide(x,y)

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   console.log(x*y);
   return x*y;
}
multiplica(x,y)

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   console.log(x%y);
   return x%y;
}
obtenerResto(x,y)

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
