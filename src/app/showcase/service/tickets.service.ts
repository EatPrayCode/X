import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  
  
  constructor(private fstore: AngularFirestore ) { }

  getStud(){
    return  this.fstore.collection('tickets').snapshotChanges()
  }

  addStud(stud:any){
    return this.fstore.collection('tickets').add(stud);
  }

}
