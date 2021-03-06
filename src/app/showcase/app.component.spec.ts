import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from '../backup-components/autocomplete/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VersionService } from './service/versionservice';
import { AppConfigService } from './service/appconfigservice';
import { HttpClientModule } from '@angular/common/http';
import { AppTopBarComponent } from './layouts/app.topbar.component';
import { AppFooterComponent } from './layouts/app.footer.component';

describe('AppComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule,
				FormsModule,
				BrowserAnimationsModule,
				AutoCompleteModule,
				HttpClientModule
			],
			declarations: [AppComponent, AppTopBarComponent, AppFooterComponent],
			providers: [VersionService, AppConfigService]
		}).compileComponents();
	}));

	it('should create the app', async(() => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	}));
});
