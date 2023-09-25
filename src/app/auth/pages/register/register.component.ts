import { Component, OnInit } from '@angular/core';


import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
miFormulario: FormGroup = this.fb.group({
  nombre: ['', [Validators.required]],
  apellido: ['', [Validators.required]],
  email: ['', [Validators.required, Validators.email]],
  password: ['', [Validators.required, Validators.minLength(6)]],
  usuario: ['', [Validators.required]],
});
 

  constructor(private fb:FormBuilder, private AuthService: AuthService, private router: Router){}

ngOnInit(): void {
  
}

register(){
console.log(this.miFormulario.value);
const {nombre, apellido, email, password, usuario} = this.miFormulario.value;
this.AuthService.registro(nombre, apellido, email, usuario, password).subscribe(ok=>{
if(ok === true){
this.router.navigate(['/dashboard']);
Swal.fire('Usuario Registrado', ok, 'success');
}
else{
  Swal.fire('Error', ok, 'error');
}
});
}
}
