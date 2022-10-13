import fs from "fs";
import * as gestor from './Tarea-logica-negocios.js';
import * as listas from './Listas-logica-negocios.js';
import * as validaciones from './Validaciones-logica-negocios.js';
import { Tarea } from './Tarea-logica-negocios.js';

function clearArray(array){
    var i = array.length;
    while(i > 0){
        array.pop();
        i--;
    }
}

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
    it("Deberia inicializar las listas", () => {
        const expected = ['','trabajo','personal','familia','otros'];
        expect(gestor.inicializarListas()).toEqual(
            expect.arrayContaining(expected));
            clearArray(listas.getListaCategorias());
            clearArray(listas.getListaEtiquetas());
    }); //Inicializar las listas se hara cuando se hagan las pruebas de la lista logica //Integracion

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
    it("Deberia devolver etiqueta inválida", () => {
        expect(gestor.crearTareaConEtiqueta("Tarea personal","","")).toEqual(
            "No se creo la tarea. ETIQUETA INVALIDA");
    });
    it("Deberia devolver la tarea con la etiqueta asignada", () => {
        expect(gestor.crearTareaConEtiqueta("Tarea personal","personal","")).toEqual(
            "Tarea personal\nEtiquetas: personal");
    });
    it("Deberia devolver titulo inválido de la tarea completa ", () => {
        expect(gestor.crearTareaCompleta("","","","","","")).toEqual(
            "No se creo la tarea. TITULO INVALIDO");
    });
    it("Deberia devolver la tarea completa con todos los campos", () => {
        expect(gestor.crearTareaCompleta("Tarea personal","revisar la lista mañana","2022-12-25","personal","importante","completada")).toEqual(
            "Tarea personal\nDescripcion: revisar la lista mañana\nFecha Limite: 2022-12-25\nCategoria: personal\nEtiquetas: importante\nCompletada: completada");
    });
    it("Deberia devolver titulo invalido de la tarea completa T", () => {
        expect(gestor.crearTareaCompletaT("","","","","","")).toEqual(
            "No se creo la tarea. TITULO INVALIDO");
    });
    it("Deberia devolver la tarea completa T con todos sus campos", () => {
        expect(gestor.crearTareaCompletaT("Tarea personal","revisar la lista mañana","2022-12-25","personal","importante","completada")).toEqual(
            {"categoria": "personal", "completada": "completada", "descripcion": "revisar la lista mañana", "etiquetas": "importante", "fechaLimite": "2022-12-25", "id": 6, "titulo": "Tarea personal"});
    });
    it("Deberia devolver titulo inválido de la tarea completada", () => {
        expect(gestor.crearTareaCompletada("","","","","","")).toEqual(
            "No se creo la tarea. TITULO INVALIDO");
    });
    it("Deberia devolver la tarea completada", () => {
        expect(gestor.crearTareaCompletada("Tarea personal","revisar la lista mañana","2022-12-25","personal","importante","completada")).toEqual(
            {"categoria": "personal", "completada": "completada", "descripcion": "revisar la lista mañana", "etiquetas": "importante", "fechaLimite": "2022-12-25", "id": 7, "titulo": "Tarea personal"});
    });
    it("Deberia añadir la categoría a la lista de categorías", () => {
        expect(gestor.crearCategoria("Deporte")).toEqual(
            true);
            clearArray(listas.getListaCategorias());
    });
    it("Deberia devolver el mensaje no descripcionado", () => {
        expect(gestor.crearDescripcion("")).toEqual(
            "No Descripcionado");
    });
    it("Deberia devolver la descripción enviada", () => {
        expect(gestor.crearDescripcion("Comprar víveres")).toEqual(
            "Comprar víveres");
    });
    it("Deberia devolver la tarea con el estado completada", () => {
        expect(gestor.cambiarEstadoATareaCompletada(Tarea)).toEqual(
            Tarea);
    });
    it("Deberia devolver true si la tarea es indefinida", () => {
        let Tarea = undefined;
        expect(gestor.cambiarEstadoATareaCompletada(Tarea)).toEqual(
            true);
    });
    it("Deberia devolver la variable que contiene el id + 1", () => {
        expect(gestor.getID()).toEqual(
            8);
    });
    it("Deberia devolver la variable que contiene el id + 1", () => {
        let tarea = new Tarea();
        tarea.titulo = 'Don Quijote';
        expect(tarea.mostrarTitulo()).toEqual(
            'Don Quijote');
    });
});
