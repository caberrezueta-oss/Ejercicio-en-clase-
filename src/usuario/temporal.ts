export class Temporal {
  id: number;
  nombre: string;
  edad: number;

  constructor(id: number, nombre: string, edad: number) {
    this.id = id;
    this.nombre = nombre;
    this.edad = edad;
  }
}

// Agregamos datos iniciales al arreglo
export const usuarios: Temporal[] = [
  { id: 1, nombre: 'Carlos', edad: 25 },
  { id: 2, nombre: 'Ana', edad: 30 },
  { id: 3, nombre: 'Sofia', edad: 20 }
];