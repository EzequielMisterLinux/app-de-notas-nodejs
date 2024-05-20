import fs from 'fs';
import chalk from 'chalk';

const cargarNotas = () => {
    try {
        const dataBuffer = fs.readFileSync('notas.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};

const guardarnotas = (notas) => {
    const dataJSON = JSON.stringify(notas);
    fs.writeFileSync('notas.json', dataJSON);
};

const agregarNotas = (title, body) => {
    const notas = cargarNotas();
    const duplicateNote = notas.find((note) => note.title === title);

    if (!duplicateNote) {
        notas.push({
            title,
            body
        });
        guardarnotas(notas);
        console.log(chalk.green.inverse('Nota agregada'));
    } else {
        console.log(chalk.red.inverse('Hubo un error, nota no agregada'));
    }
};

const eliminarNotas = (title) => {
    const notas = cargarNotas();
    const notasToKeep = notas.filter((note) => note.title !== title);

    if (notas.length > notasToKeep.length) {
        guardarnotas(notasToKeep);
        console.log(chalk.green.inverse('Nota eliminada'));
    } else {
        console.log(chalk.red.inverse('Nota no eliminada'));
    }
};

const listarNotas = () => {
    const notas = cargarNotas();
    console.log(chalk.inverse('Tus notas:'));
    notas.forEach((note) => {
        console.log(note.title + ": " + note.body);
    });
};

const leerNotas = (title) => {
    const notas = cargarNotas();
    const note = notas.find((note) => note.title === title);

    if (note) {
        console.log(chalk.inverse(note.title));
        console.log(chalk.blue(note.body));
    } else {
        console.log(chalk.red.inverse('Nota no encontrada'));
    }
};


const editarNotas = (title, newBody) => {
    const notas = cargarNotas();
    const noteIndex = notas.findIndex((note) => note.title === title);

    if (noteIndex !== -1) {
        notas[noteIndex].body = newBody;
        guardarnotas(notas);
        console.log(chalk.green.inverse('Nota editada'));
    } else {
        console.log(chalk.red.inverse('Nota no encontrada, no se pudo editar'));
    }
};

export {
    agregarNotas,
    eliminarNotas,
    listarNotas,
    leerNotas,
    editarNotas
}
