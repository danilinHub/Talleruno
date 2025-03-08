const prompt = require('prompt-sync')();
// punto 1
const valordeFactura = parseFloat(prompt('Ingrese el valor de la factura:'));
if (valordeFactura > 50000) {
    const impuestos = valordeFactura * 0.15;
    const total = valordeFactura + impuestos;
    console.log(`El valor total de la factura con impuestos es: $${total}`);
} else {
    
    console.log(`El valor de la factura es: $${valordeFactura}`);
}

// punto 2/3
const edad = parseInt(prompt('Digite su edad en años: '));

if (edad > 0) {
    if (edad >= 0 && edad <= 9) {
        console.log("Es niño");
    } else if (edad >= 10 && edad < 17) {
        console.log("Es adolescente");
    } else if (edad >= 18 && edad <= 40) {
        console.log("Es adulto");
    } else if (edad > 40 && edad < 60) {
        console.log("Es adulto mayor");
    } else {
        console.log("Es abuelo");
    }
}

// punto 4

function operacionesMatematicas() {
    console.log('Seleccione una opción:');
    console.log('1: Sumar');
    console.log('2: Restar');
    console.log('3: Multiplicar');
    console.log('4: Dividir');
    console.log('5: Raíz Cuadrada');
    console.log('6: Salir');

    const opcion = parseInt(prompt('Ingrese una opción: '));
    if (opcion >= 1 && opcion <= 5) {
        const num1 = parseFloat(prompt('Ingrese el primer número: '));
        if (opcion !== 5) {
            const num2 = parseFloat(prompt('Ingrese el segundo número: '));
            switch (opcion) {
                case 1:
                    console.log(`Resultado: ${num1 + num2}`);
                    break;
                case 2:
                    console.log(`Resultado: ${num1 - num2}`);
                    break;
                case 3:
                    console.log(`Resultado: ${num1 * num2}`);
                    break;
                case 4:
                    if (num2 !== 0) {
                        console.log(`Resultado: ${num1 / num2}`);
                    } else {
                        console.log('No se puede dividir por cero');
                    }
                    break;
            }
        } else {
            console.log(`Resultado: ${Math.sqrt(num1)}`);
        }
    } else if (opcion === 6) {
        console.log('Salir');
    } else {
        console.log('Opción no válida');
    }
}
operacionesMatematicas();

// punto 5
function fibonacci(n) {
    let a = 0, b = 1, temp;
    console.log('Serie Fibonacci:');
    while (n >= 0) {
        console.log(a);
        temp = a;
        a = b;
        b = temp + b;
        n--;
    }
}
const n = parseInt(prompt('Ingrese el valor n para la serie Fibonacci: '));
fibonacci(n);

// punto 6
let suma = 0;
while (suma < 50) {
    const numero = parseFloat(prompt('Ingrese un número: '));
    suma += numero;
}
console.log(`La suma total es: ${suma}`);

// punto 7
let valores = [];
for (let i = 0; i < 10; i++) {
    valores.push(parseFloat(prompt(`Ingrese el valor ${i + 1}: `)));
}
const sumaValores = valores.reduce((a, b) => a + b, 0);
const valorMayor = Math.max(...valores);
const valorMenor = Math.min(...valores);
const promedio = sumaValores / valores.length;

console.log(`Suma: ${sumaValores}`);
console.log(`Valor mayor: ${valorMayor}`);
console.log(`Valor menor: ${valorMenor}`);
console.log(`Promedio: ${promedio}`);

// punto 8
class Persona {
    constructor(nombres, apellidos, genero, fechaNacimiento, edad, salario) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.genero = genero;
        this.fechaNacimiento = fechaNacimiento;
        this.edad = edad;
        this.salario = salario;
    }

    consultarPersona() {
        console.log(`Nombres: ${this.nombres}`);
        console.log(`Apellidos: ${this.apellidos}`);
        console.log(`Género: ${this.genero}`);
        console.log(`Fecha de Nacimiento: ${this.fechaNacimiento}`);
        console.log(`Edad: ${this.edad}`);
        console.log(`Salario: ${this.salario}`);
    }
    modificarPersona(nombres, apellidos, genero, fechaNacimiento, edad, salario) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.genero = genero;
        this.fechaNacimiento = fechaNacimiento;
        this.edad = edad;
        this.salario = salario;
    }

    aumentarSalario(aumento) {
        this.salario += aumento;
    }

    verificarMayorEdad() {
        if (this.edad >= 18) {
            console.log("Es mayor de edad");
        } else {
            console.log("Es menor de edad");
        }
    }
}
const nombres = prompt('Ingrese los nombres: ');
const apellidos = prompt('Ingrese los apellidos: ');
const genero = prompt('Ingrese el género: ');
const fechaNacimiento = prompt('Ingrese la fecha de nacimiento (YYYY-MM-DD): ');
const edadPersona = parseInt(prompt('Ingrese la edad: '));
const salario = parseFloat(prompt('Ingrese el salario: '));

