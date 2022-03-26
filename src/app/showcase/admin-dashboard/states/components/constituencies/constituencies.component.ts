import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { of } from 'rxjs';
import { DataService } from '../../../services/data.service';

@Component({
	selector: 'app-constituencies',
	templateUrl: './constituencies.component.html',
	styleUrls: ['./constituencies.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConstituenciesComponent implements OnInit {

	stateId: any = '';
	districtId: any = '';

	constituencies$: any = of([]);

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
			this.districtId = params['id'];
			// this.getContacts();
			// // this.getGroupData();
		});
		this.route.parent?.parent?.params.forEach((params: Params) => {
			this.stateId = params['id'];
			this.getContacts();
			// // this.getGroupData();
		});
	}

	getContacts() {
		this.constituencies$ = this.dataService.getConstituenciesByDistrictID(this.stateId, this.districtId);
		this.stateDetails$ = this.dataService.getGroupByGroupId(this.stateId);
	}

	viewDistrict($event: any) {
		const constituencyId = $event.id || 'NOW';
		this.router.navigate(['/admin-dashboard/states/state/' + this.stateId + '/district/' + this.districtId + '/constituency/' + constituencyId]);
	}

	addConstituency() {
		const payload = {
			contact_name: 'ConstituencyName',
			designation: 'Constituency',
			age: 'Constituency',
			email: 'Constituency',
			phone_number: 'Constituency',
			status: 'true'
		}
		this.dataService.addConstituencyWithStateIdDistrictId(this.stateId, this.districtId, payload).then((adRef) => {
			console.log(adRef);
		}).catch(function (error) {
			return 'Failed';
		});
		return;
	}
}
