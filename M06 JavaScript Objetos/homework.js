/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function crearGato(nombre, edad) {
   // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
   // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
   // Además, agregar una propiedad con el nombre "meow".
   // La propiedad "meow" será una función que retorne el string: "Meow!".
   // Retornar el objeto.
   // Tu código:
   let gato = {};

   gato.nombre = nombre;
   gato.edad = edad;

   gato.meow = function() {
      return 'Meow';
   }
   return gato;
}
 let  newGato = crearGato('tom', 2);
 console.log(newGato.nombre);
 console.log(newGato.edad);
 console.log(newGato.meow());

function nuevoUsuario(nombre, email, password) {
   // Debes crear un nuevo objeto.
   // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
   // Retornar el objeto.
   // Tu código:
   let usuario = {};

   usuario.nombre = nombre;
   usuario.email = email;
   usuario.password = password;

   return usuario;
}

let miUsuario = nuevoUsuario("John Doe", "johndoe@example.com", "123456");
console.log(miUsuario.nombre);
console.log(miUsuario.email);
console.log(miUsuario.password);

function agregarPropiedad(objeto, propiedad) {
   // Recibirás un objeto por parámetro.
   // Debes agregarle una propiedad con el nombre recibido por parámetro.
   // Esta propiedad será igual al valor `null`.
   // Retornar el objeto.
   // Tu código:
   Object.defineProperty(objeto, propiedad, {
      value: null,
      writable: true,
      enumerable: true,
      configurable: true
    });
   return objeto
}
var miObjeto = {};
agregarPropiedad(miObjeto, "nuevaPropiedad");
console.log(miObjeto.nuevaPropiedad);

function invocarMetodo(objeto, metodo) {
   // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
   // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
   // [NOTA]: no necesitar retornar nada.
   // Tu código:
   function invocarMetodo(objeto, metodo) {
      
      if (typeof objeto[metodo] === "function") {
        
        objeto[metodo]();
      }
    }
    
}
let miObjeto = {
   saludar: function() {
     console.log("¡Hola!");
   }
 };
 
 invocarMetodo(miObjeto, "saludar");
 
function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
   // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
   // Debes multiplicar este número por 5 y retornar el resultado.
   // Tu código:
   let resultado = objetoMisterioso.resultadoMisterioso * 5;
   
   return resultado
}

let miObjeto = {
   resultadoMisterioso: 10
 };
 
 var resultado = multiplicarNumeroDesconocidoPorCinco(miObjeto);
 console.log(resultado);
 

function eliminarPropiedad(objeto, propiedad) {
   // El parámetro "propiedad" es una propiedad del objeto que recibes.
   // Debes eliminarla del objeto y retornarlo finalmente.
   // Tu código:
   delete objeto[propiedad];

   return objeto
}

let miObj = {
   nombre: 'jose',
   edad: 30,
   email:'jose@gmail.com',
};
eliminarPropiedad(miObj, 'edad');
console.log(miObj);

function tieneEmail(objetoUsuario) {
   // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   if(typeof objetoUsuario.email !== 'undefined'){
      return true;
   } else{
      return false;

   }
}

let usuario1 = {
   email: 'jose@ejemplo.com'
};
console.log(tieneEmail(usuario1));

let usuario2 = {
   nombre: 'jose'
};
console.log(tieneEmail(usuario2));

function tienePropiedad(objeto, propiedad) {
   // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   return propiedad in objeto;
}

let nuevoObjeto = {
   nommbre: 'jose',
   edad: 30,
   email: 'jose@ejemplo.com'
};

console.log(tienePropiedad(nuevoObjeto, 'direccion'));
console.log(tienePropiedad(nuevoObjeto, 'edad'));

function verificarPassword(objetoUsuario, password) {
   // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   if( objetoUsuario.password === password){
      return true;
   } else{
      return false;
   }
}

let person = {
   username: 'jasanch',
   password: 'jarosa'
};

console.log(verificarPassword(person, 'josaro'));
console.log(verificarPassword(person, 'jarosa'));

function actualizarPassword(objetoUsuario, nuevaPassword) {
   // Reemplaza la contrseña guardada en la propiedad "password" del "objetoUsuario".
   // La nueva contraseña la recibes por parámetro.
   // Retornar el objeto.
   // Tu código:
   var objetoActualizado = {
      ...objetoUsuario,
      password: nuevaPassword
    };
    return objetoActualizado;
}
var usuario = {
   username: "john_doe",
   password: "old_password"
 };
 
 console.log(actualizarPassword(usuario, "new_password"));


function agregarAmigo(objetoUsuario, nuevoAmigo) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
   // Debes agregar el "nuevoAmigo" al final de este arreglo.
   // Retornar el objeto.
   // Tu código:
   objetoUsuario.amigos.push(nuevoAmigo);
  return objetoUsuario;
}

var usuario = {
   nombre: "John Doe",
   amigos: ["Amigo 1", "Amigo 2"]
 };
 
 console.log(agregarAmigo(usuario, "Amigo 3"));


function pasarUsuarioAPremium(objetoMuchosUsuarios) {
   // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
   // Cada usuario tiene una propiedad llamada "esPremium".
   // Define esta propiedad de todos los usuarios como true.
   // Retornar el arreglo.
   // Tu código:
   for (var i = 0; i < objetoMuchosUsuarios.length; i++) {
      objetoMuchosUsuarios[i].esPremium = true;
    }
    return objetoMuchosUsuarios;
}
var usuarios = [
   { nombre: "Usuario 1", esPremium: false },
   { nombre: "Usuario 2", esPremium: false },
   { nombre: "Usuario 3", esPremium: false }
 ];
 
 console.log(pasarUsuarioAPremium(usuarios));

function sumarLikesDeUsuario(objetoUsuario) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
   // Este arreglo contiene objetos (post).
   // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
   // Debes sumar los likes de todos los post y retornar el resultado.
   // Tu código:
   var posts = objetoUsuario.posts;
   var totalLikes = posts.reduce(function(acc, post) {
     return acc + post.likes;
   }, 0);
   return totalLikes;
 
}

var usuario = {
   nombre: "John Doe",
   posts: [
     { likes: 10 },
     { likes: 20 },
     { likes: 5 }
   ]
 };
 
 console.log(sumarLikesDeUsuario(usuario));

function agregarMetodoCalculoDescuento(objetoProducto) {
   // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
   // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
   // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
   // Luego debes restar del precio total del producto ese valor de descuento.
   // Retornar el precio final.
   // Ejemplo:
   // Precio ---> 10
   // PorcentajeDeDescuento ---> 0.2
   // Precio final ---> 8
   // Tu código:
   var descuento = this.precio * this.porcentajeDeDescuento;
   var precioFinal = this.precio - descuento;
   return precioFinal;
}
var producto = {
   precio: 10,
   porcentajeDeDescuento: 0.2
 };
 
 console.log(producto.calcularPrecioDescuento());
 
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearGato,
   nuevoUsuario,
   agregarPropiedad,
   invocarMetodo,
   multiplicarNumeroDesconocidoPorCinco,
   eliminarPropiedad,
   tieneEmail,
   tienePropiedad,
   verificarPassword,
   actualizarPassword,
   agregarAmigo,
   pasarUsuarioAPremium,
   sumarLikesDeUsuario,
   agregarMetodoCalculoDescuento,
};
