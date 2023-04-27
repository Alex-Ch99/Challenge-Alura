/*Variables para trabajar con el DOM */
const inputText = document.getElementById("textarea");
const outputText = document.querySelector(".text-result");
const btnEncriptar = document.getElementById("btn-encriptar");
const btnDesEncriptar = document.getElementById("btn-desencriptar");
const btnCopiar = document.getElementById("btn-copiar");
const seccionDeSalida = document.querySelector(".message");

/*Funcion para desaparecer el contenido de salida de texto*/
function ocultarSeccionDeImagen() {
  seccionDeSalida.classList.add("active");
  console.log("Click al boton");
}

/* Funcion para encriptar los mensajes*/
function encriptar() {
  let encriptado = [];
  let textToEncript = inputText.value;
  let mayus = /[A-Z]/.test(textToEncript);
  let tildes = /[áéíóú]/.test(textToEncript);
  if (tildes) {
    alert("No se aceptan vocales con tildes");
  }
  if (mayus) {
    alert("No se aceptan letras mayusculas");
  }
  if (textToEncript === "") {
    alert("No ingresaste ningun texto para encriptar");
  }
  let cleanMessage = textToEncript.toLowerCase().split("");
  for (let i = 0; i < cleanMessage.length; i++) {
    if (cleanMessage[i] === "a") {
      encriptado.push("ai");
    } else if (cleanMessage[i] === "e") {
      encriptado.push("enter");
    } else if (cleanMessage[i] === "i") {
      encriptado.push("imes");
    } else if (cleanMessage[i] === "o") {
      encriptado.push("ober");
    } else if (cleanMessage[i] === "u") {
      encriptado.push("ufat");
    } else {
      encriptado.push(cleanMessage[i]);
    }
  }
  let resultado = encriptado.join("");
  console.log(resultado);
  outputText.textContent = resultado;
}

btnEncriptar.addEventListener("click", ocultarSeccionDeImagen);
btnEncriptar.addEventListener("click", encriptar);

/* Funcion para desencriptar los mensajes* */
function desencriptar() {
  let palabras = [];
  let textToDesEncript = inputText.value;
  let mayus = /[A-Z]/.test(textToDesEncript);
  let tildes = /[áéíóú]/.test(textToDesEncript);
  if (tildes) {
    alert("No se aceptan vocales con tildes");
  }
  if (mayus) {
    alert("No se aceptan letras mayusculas");
  }
  if (textToDesEncript === "") {
    alert("No ingresaste ningun texto para desencriptar");
  }
  let messageInWords = textToDesEncript.toLowerCase().split(" ");
  for (let i = 0; i < messageInWords.length; i++) {
    if (messageInWords[i].includes("ai")) {
      messageInWords[i] = messageInWords[i].replace(/ai/g, "a");
    }
    if (messageInWords[i].includes("enter")) {
      messageInWords[i] = messageInWords[i].replace(/enter/g, "e");
    }
    if (messageInWords[i].includes("imes")) {
      messageInWords[i] = messageInWords[i].replace(/imes/g, "i");
    }
    if (messageInWords[i].includes("ober")) {
      messageInWords[i] = messageInWords[i].replace(/ober/g, "o");
    }
    if (messageInWords[i].includes("ufat")) {
      messageInWords[i] = messageInWords[i].replace(/ufat/g, "u");
    }
    palabras.push(messageInWords[i]);
  }
  let resultado = palabras.join(" ");
  console.log(resultado);
  outputText.textContent = resultado;
}
btnDesEncriptar.addEventListener("click", ocultarSeccionDeImagen);
btnDesEncriptar.addEventListener("click", desencriptar);

/*Funcion para copiar lo que hay dentro de la salida de texto */
function copiar() {
  if (outputText.textContent === "") {
    alert("No hay nada para copiar");
  }
  navigator.clipboard
    .writeText(outputText.textContent)
    .then(() => {
      alert("Texto copiado al portapapeles");
    })
    .catch((err) => {
      console.error("Error al copiar el texto: ", err);
    });
}
btnCopiar.addEventListener("click", copiar);
