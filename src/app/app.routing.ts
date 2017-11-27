import { Routes, RouterModule } from '@angular/router';

import { LandinghomeComponent } from './firstcomponents/landinghome/index';
import { LoginComponent } from './firstcomponents/login/index';
import { ForgotComponent } from './firstcomponents/forgot/index';
import { RegisterComponent } from './firstcomponents/register/index';

import { AuthGuard } from './_guards/index';

import {CustomerLayoutComponent} from "./customer_components/customer-layout/customer-layout.component";
import {AccountSetupComponent} from "./customer_components/setup/account-setup/account-setup.component"
import {LocationSetupComponent} from "./customer_components/setup/location-setup/location-setup.component"
import { CustomerhomeComponent } from './customer_components/setup/customer-home/index';

import {VendorLayoutComponent} from "./vendor_components/vendor-layout/vendor-layout.component";
import { StorefrontComponent } from './vendor_components/setup/storefront/index';
import { SettingComponent } from './vendor_components/setup/setting/index';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'forgot', component: ForgotComponent },
    { path: '', component: LandinghomeComponent },
    {
	    path: 'customer',
	    component: CustomerLayoutComponent,
	    canActivate: [AuthGuard],
	    children: [
	      { path: 'home', component: CustomerhomeComponent, canActivate: [AuthGuard] },
	      {path: 'account', component: AccountSetupComponent, canActivate: [AuthGuard] },
	      {path: 'location', component: LocationSetupComponent, canActivate: [AuthGuard] }
	    ]
	},
	{
	    path: 'vendor',
	    component: VendorLayoutComponent,
	    canActivate: [AuthGuard],
	    children: [
	      { path: 'storefront', component: StorefrontComponent, canActivate: [AuthGuard] },
	      { path: 'setting', component: SettingComponent, canActivate: [AuthGuard] }
	    ]
	},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);