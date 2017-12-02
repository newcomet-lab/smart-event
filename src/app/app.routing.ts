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
import { NeweventComponent } from './vendor_components/setup/newevent/index';
import { EventlistComponent } from './vendor_components/setup/eventlist/index';
import { Listing_billComponent } from './vendor_components/setup/listing_bill/index';
import { Bill_previewComponent } from './vendor_components/setup/bill_preview/index';
import { BookinglistComponent } from './vendor_components/setup/bookinglist/index';
import { CalendarviewComponent } from './vendor_components/setup/calendarview/index';
import { BookingnewComponent } from './vendor_components/setup/bookingnew/index';
import { InvoicelistComponent } from './vendor_components/setup/invoicelist/index';
import { MailboxComponent } from './vendor_components/setup/mailbox/index';
import { ChatboxComponent } from './vendor_components/setup/chatbox/index';
import { FindcustomersComponent } from './vendor_components/setup/findcustomers/index';
import { CustomersjobComponent } from './vendor_components/setup/customersjob/index';
import { VsubmitproposalComponent } from './vendor_components/setup/vsubmitproposal/index';
import { Vendor_event_detailComponent } from './vendor_components/setup/vendor_event_detail/index';

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
	      { path: 'setting', component: SettingComponent, canActivate: [AuthGuard] },
	      { path: 'newevent', component: NeweventComponent, canActivate: [AuthGuard] },
	      { path: 'eventlist', component: EventlistComponent, canActivate: [AuthGuard] },
	      { path: 'listingbill', component: Listing_billComponent, canActivate: [AuthGuard] },
	      { path: 'billpreview', component: Bill_previewComponent, canActivate: [AuthGuard] },
	      { path: 'bookinglist', component: BookinglistComponent, canActivate: [AuthGuard] },
	      { path: 'calendarview', component: CalendarviewComponent, canActivate: [AuthGuard] },
	      { path: 'bookingnew', component: BookingnewComponent, canActivate: [AuthGuard] },
	      { path: 'invoicelist', component: InvoicelistComponent, canActivate: [AuthGuard] },
	      { path: 'mailbox', component: MailboxComponent, canActivate: [AuthGuard] },
	      { path: 'chatbox', component: ChatboxComponent, canActivate: [AuthGuard] },
	      { path: 'findcustomers', component: FindcustomersComponent, canActivate: [AuthGuard] },
	      { path: 'customersjob', component: CustomersjobComponent, canActivate: [AuthGuard] },
	      { path: 'vsubmitproposal', component: VsubmitproposalComponent, canActivate: [AuthGuard] },
	      { path: 'vendor_event_detail', component: Vendor_event_detailComponent, canActivate: [AuthGuard] }
	    ]
	},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);