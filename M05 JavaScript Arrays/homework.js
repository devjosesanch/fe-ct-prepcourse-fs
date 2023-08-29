/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
      let primerElemento = array[0];
      return primerElemento;
} 
let arr = [1, 2, 3, 4, 5];
console.log(devolverPrimerElemento(arr));


function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   let ultimoElemento = array[array.length - 1];
   return ultimoElemento;
}
let ultimo = [1, 2, 3, 4, 5];
console.log(devolverUltimoElemento(ultimo));

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
  let longitud = array.length;
  return longitud;
}

let largo = [1, 2, 3, 4, 5];
console.log(obtenerLargoDelArray(largo));

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   let incremento = [];
   for(let i = 0; i < array.length; i++){
   incremento [i] = array[i] + 1;
   } 
   return incremento
}
let newArr =[1, 2, 3, 4, 5];
console.log(incrementarPorUno(newArr));

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}
let agregar = [1, 2, 3];
let elementos = 4;
console.log(agregarItemAlFinalDelArray(agregar, elementos));

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}
let agre = [1, 2, 3, 4];
let inicia = 0
console.log(agregarItemAlComienzoDelArray(agre, inicia));

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   let frase = palabras.join(' ');
   return frase;

}

let fraseConcat = ['hola', 'mundo'];
console.log(dePalabrasAFrase(fraseConcat));

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   for(let i = 0; i < array.length; i++){
      if(elemento === array[i]){
         return true
      }
   }
   return false
}
let array = [1, 2, 3, 4];
let elemento = 3;
console.log(arrayContiene(array, elemento));

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   let suma = 0
   for (let i = 0; i < arrayOfNums.length; i++){
      suma += arrayOfNums[i];
   }
   return suma;

}
let numeros = [1,2, 3, 4, 5];
console.log(agregarNumeros(numeros));

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   let suma = 0;
   for(let i = 0; i < resultadosTest.length; i++){
      suma += resultadosTest[i];
   }
   resultado = suma / resultadosTest.length;
   return resultado
}
let promedio = [10, 8.5, 6, 7, 9];
console.log(promedioResultadosTest(promedio));

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
 let grande = arrayOfNums[0];
 for(let i = 1; i < arrayOfNums.length; i++){
   if (arrayOfNums[i] > grande){
   grande = arrayOfNums[i];
   }
 }
 return grande;
}
let numer = [1, 2, 3, 4];
console.log(numeroMasGrande(numer));

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if (arguments.length < 1) {
      return 0;
    } else if (arguments.length === 1) {
      return arguments[0];
    } else {
      let product = 1;
      for (let i = 0; i < arguments.length; i++) {
        product *= arguments[i];
      }
      return product;
    }
}

console.log(multiplicarArgumentos(1));
console.log(multiplicarArgumentos(1, 2, 3, 4));

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   let contador = 0;
   for(let i = 0; i < array.length; i++){
      if(array[i] > 18) {
         contador++;
      }
   }
   return contador
}
let cuanto = [1, 20, 13, 44, 55];
console.log(cuentoElementos(cuanto));
console.log(cuentoElementos(0));

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if (numeroDeDia === 1 || numeroDeDia === 7){
      return 'Es fin de semana';
   } else {
      return 'Es dia laboral';
   } 
}

console.log(diaDeLaSemana(3));
console.log(diaDeLaSemana(1));

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   let numString = num.toString();
   return numString.charAt(0) === '9';
}
console.log(empiezaConNueve(912)); 
console.log(empiezaConNueve(123)); 
console.log(empiezaConNueve(945)); 


function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   for(let i = 1; i < array.length; i++){
      if (array[i] !== array[0]){
         return false;
      }
   }
   return true;
}
console.log(todosIguales([1, 1, 1, 1]));
console.log(todosIguales([2, 2, 2, 2, 2]));
console.log(todosIguales([3, 3, 3, 2]));


function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
      let mesesPedidos = [];
      let mesesBuscados = ["Enero", "Marzo", "Noviembre"];
   
      for (let i = 0; i < array.length; i++) {
         if (mesesBuscados.includes(array[i])) {
            mesesPedidos.push(array[i]);
         }
      }
   
      if (mesesPedidos.length === mesesBuscados.length) {
         return mesesPedidos;
      } else {
         return "No se encontraron los meses pedidos";
      }
   }
   
console.log(mesesDelAño(['Enero', 'Julio', 'Noviembre']));
console.log(mesesDelAño(['Enero', 'Marzo', 'Noviembre']));


function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   let resultado = [];
   for (let i = 0; i <=10; i++){
      resultado.push(6 * i);
   }
   return resultado;
}
console.log(tablaDelSeis());

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   let mayorACien = array.filter(function(elementos){
      return elementos > 100;
   });
   return mayorACien;
}

console.log(mayorACien([50, 120, 80, 150, 200]));
console.log(mayorACien([90, 110, 130, 95])); 
console.log(mayorACien([200, 180, 160])); 

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   let array = [];
   let suma = num;
   for (var i = 0; i < 10; i++) {
      suma = num + (i * 2);
      if (suma === i) {
        break;
      } else {
        array.push(suma);
      }
    }
    if (i < 10) {
      return "Se interrumpió la ejecución";
    } else {
      return array;
    }
}

console.log(breakStatement(5)); 
console.log(breakStatement(3)); 
console.log(breakStatement(10));

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
