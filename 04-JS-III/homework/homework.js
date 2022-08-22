// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  var dimension = array.length;

  for(i=0;i<dimension;i++){
    if(i==0){
      elemento = array[i];
    }
  }

  return elemento;
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var dimension = array.length;

  for(i=0;i<dimension;i++){
    if(i==dimension-1){
      elemento = array[i];
    }
  }

  return elemento;
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:

  dimension = array.length;

  return dimension;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var dimension = array.length;
  var array2 = [];

  for(i=0;i<dimension;i++){
    array2[i] = array[i] + 1
  }

  return array2;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);

  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:

  array.unshift(elemento);

  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var dimension = palabras.length;
  var frase ="";

  for(i=0;i<dimension;i++){
    frase = frase+palabras[i]+" ";
  }
  frase_final=frase.trimEnd();

  return frase_final;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var dimension = array.length;

  for(i=0;i<dimension;i++){
    if(array[i] == elemento){
      estado = true;
      break;
    }else{
      estado = false;
    }
  }

  return estado;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:

  var dimension = numeros.length;
  var suma = 0;

  for(i=0;i<dimension;i++){
    suma = suma + numeros[i];
  }

  return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:

  var dimension = resultadosTest.length;
  var suma = 0;

  for(i=0;i<dimension;i++){
    suma = suma + resultadosTest[i];
  }

  promedio = suma / dimension;

  return promedio;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  
  var dimension = numeros.length;

  var array_ordenado = numeros.sort((a,b) => a - b);

  for(i=0;i<dimension;i++){
    if(i == dimension - 1){
       numero_mayor = numeros[i];
    }
  }

  return numero_mayor;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:

  if(arguments.length == 0){
    data = 0;
  }else if(arguments.length == 1){
    data = arguments[0];
  }else{
    var  data = arguments[0];

    for(i=1;i<arguments.length;i++){
      data = data * arguments[i];
    }
  }

  return data;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var dimension = arreglo.length;
  var cantidad = 0;

   for(i=0;i<dimension;i++){
    if(arreglo[i] > 18){
       cantidad = cantidad + 1;
    }
  }

  return cantidad;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if(numeroDeDia >= 2 && numeroDeDia <= 6){
    mensaje = "Es dia Laboral";
  }else if(numeroDeDia == 1 || numeroDeDia == 7){
    mensaje = "Es fin de semana";
  }else{
    mensaje = "El numero ingresado no corresponde a un día de la semana";
  }
  
  return mensaje;
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí

  var digito = [...`${n}`].map(c=>parseInt(c));

  for (i=0;i<digito.length;i++){
      if(digito[0] == 9){
          estado = true;
      }else{
          estado = false;
      }
  }

  return estado;
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  for (i=0;i<arreglo.length;i++){
    if(i == arreglo.length - 1){
        break;
    }else if(arreglo[i] == arreglo[i+1]){
        estado = true;
    }else{
        estado = false;
        break;
    }
  }

  return estado;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let meses = [];

  for (let i=0;i<array.length;i++){
      if(array[i] === "Enero" || array[i] === "Marzo"  || array[i] === "Noviembre"){
          meses.push(array[i]);
      }
  }

  if(meses.length < 3){
      estado = "No se encontraron los meses pedidos";
  }else{
      estado = meses;
  }

  return estado;
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var numeros = [];

  for (i=0;i<array.length;i++){
      if(array[i] > 100){
          numeros.push(array[i]);
      }
  }

  return numeros;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:

  let array = []; 
  var suma = numero;

  for(var i=0;i<10;i++){
      suma = suma + 2;
      if(suma === i){
          break;
      }else{
          array.push(suma);
      }
  }

  if(i === suma){
      data = "Se interrumpió la ejecución";
  }else{
      data = array;
  }

  return data;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  array = []; suma = 0;

  for (i=1;i<=10;i++){
    if(i == 5){
      continue;
    }else{
      suma = suma + 2;
      array.push(numero + suma);
    }
  }

  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

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
  mayorACien,
  breakStatement,
  continueStatement
};
