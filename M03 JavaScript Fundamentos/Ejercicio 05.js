/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*5️⃣ EJERCICIO 05 5️⃣*/

function esPositivo(num) {
   // La función recibe un entero. Devuelve como resultado un string que indica si el número
   // es positivo o negativo.
   // Si el número es positivo ---> "Es positivo".
   // Si el número es negativo ---> "Es negativo".
   // Si el número es 0, devuelve false.
   // Tu código:
   if (num < 0) {
      console.log('Es negativo');
      return 'Es negativo';
   } else if (num > 0) {
      console.log('Es positivo');
      return 'Es positivo'
   } else if(num==0) {
      console.log(false);
      return false;
   }
}
esPositivo(-4)

function agregarSimboloExclamacion(str) {
   // Agrega un símbolo de exclamación al final del string "str" y retórnalo
   // Ejemplo: "hello world" ---> "hello world!"
   // Tu código:
   console.log(str + '!');
   return str + '!';
}
agregarSimboloExclamacion('hola')

function combinarNombres(nombre, apellido) {
   // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
   // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
   // Tu código:
   console.log(nombre + apellido);
   return nombre + apellido;
}
combinarNombres('Soy','  Nicole')

function obtenerSaludo(nombre) {
   // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
   // Ejemplo: "Martin" ---> "Hola Martin!"
   // Tu código:
   console.log('Hola ' + nombre + '!');
   return 'Hola ' + nombre + '!';
}
obtenerSaludo('Juan')

function obtenerAreaRectangulo(alto, ancho) {
   // Retornar el área de un rectángulo teniendo su altura y ancho.
   // Tu código:
   var area = alto*ancho
   console.log('Si el alto es ' + alto + ' y su ancho es ' + ancho + ' entonces la multiplicacion de estos es el area de un rectangulo, que sería ' + area + 'cm');
   return 'Si el alto es ' + alto + 'cm y su ancho es ' + ancho + 'cm entonces la multiplicacion de estos es el area de un rectangulo, que sería ' + area + 'cm';
}
obtenerAreaRectangulo(5,5)

function retornarPerimetro(lado) {
   // La función recibe como argumento la medida de un lado de un cuadrado.
   // Debes retornar su perímetro.
   // Tu código:
   console.log('El perimetro de un cuadrado es su lado multiplicado por dos, si nuestro lado es de ' + lado + 'cm entonces nuestro perimetro es de ' + lado*2 + 'cm');
   return 'El perimetro de un cuadrado es su lado multiplicado por dos, si nuestro lado es de ' + lado + 'cm entonces nuestro perimetro es de ' + lado*2 + 'cm';
}
retornarPerimetro(7)

function areaDelTriangulo(base, altura) {
   // Calcula el área de un triángulo y retorna el resultado.
   // Tu código:
   console.log('La base: ' + base + 'cm, por la altura: ' + altura + 'cm nos daría el area del triangulo, en este caso de: ' + base*altura + 'cm');
   return 'La base: ' + base + 'cm, por la altura: ' + altura + 'cm nos daría el area del triangulo, en este caso de: ' + base*altura + 'cm';
}
areaDelTriangulo(2,5)

function deEuroAdolar(euro) {
   // Supongamos que 1 euro equivale a 1.20 dólares.
   // Debes calcular el valor recibido como argumento pasándolo a dolares.
   // Tu código:
   console.log(euro + ' euros son ' + euro*1.2 + ' dolares');
   return euro + ' euros son ' + euro*1.2 + ' dolares';
}
deEuroAdolar(10)

function esVocal(letra) {
   // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
   // Si el usuario ingresa un string de más de un caracter debes retornar el mensaje: "Dato incorrecto".
   // Si no es vocal, tambien debe retornar "Dato incorrecto".
   // Tu código:
   if (letra.length==1) console.log('Es vocal');
   else console.log('Dato incorrecto');
}
esVocal('ab');

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   esPositivo,
   agregarSimboloExclamacion,
   combinarNombres,
   obtenerSaludo,
   obtenerAreaRectangulo,
   retornarPerimetro,
   areaDelTriangulo,
   deEuroAdolar,
   esVocal,
};
