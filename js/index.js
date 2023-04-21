console.log("Hello world");
/*Funcion para encriptar */
function encriptar(string) {
  const vocales = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
  };
  //   let resultado = "";
  //   for (let i = 0; i < string.length; i++) {
  //     const letra = string[i].toLowerCase();
  //     if (letra === " ") {
  //       resultado += " ";
  //     } else if (vocales[letra]) {
  //       resultado += vocales[letra];
  //     } else if (!vocales[letra]) {
  //       resultado += string[i];
  //     }
  //   }

  let resultado = string;
  for (let letra in vocales) {
    const regex = new RegExp(letra, "g");
    resultado = resultado.replace(regex, vocales[letra]);
  }
  return resultado;
}

console.log(encriptar("gato"));

/*Funcion para desencriptar */
function desencriptar(stringEncriptado) {
  const vocales = {
    ai: "a",
    enter: "e",
    imes: "i",
    ober: "o",
    ufat: "u",
  };
  let resultado = stringEncriptado;
  for (let clave in vocales) {
    let regex = new RegExp(clave, "g");
    resultado = resultado.replace(regex, vocales[clave]);
  }
  return resultado;
}

console.log(
  desencriptar(
    "fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!"
  )
);

function encriptar2(string) {
  const vocales = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
  };
  const resultado = string
    .split("")
    .map((letra) => vocales[letra.toLowerCase()] || letra)
    .join("");
  return resultado;
}

console.log(encriptar2("gato"));
