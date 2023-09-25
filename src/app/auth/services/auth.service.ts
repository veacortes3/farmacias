import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUsuario } from '../interfaces/IUsuario';
import { IAuthReponse } from '../interfaces/IAuthResponse';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private usuario!: IUsuario;
  constructor(private http: HttpClient) { }

  registro(nombre: string, apellido: string, email: string, password: string, usuario: string) {
    const url = `${this.baseUrl}/registrar`;
    const body = {
      nombre,
      apellido,
      email,
      password,
      usuario

    };

    return this.http.post<IAuthReponse>(url, body).pipe(
      tap(resp => {
        if (resp.ok) {
          localStorage.setItem('token', resp.token!);
          this.usuario = {
            uid: resp.uid!,
            usuario: resp.usuario!,
            nombre: resp.nombre!,
            apellido: resp.apellido!,
            email: resp.email!
          }
          localStorage.setItem('usuario', JSON.stringify(this.usuario));
        

        }
      }), 
     map((resp:IAuthReponse)=>{ 
      return resp.ok
    }),
    catchError(err => of(err.err.msg))


  )}
      }