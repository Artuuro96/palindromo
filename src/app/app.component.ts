import { Component } from '@angular/core';
import { Respuesta } from '../interfaces/palindromo';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    constructor (private http: HttpClient) {}
    public title = 'palindromo';
    public cargando: Boolean = false;
    public limite: Number = 1000;
    public url: String = "";
    public datos: Object = [];
    public logs: Object = [];
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
    }
    Respuesta: Respuesta;

    calcula_palindromos(){
        this.cargando = true;
        this.http.get<Respuesta>(`/api/obtener_palindromos?limite=${this.limite.toString()}`).subscribe(res => {
            this.cargando = false;
            if(res.codigo == 200){
                this.datos = res.datos;
            } else {
                console.error(res);
            }
        })
    }

    guardar_palindromos(){
        this.cargando = true;
        this.http.post<Respuesta>(`/api/guardar_palindromos`, JSON.stringify(this.datos), this.httpOptions).subscribe(res => {
            this.cargando = false;
            if(res.codigo == 200){
                console.log("Datos guardados");
                this.obtener_logs();
            } else {
                console.error(res);
            }
        }, error => {
            console.error(error);
        })
    }

    obtener_logs(){
        this.cargando = true;
        this.http.get<Respuesta>(`/api/obtener_log`).subscribe(res => {
            this.cargando = false;
            this.logs = res.datos;
        }, error => {
            console.error(error);
        })
    }
}