const persona = new Persona(nombres, apellidos, genero, fechaNacimiento, edadPersona, salario);

function menuPersona() {
    console.log('Seleccione una opción:');
    console.log('a: Consultar persona');
    console.log('b: Modificar persona');
    console.log('c: Aumentar salario');
    console.log('d: Verificar mayoría de edad');
    console.log('e: Salir');

    const opcion = prompt('Ingrese una opción: ');

    switch (opcion) {
        case 'a':
            persona.consultarPersona();
            break;
        case 'b':
            const nuevosNombres = prompt('Ingrese los nuevos nombres: ');
            const nuevosApellidos = prompt('Ingrese los nuevos apellidos: ');
            const nuevoGenero = prompt('Ingrese el nuevo género: ');
            const nuevaFechaNacimiento = prompt('Ingrese la nueva fecha de nacimiento (YYYY-MM-DD): ');
            const nuevaEdad = parseInt(prompt('Ingrese la nueva edad: '));
            const nuevoSalario = parseFloat(prompt('Ingrese el nuevo salario: '));
            persona.modificarPersona(nuevosNombres, nuevosApellidos, nuevoGenero, nuevaFechaNacimiento, nuevaEdad, nuevoSalario);
            break;
        case 'c':
            const aumento = parseFloat(prompt('Ingrese el aumento de salario: '));
            persona.aumentarSalario(aumento);
            break;
        case 'd':
            persona.verificarMayorEdad();
            break;
        case 'e':
            console.log('salir');
            return;
            default:
                console.log('Opción no válida');
        }
        menuPersona();
    }
    
    menuPersona();

// punto 9
class Vehiculo {
    constructor(placa, color, marca, modelo, kilometraje, velocidad = 0) {
        this.placa = placa;
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        this.kilometraje = kilometraje;
        this.velocidad = velocidad;
        this.encendido = false;
    }

    prender() {
        if (this.encendido) {
            console.log('El vehículo ya está encendido.');
        } else {
            this.encendido = true;
            console.log(`Placa: ${this.placa}`);
            console.log(`Color: ${this.color}`);
            console.log(`Marca: ${this.marca}`);
            console.log(`Modelo: ${this.modelo}`);
            console.log(`Kilometraje: ${this.kilometraje}`);
            console.log(`Velocidad: ${this.velocidad}`);
            console.log('El vehículo ha sido prendido.');
        }
    }

    apagar() {
        if (!this.encendido) {
            console.log('El vehículo ya está apagado.');
        } else {
            this.encendido = false;
            console.log(`Placa: ${this.placa}`);
            console.log(`Color: ${this.color}`);
            console.log(`Marca: ${this.marca}`);
            console.log(`Modelo: ${this.modelo}`);
            console.log(`Kilometraje: ${this.kilometraje}`);
            console.log(`Velocidad: ${this.velocidad}`);
            console.log('El vehículo ha sido apagado.');
        }
    }

    acelerar() {
        if (!this.encendido) {
            console.log('No se puede acelerar, el vehículo está apagado.');
        } else if (this.velocidad >= 100) {
            console.log('No se puede acelerar más, se ha alcanzado la velocidad máxima.');
        } else {
            this.velocidad += 10;
            this.kilometraje += 10;
            console.log(`El vehículo ha acelerado. Velocidad actual: ${this.velocidad} km/h. Kilometraje: ${this.kilometraje} km.`);
        }
    }
}

const placa = prompt('Ingrese la placa del vehículo: ');
const color = prompt('Ingrese el color del vehículo: ');
const marca = prompt('Ingrese la marca del vehículo: ');
const modelo = prompt('Ingrese el modelo del vehículo: ');
const kilometraje = parseFloat(prompt('Ingrese el kilometraje del vehículo: '));

const vehiculo = new Vehiculo(placa, color, marca, modelo, kilometraje);

function menuVehiculo() {
    console.log('Seleccione una opción:');
    console.log('a: Prender vehículo');
    console.log('b: Apagar vehículo');
    console.log('c: Acelerar vehículo');
    console.log('d: Salir');

    const opcion = prompt('Ingrese una opción: ');

    switch (opcion) {
        case 'a':
            vehiculo.prender();
            break;
        case 'b':
            vehiculo.apagar();
            break;
        case 'c':
            vehiculo.acelerar();
            break;
        case 'd':
            console.log('Saliendo...');
            return;
        default:
            console.log('Opción no válida');
    }
    menuVehiculo();
}
menuVehiculo();

// punto 10
