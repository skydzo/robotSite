import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class MoveService {

  constructor(private http: HttpClient) { }

  move(direction: string, speed: number) {
    let url = 'http://localhost:5000/api/'+ direction + '/' + speed;
    return this.http.get<string>(url);
  }

  camera(state: string) {
    let url = 'http://localhost:5000/api/camera/'+ state;
    return this.http.get<string>(url);
  }
}
