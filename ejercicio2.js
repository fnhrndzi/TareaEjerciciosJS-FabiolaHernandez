function calcularPromedioNotas(estudiantes) {
    const promedios = [];
  
    for (let i = 0; i < estudiantes.length; i++) {
      const estudiante = estudiantes[i];
      const nombre = estudiante.nombre;
      const notas = estudiante.notas;
  
      let sumaNotas = 0;
      for (let j = 0; j < notas.length; j++) {
        sumaNotas += notas[j];
      }
  
      const promedio = sumaNotas / notas.length;
      promedios.push({ nombre, promedio });
    }
  
    return promedios;
  }
  
  // Ejemplo de uso:
  const estudiantes = [
    { nombre: "Fabiola", notas: [70, 96, 77, 88] },
    { nombre: "Pablo", notas: [65, 95, 70, 87] }
  ];
  
  
  const promediosNotas = calcularPromedioNotas(estudiantes);
  console.log('Ejercicio 2: Promedio de notas')
  console.log(promediosNotas);
  