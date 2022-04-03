import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-neta-news',
  templateUrl: './neta-news.component.html',
  styleUrls: ['./neta-news.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NetaNewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
