
function llenarMatris(n: number) {
    let arreglo: number[][] = new Array(n);
    for (let i = 0; i < n; i++) {
        arreglo[i] = new Array(n);
        for (let j = 0; j < n; j++) {
            arreglo[i][j] = generateRandomInteger(15);
        }
    }
    return arreglo;
}

function mostrarMatris(array: number[][]) {
    console.log("\nMatriz generada: ");
    for (let i = 0; i < array.length; i++) {
        console.log(array[i].join(" "));
    }
}

function generateRandomInteger(max: number): number {
    const bytes = new Uint8Array(1);
    crypto.getRandomValues(bytes);
    if (bytes[0] < max) {
        return bytes[0];
    }
    return generateRandomInteger(max);
}
function sumatoriaFila(fila: number[]) {
    var sumatoria: number = 0;
    for (let i = 0; i < fila.length; i++) {
        sumatoria+=fila[i];
    }
    fila.push(sumatoria);
}

const n = 3;
let arreglo: number[][] = llenarMatris(3);
for (let i = 0; i < n; i++) {
    sumatoriaFila(arreglo[i])
}
mostrarMatris(arreglo);