import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioServicio {
  private http = inject(HttpClient);
  private API_URL = 'https://698c75a921a248a27361a3c6.mockapi.io/usuarios';

  //Metodo get para obtener los usuarios
  getUsuarios():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.API_URL);}
  
  //metodo post para agregar un nuevo usuario
  postUsuario(usuario:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(this.API_URL,usuario);
  }
  //metodo buscar usuario por id
  getUsuarioById(id: number):Observable<Usuario>{
    return this.http.get<Usuario>(`${this.API_URL}/${id}`);
  }
  //metodo para actualizar usuario
  putUsuario(id:number, usuario:Usuario):Observable<Usuario>{
    return this.http.put<Usuario>(`${this.API_URL}/${id}`, usuario);
  }
  //metodo para eliminar usuario
  deleteUsuario(id:number):Observable<void>{
    return this.http.delete<void>(`${this.API_URL}/${id}`);
  }
}
