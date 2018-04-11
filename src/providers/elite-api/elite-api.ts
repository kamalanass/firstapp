import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class EliteApi {

  private baseUrl = "https://elite-schedule-app-i2-28d77.firebaseio.com/tournaments-data/3dd50aaf-6b03-4497-b074-d81703f07ee8";
  constructor(public http: Http) {
    
  }

  getTournaments(){
    return new Promise(resolve => {
      this.http.get(`${this.baseUrl}/tournaments.json`).subscribe(res => resolve(res.json()));
    });
  }
}
