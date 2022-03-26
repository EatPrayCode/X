import { BehaviorSubject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { TicketsService } from '../../services/tickets.service';

@Component({
  selector: 'app-connect-history',
  templateUrl: './connect-history.component.html',
  styleUrls: ['./connect-history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConnectHistoryComponent implements OnInit {

  name = 'Inkstellar';
  list: any;
  user = {
    name: 'Preeti'
  };

  list$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private crud: TicketsService) { }

  ngOnInit() {
    this.list = [{},{},{}];
    this.crud.getStud().subscribe(actionArray => {
      const list = actionArray.map((item: any) => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as any;
      });
      console.log(list);
      this.list$.next(list);
    });
  }

  addStud() {
    this.crud.addStud(this.user)
  }

}
