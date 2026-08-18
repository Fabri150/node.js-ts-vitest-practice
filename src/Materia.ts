import { Profesor } from "../src/Profesor";
import { Alumno } from "../src/Alumno";

export class Materia {
    public alumnos: Alumno[] = [];

    constructor(
    public nombre: string,
    public anio: number,
    public carrera: string,
    public titular: Profesor,
    public adjunto: Profesor
    ) {}

    agregarAlumno(alumno: Alumno): void {
        this.alumnos.push(alumno);
    }
}