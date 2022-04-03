import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-neta-home',
  templateUrl: './neta-home.component.html',
  styleUrls: ['./neta-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NetaHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
