export class Teacher {
  id:                number = 0;
  nombre:            string = '';
  apellidoPaterno:   string = '';
  apellidoMaterno:   string = '';
  cedulaProfesional: string = '';
  statusDocente:     string = '';
  gradoEstudios:     string = '';
  areaConocimientos: string = '';
  fechaNacimiento:   Date | string = '';
  nacionalidad:      string = '';
  fechaBaja:         Date | string = '';
  sexo:              string = '';
  estadoCivil:       string = '';
  tipoSangre:        string = '';
  correoPersonal:    string = '';
  correoEscolar:     string = '';
  direccion:         Direccion = new Direccion();
  rfc:               string = '';
  curp:              string = '';
}

export class Direccion {
  id:             number = 0;
  direccion:      string = '';
  numeroExterior: number = 0;
  numeroInterior: number = 0;
  colonia:        string = '';
  cp:             string = '';
  localidad:      string = '';
  municipio:      string = '';
  estado:         string = '';
}
