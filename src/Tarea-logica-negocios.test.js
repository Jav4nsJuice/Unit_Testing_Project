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

    it("Deberia devolver la tarea con el titulo y la fecha limite dada", () => {
        expect(gestor.crearTareaConFechaLimite("Don Quijote","2022-12-25","")).toEqual(
            "Don Quijote\nFecha Limite: 2022-12-25");
    });
    it("Deberia devolver fecha invalida", () => {
        expect(gestor.crearTareaConFechaLimite("Don Quijote","2020-12-25","")).toEqual(
            "No se pudo crear la tarea, FECHA INVALIDA.");
    });
    it("Deberia devolver tarea con fecha limite asignada", () => {
        expect(gestor.asignarFechaLimiteATarea(Tarea,"2022-12-25")).toEqual(
            Tarea);
    });
    it("Deberia devolver fecha limite invalida al asignarlo a una tarea ", () => {
        expect(gestor.asignarFechaLimiteATarea(Tarea,"2022-01-01")).toEqual(
            "No se creo la tarea. FECHA LIMITE INVALIDA");
    });
    it("Deberia devolver tarea con etiqueta asignada", () => {
        expect(gestor.asignarEtiquetaATarea(Tarea,"Diario")).toEqual(
            Tarea);
    });
    it("Deberia devolver etiqueta invalida", () => {
        expect(gestor.asignarEtiquetaATarea(Tarea,"")).toEqual(
            "No se creo la tarea. ETIQUETA INVALIDA");
    });
    it("Deberia devolver el titulo de la tarea con la categoria", () => {
        expect(gestor.crearTareaConCategoria("Tarea individual","Personal","")).toEqual(
            "Tarea individual\nCategoria: Personal");
    });
    it("Deberia devolver descripción inválida", () => {
        expect(gestor.crearTareaConDescripcion("","","")).toEqual(
            "No se creo la tarea. DESCRIPCION INVALIDA");
    });
    it("Deberia devolver el título de la tarea con la descripción", () => {
        expect(gestor.crearTareaConDescripcion("Tarea personal","Debe ser realizada mañana","")).toEqual(
            "Tarea personal\nDescripcion: Debe ser realizada mañana");
    });
});
