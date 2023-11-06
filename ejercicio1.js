function contarPalabras(texto) {
    const palabras = texto.split(" ");
    const totalletras = palabras.filter(Boolean);
    return totalletras.length;
}

const textoEjemplo = "¡Hola, este es un ejemplo de texto! ¿Cuántas palabras hay?";
const cantidadPalabras = contarPalabras(textoEjemplo);
console.log("Ejercicio 1: Contar palabras")
console.log(`El texto a evaluar es: ${textoEjemplo}`);
console.log(`Y tiene ${cantidadPalabras} palabra(s).`);
