import { agregarNotas, eliminarNotas, listarNotas, leerNotas, editarNotas } from './utiles/notas.js';

import readline from 'readline';

const leerLinea = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const menu = () => {
    console.log('1. Agregar nota');
    console.log('2. Eliminar nota');
    console.log('3. Listar notas');
    console.log('4. Leer nota');
    console.log('5. Editar nota');
    console.log('6. Salir');
    leerLinea.question('Seleccione una opción: ', (opcion) => {
        switch (opcion) {
            case '1':
                leerLinea.question('Ingrese el título de la nota: ', (titulo) => {
                    leerLinea.question('Ingrese el cuerpo de la nota: ', (cuerpo) => {
                        agregarNotas(titulo, cuerpo);
                        menu();
                    });
                });
                break;
            case '2':
                leerLinea.question('Ingrese el título de la nota a eliminar: ', (titulo) => {
                    eliminarNotas(titulo);
                    menu();
                });
                break;
            case '3':
                listarNotas();
                menu();
                break;
            case '4':
                leerLinea.question('Ingrese el título de la nota a leer: ', (titulo) => {
                    leerNotas(titulo);
                    menu();
                });
                break;
            case '5':
                listarNotas();
                leerLinea.question('Ingrese el título de la nota a editar: ', (titulo) => {
                    leerLinea.question('Ingrese el nuevo cuerpo de la nota: ', (nuevoCuerpo) => {
                        editarNotas(titulo, nuevoCuerpo);
                        menu();
                    });
                });
                break;
            case '6':
                console.log('Saliendo...');
                leerLinea.close();
                break;
            default:
                console.log('Opción no válida');
                menu();
                break;
        }
    });
};

menu();
