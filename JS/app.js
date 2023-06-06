console.log("esta conectado")


let intentos = 3;
let ingresoExitoso = false;

for (let i = 0; i < intentos; i++) {
  let nombre = prompt("Ingresa tu nombre: ");

  if (!nombre) {
    alert("No respondiste lo pedido. No podes ingresar a la página.");
    continue;
  }

  let edad = parseInt(prompt("Ingresa tu edad: "));

  if (isNaN(edad) || edad <= 0) {
    alert("No respondiste lo pedido. No podes ingresar a la página.");
    continue;
  }

  if (edad >= 18) {
    alert("Bienvenido/a, " + nombre + "! Puedes entrar a la página.");
    ingresoExitoso = true;
    break;
  } else {
    alert(nombre + ", no puedes ingresar a la página.");
    ingresoExitoso = true;
    break;
  }
}

if (!ingresoExitoso) {
  alert("Llegaste al máximo de intentos. No puedes ingresar a la página.");
}




/*
for(let i = 0; i < 10; i++)
 { alert(i);}
no me funca alguna sintaxis error

*/
/*
for(let i = 1; i <= 100; i++){
  if( i % 3 === 0 && i % 5 ===0){
    console.log("FizzBuzz");
  }else if(i % 3 ===0){
    console.log("FIZZ");
  }else if(i % 5 ===0){
    console.log("Buzz");
  }else{
    console.log(i);
  }
}
*/
/*
for(let i = 0; i < 10; i++){
  if(i === 5){
    break;}
    alert(i);
}
*/
/*
let numeroA = 1;
let numeroB = 2;
const NUMEROC = 5;

let resultadosuma = numeroA + numeroB;

console.log("resultado de la suma" + resultadosuma);


let nombre = "Martin";
let apellido = "Romero";

let nombreapellido = nombre + apellido;

console.log("se llama" + nombreapellido);

let edad = 18;
let licenciaConducir = true;
debugger
if (edad >= 18 && licenciaConducir) {
  console.log("Excelente");
  console.log("Toma, puedes manejar el auto");
} else if (edad >= 18 && !licenciaConducir) {
  console.log("Excelente");
  console.log("Vamos a sacar el carnet");
} else {
  console.log("Vuelve más tarde");
}

*/

/*
let usuarioNombre = prompt("Digame tu nombre");


debugger
if(usuarioNombre === ''){
  alert("Debes escribir un nombre");
}else if(usuarioNombre === 'Cristian' || usuarioNombre === 'cristian'){
  alert(`bienvenido ${usuarioNombre}`);
}else{
  alert("Debe ingresar un nombre");
}
*/