import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { of } from 'rxjs';
import { DataService } from '../../../services/data.service';

@Component({
	selector: 'app-districts',
	templateUrl: './districts.component.html',
	styleUrls: ['./districts.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DistrictsComponent implements OnInit {

	stateId: any = '';

	districts$: any = of([]);

	stateDetails$: any = of({});

	showMenu(unit: any) {

	}

	constructor(
		private route: ActivatedRoute,
		public dataService: DataService,
		public router: Router
	) { }

	ngOnInit() {
		this.route.parent?.params.forEach((params: Params) => {
			this.stateId = params['id'];
			this.getContacts();
			// this.getGroupData();
		});
	}

	getContacts() {
		this.districts$ = this.dataService.getDistrictsByStateId(this.stateId);
		this.stateDetails$ = this.dataService.getGroupByGroupId(this.stateId);
	}

	viewDistrict($event: any) {
		const districtId = $event.id || 'NOW';
		this.router.navigate(['/admin-dashboard/states/state/' + this.stateId + '/district/' + districtId]);
	}

	addContact() {
		const payload = {
			contact_name: 'Name',
			designation: 'designation',
			age: 'age',
			email: 'email',
			phone_number: 'phone_number',
			status: 'status'
		}
		this.dataService.addContactWithGroupId(this.stateId, payload).then((adRef) => {
			console.log(adRef);
		}).catch(function (error) {
			return 'Failed';
		});
		return;
	}
}
