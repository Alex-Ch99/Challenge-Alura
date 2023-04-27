export function validateFormatText(text) {
  let mayus = /[A-Z]/.test(text);
  let tildes = /[áéíóú]/.test(text);
  return mayus || tildes;
}
