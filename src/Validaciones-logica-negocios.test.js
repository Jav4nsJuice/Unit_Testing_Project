import fs from "fs";
import * as gestor from './Tarea-logica-negocios.js';
import * as listas from './Listas-logica-negocios.js';
import * as validaciones from './Validaciones-logica-negocios.js';
import { Tarea } from './Tarea-logica-negocios.js';
import { isTypedArray } from "util/types";

function clearArray(array){
    var i = array.length;
    while(i > 0){
        array.pop();
        i--;
    }
}

describe("Gestor Tareas Validaciones", () => {
    it("Debería devolver n/a cuando un campo se envía vacío", () => {
        expect(validaciones.verificarCampoVacio("")).toEqual("n/a");
    });

    // it("Debería devolver n/a cuando un campo se envía vacío pero con espacios", () => {
    //     expect(validaciones.verificarCampoVacio(" ")).toEqual("n/a");
    // });

    it("Debería devolver n/a cuando un campo se envía con cualquier caracter", () => {
        expect(validaciones.verificarCampoVacio("Tarea")).toEqual("Tarea");
    });
});

describe("Gestor Tareas Validaciones Título", () => {
    it("Debería devolver false cuando un título se envía vacío", () => {
        expect(validaciones.validarTitulo("")).toEqual(false);
    });

    // it("Debería devolver false cuando un título se envía vacío con espacios", () => {
    //     expect(validaciones.validarTitulo(" ")).toEqual(false);
    // });

    it("Debería devolver true cuando un título se envía correctamente", () => {
        expect(validaciones.validarTitulo("Tarea 1")).toEqual(true);
    });
});

describe("Gestor Tareas Validaciones Buscar Categoría", () => {
    it("Debería devolver true cuando una categoría se encuentre en la lista de categorías", () => {
        listas.getListaCategorias().push('','trabajo','personal','familia','otros');
        expect(validaciones.buscarCategoria('personal')).toEqual(true);
        clearArray(listas.getListaCategorias());
    });
});