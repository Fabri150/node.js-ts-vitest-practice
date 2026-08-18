import { describe, expect, test } from "vitest";
import { Profesor } from "../src/Profesor";

describe("Profesor", () => {

    test("Un Profesor con el nombre Juan", () => {
    const profesor = new Profesor("Juan", 18);
    expect(profesor.nombre).toBe("Juan")
    });

    test("Un Profesor con el legajo 18", () => {
    const profesor = new Profesor("Juan", 18);
    expect(profesor.legajo).toBe(18)
    });

})