import { describe, expect, test } from "vitest";
import { Materia } from "../src/Materia";

describe("Materia", () => {

    test("Un Materia con nombre", () => {
    const materia = new Materia("Paradigmas", 2, "ISIS");
    expect(materia.nombre).toBe("Paradigmas")
    });

    test("Un Materia con el legajo 18", () => {
    const materia = new Materia("Paradigmas", 2, "ISIS");
    expect(materia.anio).toBe(2)
    });

    test("Un Materia con el legajo 18", () => {
    const materia = new Materia("Paradigmas", 2, "ISIS");
    expect(materia.carrera).toBe("ISIS")
    });

})