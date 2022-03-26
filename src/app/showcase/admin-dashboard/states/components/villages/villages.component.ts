import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { of } from 'rxjs';
import { DataService } from '../../../services/data.service';

@Component({
	selector: 'app-villages',
	templateUrl: './villages.component.html',
	styleUrls: ['./villages.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class VillagesComponent implements OnInit {

	stateId: any = '';
	districtId: any = '';
	constituencyId: any = '';

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
			this.constituencyId = params['id'];
			// this.getContacts();
			// // this.getGroupData();
		});
		this.route.parent?.parent?.params.forEach((params: Params) => {
			this.districtId = params['id'];
			// this.getContacts();
			// // this.getGroupData();
		});
		this.route.parent?.parent?.parent?.params.forEach((params: Params) => {
			this.stateId = params['id'];
			this.getContacts();
			// // this.getGroupData();
		});
	}

	getContacts() {
		this.constituencies$ = this.dataService.getVillagesByConstituencyID(this.stateId, this.districtId, this.constituencyId);
		this.stateDetails$ = this.dataService.getGroupByGroupId(this.stateId);
	}

	viewDistrict($event: any) {
		const villageId = $event.id || 'NOW';
		this.router.navigate(['/admin-dashboard/states/state/' + this.stateId + '/district/' + this.districtId + '/constituency/' + this.constituencyId + '/village/' + villageId]);
	}

	addVillage() {
		const payload = {
			contact_name: 'VillageName',
			designation: 'Village',
			age: 'Village',
			email: 'Village',
			phone_number: 'Village',
			status: 'true'
		};
		this.dataService.addVillageConstituencyIdWithStateIdDistrictId(this.stateId, this.districtId, this.constituencyId, payload).then((adRef) => {
			console.log(adRef);
		}).catch(function (error) {
			return 'Failed';
		});
		return;
	}
}
