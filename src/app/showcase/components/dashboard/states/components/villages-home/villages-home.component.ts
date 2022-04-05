import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-villages-home',
  templateUrl: './villages-home.component.html',
  styleUrls: ['./villages-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VillagesHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
