import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-districts-home',
  templateUrl: './districts-home.component.html',
  styleUrls: ['./districts-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DistrictsHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
