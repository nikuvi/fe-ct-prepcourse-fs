/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna true si "x" e "y" son iguales.
   // De lo contrario, retorna false.
   // Tu código:
   if (x == y) {
      console.log(true);
      return true;
   } else if (false)
      console.log(false);
      return false;
}
sonIguales(x=1,y=2)

//EL CODIGO A CONTINUACION ESTÁ MAL
function tienenMismaLongitud(str1, str2) {
   // Retorna true si los dos strings tienen la misma longitud.
   // De lo contrario, retorna false.
   // Tu código:
   if (str1 == str2) {
      console.log('Tienen la misma longitud');
      return 'Tienen la misma longitud';
   } else if (str1 <= str2)
      console.log('NO tienen la misma longitud');
      return 'NO tienen la misma longitud';
   else ()
}
tienenMismaLongitud(str1='hola',str2='hdla')
//EL CODIGO DE ARRIBA ESTÁ MAL

function menosQueNoventa(num) {
   // Retorna true si el argumento "num" es menor que noventa.
   // De lo contrario, retorna false.
   // Tu código:
   if (num < 90) {
      console.log(true);
      return true;
   } else if (num > 90)
      console.log(false);
      return false;
}

menosQueNoventa(95)

function mayorQueCincuenta(num) {
   // Retorna true si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna false.
   // Tu código:
   if (num > 50) {
      console.log(true);
      return true;
   } else if (num < 50)
      console.log(false);
      return false;
}
mayorQueCincuenta(55)

function esPar(num) {
   // Retorna true si "num" es par.
   // De lo contrario, retorna false.
   // Tu código:
   

function esImpar(num) {
   // Retorna true si "num" es impar.
   // De lo contrario, retorna false.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
