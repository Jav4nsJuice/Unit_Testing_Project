import fs from "fs";
import * as gestor from './Tarea-logica-negocios.js';
import * as listas from './Listas-logica-negocios.js';
import * as validaciones from './Validaciones-logica-negocios.js';
import { Tarea } from './Tarea-logica-negocios.js';

describe("Obtener lista de tareas por titulo", () => {
    it("Debería devolver n/a cuando un campo se envía vacío", () => {
        let tarea = new Tarea();
        gestor.asignarTituloATarea(tarea,"Recoger el encargo")
        expect(listas.getListaTareasPorTitulo("Recoger el encargo")).toEqual([]);
    });
});