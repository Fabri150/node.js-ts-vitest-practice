import { describe, expect, test } from "vitest";
import { Materia } from "../src/Materia";
import { Profesor } from "../src/Profesor";

describe("Materia", () => {

    test("Una materia debe tener un profesor titular", () => {
    const titular = new Profesor("Carlos Gómez", 101);
    const adjunto = new Profesor("Laura Pérez", 102);
    const materia = new Materia("Paradigmas", 2, "ISIS", titular, adjunto);
    expect(materia.titular).toBe(titular)
    });

    test("Una materia debe tener un profesor adjunto", () => {
    const titular = new Profesor("Carlos Gómez", 101);
    const adjunto = new Profesor("Laura Pérez", 102);
    const materia = new Materia("Paradigmas", 2, "ISIS", titular, adjunto);
    expect(materia.adjunto).toBe(adjunto)
    });

    test("Una Materia debe tener nombre", () => {
    const titular = new Profesor("Carlos Gómez", 101);
    const adjunto = new Profesor("Laura Pérez", 102);
    const materia = new Materia("Paradigmas", 2, "ISIS", titular, adjunto);
    expect(materia.nombre).toBe("Paradigmas")
    });

    test("Un Materia año", () => {
    const titular = new Profesor("Carlos Gómez", 101);
    const adjunto = new Profesor("Laura Pérez", 102);
    const materia = new Materia("Paradigmas", 2, "ISIS", titular, adjunto);
    expect(materia.anio).toBe(2)
    });

    test("Un Materia debe tener una carrera", () => {
    const titular = new Profesor("Carlos Gómez", 101);
    const adjunto = new Profesor("Laura Pérez", 102);
    const materia = new Materia("Paradigmas", 2, "ISIS", titular, adjunto);
    expect(materia.carrera).toBe("ISIS")
    });
})