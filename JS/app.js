console.log("esta conectado")

let intentos = 3;
let intentosFallidos = 0;
let ingresoExitoso = false;
let caracteresPermitidos = /^[A-Za-z]+$/;

for (let i = 0; i < intentos; i++) {
  let nombre = prompt("Ingresa tu nombre: ");

  if (!nombre || !nombre.match(caracteresPermitidos)) {
    console.log("No respondiste lo pedido o ingresaste un nombre inválido.");
    alert("No respondiste lo pedido o ingresaste un nombre inválido.");
    intentosFallidos++;
    continue;
  }

  let edad = parseInt(prompt("Ingresa tu edad: "));

  if (isNaN(edad) || edad <= 0) {
    console.log("No respondiste lo pedido o ingresaste una edad inválida.");
    alert("No respondiste lo pedido o ingresaste una edad inválida.");
    intentosFallidos++;
    continue;
  }

  if (edad >= 18) {
    console.log("Bienvenido/a, " + nombre + "! Podes entrar a la página.");
    alert("Bienvenido/a, " + nombre + "! Podes entrar a la página.");
    ingresoExitoso = true;
    break;
  } else {
    console.log(nombre + ", no podes ingresar a la página.");
    alert(nombre + ", no podes ingresar a la página.");
    ingresoExitoso = true;
    break;
  }
}

if (!ingresoExitoso && intentosFallidos === intentos) {
  console.log("Llegaste al máximo de intentos. No podes ingresar a la página.");
  alert("Llegaste al máximo de intentos. No podes ingresar a la página.");
}


if (ingresoExitoso) {
  /*Código para redireccionar a la página permitida*/
  window.location.href = "www.google.com";
}