export class User {
  id: string;
  dni: string;
  nombre: string;

  constructor(dni, nombre) {
    this.id = this.uniqueId();
    this.dni = dni;
    this.nombre = nombre;
  }

  private uniqueId() {
    const thisMS: number = Date.now();
    const shake = Math.random();
    let unique: string = Math.pow(thisMS, shake).toString();
    unique = unique.toString().replace('.', thisMS.toString());
    return unique;
  }
}
