/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna true si "x" e "y" son iguales.
   // De lo contrario, retorna false.
   // Tu código:
   if (x === y) {
      return true;
   } else {
      return false;
   }
}
console.log(sonIguales(4,2));
console.log(sonIguales(3, 3));
console.log(sonIguales('adri', 'adri'));

function tienenMismaLongitud(str1, str2) {
   // Retorna true si los dos strings tienen la misma longitud.
   // De lo contrario, retorna false.
   // Tu código:
   if (str1.length === str2.length){
      return true;
   } else {
      return false;
   }
}

console.log(tienenMismaLongitud('adri', 'jose'));
console.log(tienenMismaLongitud(1234, 45678));

function menosQueNoventa(num) {
   // Retorna true si el argumento "num" es menor que noventa.
   // De lo contrario, retorna false.
   // Tu código:
   if (num < 90){
      return true;
   } else {
      return false;
   }
}
console.log(menosQueNoventa(23));
console.log(menosQueNoventa(123));

function mayorQueCincuenta(num) {
   // Retorna true si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna false.
   // Tu código:
   if (num > 50){
      return true;
   } else{
      return false;
   }
}
console.log(mayorQueCincuenta(13));
console.log(mayorQueCincuenta(123));

function esPar(num) {
   // Retorna true si "num" es par.
   // De lo contrario, retorna false.
   // Tu código:
   if(num % 2 === 0){
      return true;
   } else {
      return false;
   }
}
console.log(esPar(2));
console.log(esPar(1235));


function esImpar(num) {
   // Retorna true si "num" es impar.
   // De lo contrario, retorna false.
   // Tu código:
   if(num % 2 !== 0){
      return true;
   } else {
      return false
   }
}
console.log(esImpar(13));
console.log(esImpar(30));

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
