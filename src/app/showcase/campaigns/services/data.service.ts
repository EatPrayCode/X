import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

import { ActivatedRoute, Params, Router } from '@angular/router';


@Injectable({ providedIn: 'root' })
export class DataService {
	constructor(
		public afs: AngularFirestore,
		public router: Router
	) { }

	groups: any;

	getAllGroups() {
		return this.afs.collection('/groups').snapshotChanges().pipe(
			map((changes: any) => {
				return changes.map((a: { payload: { doc: { data: () => any; id: any; }; }; }) => {
					const data = a.payload.doc.data();
					(<any>data).id = a.payload.doc.id;
					return data;
				});
			}),
			tap((res: any) => {
				console.log(res);
			})
		);
	}

	getGroupsByUid(uid: any) {
		return this.afs.collection('/groups').valueChanges();
		// return this.afs.collection('/groups', (ref: { where: (arg0: string, arg1: string, arg2: any) => any; }) => ref.where("created_by", "==", uid))
		// 	.snapshotChanges().pipe(map((changes: any) => {
		// 		return changes.map((a: { payload: { doc: { data: () => any; id: any; }; }; }) => {
		// 			const data = a.payload.doc.data();
		// 			(<any>data).id = a.payload.doc.id;
		// 			return data;
		// 		});
		// 	})
		// 	);
	}

	getContactsByGroupId(gid: string) {
		return this.afs.collection('groups/' + gid + "/contacts/")
			.snapshotChanges()
			.pipe(
				map((changes: any) => {
					return changes.map((a: { payload: { doc: { data: () => any; id: any; }; }; }) => {
						const data = a.payload.doc.data();
						(<any>data).id = a.payload.doc.id;
						return data;
					});
				}),
				tap((res: any) => {
					console.log(res);
				}));
	}

	getGroupByGroupId(id: string) {
		return this.afs.doc('groups/' + id).ref.get().then((doc: { exists: any; data: () => any; }) => {
			if (doc.exists) {
				console.log("Document data:", doc.data());
				return doc.data();
			} else {
				console.log("No such document!");
			}
		});
	}

	addContactWithGroupId(gid: string, contact: any) {
		return this.afs.collection('groups/' + gid + "/contacts/").add(contact);
	}

	getUserInfoByUid(uid: any) {
		return this.afs.collection('/groups').valueChanges();
		// return this.afs.collection('/users', (ref: { where: (arg0: string, arg1: string, arg2: any) => any; }) => ref.where("uid", "==", uid))
		// 	.snapshotChanges().pipe(map((changes: any) => {
		// 		return changes.map((a: { payload: { doc: { data: () => any; id: any; }; }; }) => {
		// 			const data = a.payload.doc.data();
		// 			(<any>data).id = a.payload.doc.id;
		// 			return data;
		// 		});
		// 	})
		// 	);
	}

	addUser(user: any) {
		return this.afs.collection('users/').add(user);
	}

	addGroup(group: any) {
		return this.afs.collection('groups/').add(group);
	}

	editGroupWithGroupId(gid: string, group: any) {
		return this.afs.doc('groups/' + gid).set(group);
	}

	deleteGroupWithGroupId(gid: string) {
		return this.afs.doc('groups/' + gid).delete();
	}

	editContact(gid: string, cid: string, contact: any) {
		return this.afs.doc('groups/' + gid + '/contacts/' + cid).set(contact);
	}

	deleteContact(gid: string, cid: string) {
		return this.afs.doc('groups/' + gid + '/contacts/' + cid).delete();
	}
}