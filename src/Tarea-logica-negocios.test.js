import fs from "fs";
import * as gestor from './Tarea-logica-negocios.js';
import * as listas from './Listas-logica-negocios.js';
import * as validaciones from './Validaciones-logica-negocios.js';
import { Tarea } from './Tarea-logica-negocios.js';

describe("Gestor Tareas", () => {

    // Asignar Titulo a una Tarea

    it("Deberia devolver el titulo", () => {
        expect(gestor.asignarCategoriaATarea(Tarea, "")).toEqual(
            "No se creo la tarea. CATEGORIA INVALIDA");
    });

});
