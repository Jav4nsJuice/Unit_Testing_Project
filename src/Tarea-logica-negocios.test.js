import fs from "fs";
import * as gestor from './Tarea-logica-negocios.js';
import * as listas from './Listas-logica-negocios.js';
import * as validaciones from './Validaciones-logica-negocios.js';
import { Tarea } from './Tarea-logica-negocios.js';

describe("Gestor Tareas", () => {

    it("Deberia devolver la tarea con el titulo", () => {
        expect(gestor.asignarTituloATarea(Tarea, "Titulo")).toEqual(
            Tarea);
    });
    it("Deberia devolver mensaje de titulo invalido", () => {
        expect(gestor.asignarTituloATarea(Tarea, "")).toEqual(
            "No se creo la tarea. TITULO INVALIDO");
    });
    it("Deberia devolver tarea con la descripcion agregada", () => {
        expect(gestor.asignarDescipcionATarea(Tarea, "")).toEqual(
            Tarea);
    });

    it("Deberia devolver categoría invalida", () => {
        expect(gestor.asignarCategoriaATarea(Tarea, "")).toEqual(
            "No se creo la tarea. CATEGORIA INVALIDA");
    });

    it("Deberia devolver título inválido", () => {
        expect(gestor.crearTareaConTitulo("","")).toEqual(
            "No se creo la tarea. TITULO INVALIDO");
    });

    it("Deberia devolver la tarea con el título enviado", () => {
        expect(gestor.crearTareaConTitulo("Don Quijote","")).toEqual(
            "Don Quijote");
    });

});
