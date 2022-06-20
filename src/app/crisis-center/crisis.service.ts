import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Crisis } from './crisis';
import { CRISES } from './mock-crises';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root',
})
export class CrisisService {

  constructor(private messageService: MessageService) { }

  getCrises(): Observable<Crisis[]> {
    const crises = of(CRISES);
    this.messageService.add('CrisisService: fetched crises');
    return crises;
  }

  getCrisis(id: string): Observable<Crisis> {
    const crisis = of(CRISES.filter(h => h.id === Number(id))[0]);
    this.messageService.add(`CrisisService: fetched crisis ${id}`);
    return crisis;
  }
}
