// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Samuel";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 14;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  return str;
}

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  suma = x + y;

  return suma;
}

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  resta = x - y;

  return resta;
}

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  multi = x * y;

  return multi;
}

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  div = x / y;

  return div;
}

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  if (x == y){
    estado = true;
  }else{
    estado = false;
  }

  return estado;
}

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  if(str1.length == str2.length){
    estado1 = true;
  }else{
    estado1 = false;
  }

  return estado1;
}

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num < 90){
    estado = true;
  }else{
    estado = false;
  }
  return estado;
}

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num > 50){
    estado = true;
  }else{
    estado = false;
  }
  return estado;
}

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  resto = x % y;

  return resto; 
}

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num % 2 == 0){
    estado = true;
  }else{
    estado = false;
  }
  return estado;
}

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num % 2 != 0){
    estado = true;
  }else{
    estado = false;
  }
  return estado;
}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  resultado = Math.pow(num,2);

  return resultado;
}

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  resultado = Math.pow(num,3);

  return resultado;
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  resultado = Math.pow(num,exponent);

  return resultado;
}

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  resultado = Math.round(num);

  return resultado;
}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  resultado = Math.ceil(num);

  return resultado;
}

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  resultado = Math.random()*1;

  return resultado;
}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número 
  //es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if(numero>0){
    resultado = "Es positivo";
  }else if(numero<0){
    resultado = "Es negativo";
  }else {
    resultado = false;
  }

  return resultado;
}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  resultado = str+"!";

  return resultado;
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  nombrecompleto = nombre+" "+apellido;

  return nombrecompleto;
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  resultado = "Hola "+nombre+"!";

  return resultado;
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  area = alto * ancho;

  return area;
}


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  perimetro = 4 * lado;

  return perimetro;
}


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  area = (base * altura)/2;

  return area;
}


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  cambio = euro*1.20;
  return cambio;
}


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  if(letra.length==1){
    if(letra=== "a" || letra==="e" || letra==="i" || letra==="o" || letra==="u" || letra==="A" || letra==="E" || letra==="I" || letra==="O" || letra==="U"){
      resultado = "Es vocal";
    }else{
      resultado = "Dato incorrecto";
    }
  }else{
    resultado = "Dato incorrecto";
  }

  return resultado;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
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
