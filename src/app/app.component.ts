import { Component } from '@angular/core';
import { Respuesta } from '../interfaces/palindromo';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    constructor (private http: HttpClient) {}
    public url_base =`/api/obtener_palindromos?limite=`
    public title = 'palindromo';
    public limite: Number = 1000;
    public url: String = ""
    Respuesta: Respuesta;

    calcula_palindromos(){
        this.http.get<Respuesta>(this.url_base + this.limite.toString()).subscribe(data => {
            console.log("DATA", data)
        })
    }
}
