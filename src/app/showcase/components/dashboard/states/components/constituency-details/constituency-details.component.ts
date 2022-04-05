import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { of } from 'rxjs';
import { DataService } from 'src/app/showcase/service/data.service';

@Component({
  selector: 'app-constituency-details',
  templateUrl: './constituency-details.component.html',
  styleUrls: ['./constituency-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConstituencyDetailsComponent implements OnInit {

	stateId: any = '';
	districtId: any = '';
  constituencyId: any = '';

	villages$: any = of([]);

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
    this.route.parent?.parent?.params.forEach((params: Params) => {
			this.stateId = params['id'];
			this.getContacts();
			// // this.getGroupData();
		});
	}

	getContacts() {
		this.villages$ = this.dataService.getVillagesByConstituencyID(this.stateId, this.districtId, this.constituencyId);
		this.stateDetails$ = this.dataService.getGroupByGroupId(this.stateId);
	}

	viewDistrict($event: any) {
		const constituencyId = $event.id || 'NOW';
		this.router.navigate(['/admin-dashboard/states/state/' + this.stateId + '/district/' + this.districtId + '/constituency/' + constituencyId]);
	}

	addVillage() {
		const payload = {
			contact_name: 'VillageName',
			designation: 'Village',
			age: 'Village',
			email: 'Village',
			phone_number: 'Village',
			status: 'true'
		}
		this.dataService.addVillageConstituencyIdWithStateIdDistrictId(this.stateId, this.districtId, this.constituencyId, payload).then((adRef) => {
			console.log(adRef);
		}).catch(function (error) {
			return 'Failed';
		});
		return;
	}
}
