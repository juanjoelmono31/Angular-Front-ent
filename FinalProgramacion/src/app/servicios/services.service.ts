import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  currentRequestSubject: BehaviorSubject<any>;
  currentRequest: Observable<string>;
  httpOptions: any;

  readonly WEB_URL: string = environment.serverUrl;

  constructor(private _http: HttpClient) {
    try {
      this.currentRequestSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentRequest')));
      this.currentRequest = this.currentRequestSubject.asObservable();
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
    } catch (Exception) { }
  }

  getEstudiantes() {
    return this._http.get(`${this.WEB_URL}api/Estudiantes`);
  }

  postEstudiantes(data): Promise<any> {
    return this._http.post(`${this.WEB_URL}api/Estudiantes`, data, this.httpOptions).toPromise();
  }

  getProfesores() {
    return this._http.get(`${this.WEB_URL}api/Profesores`);
  }

  postProfesores(data): Promise<any> {
    return this._http.post(`${this.WEB_URL}api/Profesores`, data, this.httpOptions).toPromise();
  }

  getNombreMaterias() {
    return this._http.get(`${this.WEB_URL}api/NombreMaterias`);
  }

  postMaterias(data): Promise<any> {
    return this._http.post(`${this.WEB_URL}api/Materias`, data, this.httpOptions).toPromise();
  }

  getMaterias() {
    return this._http.get(`${this.WEB_URL}api/Materias`);
  }
}

