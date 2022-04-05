import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { of } from 'rxjs';
import { DataService } from 'src/app/showcase/service/data.service';

@Component({
	selector: 'app-district-details',
	templateUrl: './district-details.component.html',
	styleUrls: ['./district-details.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DistrictDetailsComponent implements OnInit {

	gid: any = '';
	districtId: any = '';
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
		this.route.params.forEach((params: Params) => {
			this.districtId = params['id'];
			// this.getContacts();
			// this.getGroupData();
		});

		this.route.parent?.params.forEach((params: Params) => {
			this.stateId = params['id'];
			this.getContacts();
			// // this.getGroupData();
		});
	}

	getContacts() {
		this.districts$ = this.dataService.getConstituenciesByDistrictID(this.stateId, this.districtId);
		// this.stateDetails$ = this.dataService.getGroupByGroupId(this.gid);
	}

	viewConstituency($event: any) {
		const constituencyId = $event.id || 'NOW';
		this.router.navigate(['/admin-dashboard/states/state/' + this.stateId + '/district/' + this.districtId + '/constituencies/' + constituencyId]);
	}

	addConstituency() {
		const payload = {
			contact_name: 'Name',
			designation: 'designation',
			age: 'age',
			email: 'email',
			phone_number: 'phone_number',
			status: 'status'
		}
		this.dataService.addConstituencyWithStateIdDistrictId(this.stateId, this.districtId, payload).then((adRef) => {
			console.log(adRef);
		}).catch(function (error) {
			return 'Failed';
		});
		return;
	}

}
