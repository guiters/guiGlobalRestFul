import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class ApiService {


  private BASE_URL = '/api';
  private authHeader = 'Basic ' + btoa('teste:teste');
  headers = new HttpHeaders();

  constructor(private http: HttpClient) {
    localStorage.setItem('api', btoa(this.authHeader));
    this.headers = this.headers.append('Authorization', this.authHeader);
  }

  getListDrivers(): Promise<any> {
    const url = `${this.BASE_URL}/guiconfig_drivers`;
    const result = this.http.get(url,{headers: this.headers, withCredentials: true}).toPromise();
    return result;
  }

  searchDatabases(): Promise<any> {
    const url = `${this.BASE_URL}/searchdatabases`;
    const result = this.http.get(url,{headers: this.headers, withCredentials: true}).toPromise();
    return result;
  }

  searchTables(database): Promise<any> {
    const url = `${this.BASE_URL}/searchtables?database=` + database;
    const result = this.http.get(url,{headers: this.headers, withCredentials: true}).toPromise();
    return result;
  }
}
