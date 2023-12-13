import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { SendEmail } from './send-email.model';

@Injectable({
  providedIn: 'root'
})
export class ChatboxService {

  constructor(private http: HttpClient) { }
  async postSendEmail(sendEmail: SendEmail): Promise<SendEmail> {
    return await firstValueFrom(this.http.post('https://xn1f6jo8yf.execute-api.ap-south-1.amazonaws.com/Prod/api/Email/SendEmail', sendEmail))
      .then(res => res as SendEmail)
      .catch(err => { return Promise.reject(err.json().error || 'error'); });
  }

}
