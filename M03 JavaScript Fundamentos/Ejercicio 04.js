/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
   // Retorna el valor de "num" elevado al cuadrado.
   // Tu código:
   console.log(num**2);
   return num**2
}
elevarAlCuadrado(2)

function elevarAlCubo(num) {
   // Retorna el valor de "num" elevado al cubo.
   // Tu código:
   console.log(num**3);
   return num**3
}
elevarAlCubo(2)

function elevar(num, exponent) {
   // Retorna el valor de "num" elevado al exponente "exponent".
   // Tu código:
   console.log(num**exponent);
   return num**exponent;
}
elevar(2,3)

function redondearNumero(num) {
   // Redondea "num" al entero más próximo y retórnalo.
   // Tu código:
  console.log(Math.round(num));
  return Math.round(num);
}
redondearNumero(0.51)

function redondearHaciaArriba(num) {
   // Redondea "num" hacia arriba y retórnalo.
   // Tu código:
   console.log(Math.ceil(num));
   return Math.ceil(num);
}
redondearHaciaArriba(3.30)

function numeroRandom(x) {
   // Genera un número al azar entre 0 y 1 y retórnalo.
   // Tu código:
   console.log(Math.random(x));
   return Math.random(x);
}
numeroRandom()

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   elevarAlCuadrado,
   elevarAlCubo,
   elevar,
   redondearNumero,
   redondearHaciaArriba,
   numeroRandom,
};
