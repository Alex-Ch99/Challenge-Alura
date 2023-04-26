/*Variables para trabajar con el DOM */
const inputText = document.getElementById("message");
const outputText = document.querySelector(".text-result");
const btnEncriptar = document.getElementById("btn-encriptar");
const btnDesEncriptar = document.getElementById("btn-desencriptar");
const btnCopiar = document.getElementById("btn-copiar");

let textToEncript = inputText.value;
let textEncripted = outputText.textContent;

/* *Viendo la manera de como encriptar los mensajes* */
let encriptado = [];
function encriptar(message) {
  let cleanMessage = message.toLowerCase().split("");
  // console.log(cleanMessage);
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
  return encriptado.join("");
}
// console.log(encriptar("gato"));

/* *Viendo la manera de como desencriptar los mensajes* */
let palabras = [];
function desencriptar(message) {
  let messageInWords = message.split(" ");
  console.log(messageInWords.join(" "));
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
  return palabras.join(" ");
}
// console.log(desencriptar("uso ainoberaswefmwnjsa<k anajfa  n"));
