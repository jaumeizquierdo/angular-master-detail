import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../../shared/classes/user';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.scss']
})
export class MemberFormComponent implements OnInit {

  public dni: string;
  public nombre: string;
  public errorDetected: boolean;
  public recordSaved: boolean;
  public User: User;

  @Output() enviarUsuario = new EventEmitter<User>();

  constructor() {
    this.dni = '';
    this.nombre = '';
    this.errorDetected = false;
    this.recordSaved = false;
  }

  ngOnInit() {}
  saveRecord() {
    if (this.dni.length === 0 || this.nombre.length === 0) {
      this.errorDetected = true;
      this.recordSaved = false;
    } else {
      this.errorDetected = false;
      this.recordSaved = true;
      // Creamos un objeto de la clase AcdUser
      this.User = new User(this.dni, this.nombre);
      this.enviarUsuario.emit(this.User);
      this.dni = '';
      this.nombre = '';
    }
  }

  clearNotice() {
    this.errorDetected = false;
    this.recordSaved = false;
  }

}
