import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient
  ) { }

  listUsers() {
    return this.httpClient.get(environment.serverUrl + '/users');
  }

  cadastrarProduto(body) {
    return this.httpClient.post(environment.serverUrl + '/produtos', body);
  }
}
