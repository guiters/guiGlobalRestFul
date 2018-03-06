import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import {User} from './user';

@Injectable()
export class AuthService {


  private BASE_URL = '/api';
  private authHeader = 'Basic ' + btoa('teste:teste');
  headers = new HttpHeaders();

  constructor(private http: HttpClient) {
    localStorage.setItem('api', btoa(this.authHeader));
    this.headers = this.headers.append('Authorization', this.authHeader);
  }


  login(user): Promise<any> {
    const url = `${this.BASE_URL}/login`;
    const formData: FormData = new FormData();
    formData.append('user', user.user);
    formData.append('pass', user.pass);
    formData.append('status', '1');
    const result = this.http.post(url, formData, {headers: this.headers, withCredentials: true}).toPromise();

    return result;
  }

  register(user): Promise<any> {
    const url = `${this.BASE_URL}/register`;
    const formData: FormData = new FormData();
    formData.append('user', user.user);
    formData.append('pass', user.pass);
    formData.append('status', '1');
    return this.http.post(url, formData, {headers: this.headers, withCredentials: true}).toPromise();
  }


  ensureAuthenticated(token): Promise<any> {
    const url = `${this.BASE_URL}/status`;
    const headers2 = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
    return this.http.get(url, {headers: headers2}).toPromise();
  }
}
