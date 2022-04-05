import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-constituency-home',
  templateUrl: './constituency-home.component.html',
  styleUrls: ['./constituency-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConstituencyHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
