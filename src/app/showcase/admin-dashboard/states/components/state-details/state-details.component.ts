import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { of } from 'rxjs';
import { DataService } from '../../../services/data.service';

@Component({
	selector: 'app-state-details',
	templateUrl: './state-details.component.html',
	styleUrls: ['./state-details.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class StateDetailsComponent implements OnInit {

	gid: any = '';

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
		this.route.params.forEach((params: Params) => {
			this.gid = params['id'];

			this.getContacts();
			// this.getGroupData();
		});
	}

	getContacts() {
		this.districts$ = this.dataService.getDistrictsByStateId(this.gid);
		this.stateDetails$ = this.dataService.getGroupByGroupId(this.gid);
	}

	viewDistrict($event: any) {
		const gid = $event.id || 'NOW';
		this.router.navigate(['/admin-dashboard/states/' + gid]);
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
		this.dataService.addContactWithGroupId(this.gid, payload).then((adRef) => {
			console.log(adRef);
		}).catch(function (error) {
			return 'Failed';
		});
		return;
	}

}
