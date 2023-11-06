function encontrarDuplicados(numeros) {
    const duplicados = [];

    for (let i = 0; i < numeros.length; i++) {
        for (let j = i + 1; j < numeros.length; j++) {
            if (numeros[i] === numeros[j]) {
                duplicados.push(numeros[i]);
                break;
            }
        }
    }

    return duplicados;
}

// Ejemplo de uso:
const arregloNumeros = [1, 2, 3, 4, 5, 2, 6, 3, 7, 8, 9, 1, 5, 7, 8, 10, 3,6 ];
const numerosDuplicados = encontrarDuplicados(arregloNumeros);
console.log("Ejercicio 3: Duplicados")
console.log("Números duplicados:", numerosDuplicados);
