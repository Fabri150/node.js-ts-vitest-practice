import { describe, expect, test } from "vitest";
import { Alumno } from "../src/Alumno";

describe("Alumno", () => {

  test("un alumno de 18 años y del legajo 10 debe ser mayor de edad", () => {
    const alumno = new Alumno("Juan", 18, 10);

    expect(alumno.esMayorDeEdad()).toBe(true);
  });

  test("un alumno de 25 años y del legajo 10 debe ser mayor de edad", () => {
    const alumno = new Alumno("Ana", 25, 10);

    expect(alumno.esMayorDeEdad()).toBe(true);
  });

  test("un alumno de 17 años y del legajo 10 no debe ser mayor de edad", () => {
    const alumno = new Alumno("Pedro", 17, 10);

    expect(alumno.esMayorDeEdad()).toBe(false);
  });

  test("un alumno de 16 años y del legajo 10 debe decir que es menor de edad", () => {
    const alumno = new Alumno("Fabri", 16, 10)

    expect(alumno.obtenerEstado()).toBe("Menor de edad")
  })

    test("un alumno de 20 años y del legajo 10 debe decir que es mayor de edad", () => {
    const alumno = new Alumno("Pirulo", 20, 10)

    expect(alumno.obtenerEstado()).toBe("Mayor de edad")
  })

});
