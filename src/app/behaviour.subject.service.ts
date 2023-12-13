import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class BehaviourSubjectService {
  public services$ = new BehaviorSubject<string>('');

  public services: Observable<string>;
  constructor() { 
    this.services = this.services$.asObservable();
  }
}
