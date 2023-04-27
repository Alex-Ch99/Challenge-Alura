import { validateFormatText } from "./helpers.js";

/*Variables para trabajar con el DOM */
const inputText = document.getElementById("textarea");
const outputText = document.querySelector(".text-result");
const btnEncrypt = document.getElementById("btn-encriptar");
const btnDecrypt = document.getElementById("btn-desencriptar");
const btnCopy = document.getElementById("btn-copiar");
const outSection = document.querySelector(".message");

/*Funcion para desaparecer el contenido de salida de texto*/

function hiddenImage() {
  if (!inputText.value || validateFormatText(inputText.value)) return;
  outSection.classList.add("active");
}

/* Funcion para encriptar los mensajes*/
function encrypting() {
  let listCharacter = [];
  let textToEncript = inputText.value;
  if (validateFormatText(textToEncript)) {
    alert("El texto contiene alguna tilde o letra mayúscula");
    return;
  }
  let cleanMessage = textToEncript.toLowerCase().split("");
  for (let i = 0; i < cleanMessage.length; i++) {
    if (cleanMessage[i] === "a") {
      listCharacter.push("ai");
    } else if (cleanMessage[i] === "e") {
      listCharacter.push("enter");
    } else if (cleanMessage[i] === "i") {
      listCharacter.push("imes");
    } else if (cleanMessage[i] === "o") {
      listCharacter.push("ober");
    } else if (cleanMessage[i] === "u") {
      listCharacter.push("ufat");
    } else {
      listCharacter.push(cleanMessage[i]);
    }
  }
  let encryptedResult = listCharacter.join("");
  outputText.textContent = encryptedResult;
}

btnEncrypt.addEventListener("click", hiddenImage);
btnEncrypt.addEventListener("click", encrypting);

inputText.addEventListener("input", (e) => {
  if (!e.target.value) {
    btnEncrypt.disabled = true;
    btnDecrypt.disabled = true;
  } else {
    btnEncrypt.disabled = false;
    btnDecrypt.disabled = false;
  }
});
/* Funcion para desencriptar los mensajes* */
function decryptText() {
  let words = [];
  let textToDecrypt = inputText.value;
  if (validateFormatText(textToDecrypt)) {
    alert("El texto contiene alguna tilde o letra mayúscula");
    return;
  }
  let messageInWords = textToDecrypt.toLowerCase().split(" ");
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
    words.push(messageInWords[i]);
  }
  let decryptResult = words.join(" ");
  outputText.textContent = decryptResult;
}
btnDecrypt.addEventListener("click", hiddenImage);
btnDecrypt.addEventListener("click", decryptText);

/*Funcion para copiar lo que hay dentro de la salida de texto */
function copy() {
  navigator.clipboard
    .writeText(outputText.textContent)
    .then(() => {
      alert("Texto copiado al portapapeles");
    })
    .catch((err) => {
      console.error("Error al copiar el texto: ", err);
    });
}
btnCopy.addEventListener("click", copy);
