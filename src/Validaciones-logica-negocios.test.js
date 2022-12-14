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

    it("Debería devolver el campo ingresado cuando un campo se envía con cualquier caracter", () => {
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

    it("Debería devolver false cuando la lista de categorías se encuentre vacía", () => {
        expect(validaciones.buscarCategoria('personal')).toEqual(false);
        expect(listas.getListaCategorias().length).toEqual(0);
    });

    it("Debería devolver false cuando se busca una categoría que no se encuentre en la lista de Categorías", () => {
        listas.getListaCategorias().push('','trabajo','personal','familia','otros');
        expect(validaciones.buscarCategoria('recordatorios')).toEqual(false);
        clearArray(listas.getListaCategorias());
    });
});

describe("Gestor Tareas Validaciones Verificar Descripción", () => {
    it("Debería devolver n/a cuando la descripción se envía vacía", () => {
        expect(validaciones.verificarDescripcion("")).toEqual("n/a");
    });

    it("Debería devolver la descripción ingresada cuando un campo se envía con cualquier caracter", () => {
        expect(validaciones.verificarDescripcion("Tarea de Matemáticas de la Fotocopia")).toEqual("Tarea de Matemáticas de la Fotocopia");
    });
});

describe("Gestor Tareas Validaciones Verificar Categoría", () => {
    it("Debería devolver true cuando la categoría se encuentra en la lista de Categorías", () => {
        listas.getListaCategorias().push('','trabajo','personal','familia','otros');
        expect(validaciones.validarCategoria('trabajo')).toEqual(true);
        clearArray(listas.getListaCategorias());
        expect(listas.getListaCategorias().length).toEqual(0);
    });

    it("Debería devolver false cuando se trate de verificar una categoria y la lista de categorías se encuentre vacía", () => {
        expect(validaciones.buscarCategoria('personal')).toEqual(false);
        expect(listas.getListaCategorias().length).toEqual(0);
    });

    it("Debería devolver false cuando se quiera verificar una categoría que no se encuentre en la lista de Categorías", () => {
        listas.getListaCategorias().push('','trabajo','personal','familia','otros');
        expect(validaciones.buscarCategoria('recordatorios')).toEqual(false);
        clearArray(listas.getListaCategorias());
    });
});

describe("Gestor Tareas Validaciones Verificar Fecha Límite", () => {
    it("Debería devolver la fecha ingresada cuando la fecha es >= a la fecha actual", () => {
        expect(validaciones.validarFechaLimite('2022-10-28')).toEqual('2022-10-28');
    });

    it("Debería devolver Ilimitado cuando el campo de fecha es vacío", () => {
        expect(validaciones.validarFechaLimite('')).toEqual('Ilimitado');
    });

    it("Debería devolver false cuando el campo de fecha es menor a la fecha actual", () => {
        expect(validaciones.validarFechaLimite('2022-10-12')).toEqual('2022-10-12');
        expect(validaciones.validarFechaLimite('2022-10-11')).toEqual('No se pudo crear la tarea, FECHA INVALIDA.');
    });
});

describe("Gestor Tareas Validaciones Verificar Fecha", () => {
    it("Debería devolver la fecha ingresada cuando la fecha es >= a la fecha actual", () => {
        expect(validaciones.validarFecha('2022-10-28')).toEqual('2022-10-28');
    });

    it("Debería devolver Ilimitado cuando el campo de fecha es vacío", () => {
        expect(validaciones.validarFecha('')).toEqual('Ilimitado');
    });

    it("Debería devolver false cuando el campo de fecha es menor a la fecha actual", () => {
        expect(validaciones.validarFecha('2022-10-12')).toEqual('2022-10-12');
        expect(validaciones.validarFecha('2022-10-11')).toEqual(false);
    });
});
////////////////////////////////
describe("Gestor Tareas Validaciones verificar campo vacío", () => {
    it("Debería devolver n/a cuando un campo se envía vacío", () => {
        expect(validaciones.verificarCampoVacio(" ")).toEqual("n/a");
    });

    it("Debería devolver n/a cuando un campo se envía vacío", () => {
        expect(validaciones.verificarCampoVacio(null)).toEqual("n/a");
    });

    it("Debería devolver n/a cuando un campo se envía vacío", () => {
        expect(validaciones.verificarCampoVacio(undefined)).toEqual("n/a");
    });
});

describe("Gestor Tareas Validaciones validar titulo", () => {
    it("Debería devolver n/a cuando un campo se envía vacío", () => {
        expect(validaciones.validarTitulo(" ")).toEqual(false);
    });

    it("Debería devolver n/a cuando un campo se envía vacío", () => {
        expect(validaciones.validarTitulo(null)).toEqual(false);
    });

    it("Debería devolver n/a cuando un campo se envía vacío", () => {
        expect(validaciones.validarTitulo(undefined)).toEqual(false);
    });
});

describe("Gestor Tareas Validaciones verificar descripción", () => {
    it("Debería devolver n/a cuando un campo se envía vacío", () => {
        expect(validaciones.verificarDescripcion(" ")).toEqual("n/a");
    });

    it("Debería devolver n/a cuando un campo se envía vacío", () => {
        expect(validaciones.verificarDescripcion(null)).toEqual("n/a");
    });

    it("Debería devolver n/a cuando un campo se envía vacío", () => {
        expect(validaciones.verificarDescripcion(undefined)).toEqual("n/a");
    });
});