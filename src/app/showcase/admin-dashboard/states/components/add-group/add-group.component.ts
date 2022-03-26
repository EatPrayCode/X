import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { Form, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { ROUTE_ANIMATIONS_ELEMENTS } from './../../../../core/core.module';
import { SAMPLEUSER } from './../../../../models/user';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddGroupComponent implements OnInit {

  form = this.fb.group({
    autosave: false,
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    description: [
      '',
      [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(1000)
      ]
    ],
    requestGift: [''],
    birthday: ['', [Validators.required]],
    rating: [0, Validators.required]
  });

  formValueChanges$: Observable<Form> | undefined;
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  constructor(
    // @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public dataService: DataService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.form.value);
    this.addGroup();
  }

  addGroup() {
    const req = {
      group_name: 'TEST',
      description: 'description',
      status: true,
      created_by: SAMPLEUSER.uid
    }
    this.dataService.addGroup(req).then((adRef) => {
      console.log(adRef);

    }).catch(function (error) {
      return 'Failed';
    });
  }

}
