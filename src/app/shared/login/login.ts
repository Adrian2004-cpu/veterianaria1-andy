import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth-service/auth-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  //importar esto
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {


  email:string='';
  password:string='';

  private servicioAuth =inject(AuthService);
  iniciarsecion(){
    this.servicioAuth.login(this.email,this.password);
    alert('Bienvenidos al sistema');
  }

  cerrarsesion(){
    this.servicioAuth.logout();
  }
}
