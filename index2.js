import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { agregarNotas, eliminarNotas, listarNotas, leerNotas } from './utiles/notas.js';

console.log("ingrese: agregar string string \n ingrese eliminar string \ningrese listar \n ingrese leer string ");

yargs(hideBin(process.argv))
    .command({
        command: 'agregar',
        describe: 'Agregar una nueva nota',
        builder: {
            title: {
                describe: 'Título de la nota',
                demandOption: true,
                type: 'string'
            },
            body: {
                describe: 'Cuerpo de la nota',
                demandOption: true,
                type: 'string'
            }
        },
        handler(argv) {
            agregarNotas(argv.title, argv.body);
        }
    })
    .command({
        command: 'eliminar',
        describe: 'Eliminar una nota existente',
        builder: {
            title: {
                describe: 'Título de la nota a eliminar',
                demandOption: true,
                type: 'string'
            }
        },
        handler(argv) {
            eliminarNotas(argv.title);
        }
    })
    .command({
        command: 'listar',
        describe: 'Listar todas las notas',
        handler() {
            listarNotas();
        }
    })
    .command({
        command: 'leer',
        describe: 'Leer una nota específica',
        builder: {
            title: {
                describe: 'Título de la nota a leer',
                demandOption: true,
                type: 'string'
            }
        },
        handler(argv) {
            leerNotas(argv.title);
        }
    })
    .parse()
    
