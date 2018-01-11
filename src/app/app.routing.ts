import { Routes, RouterModule } from '@angular/router';

import { LandinghomeComponent } from './firstcomponents/landinghome/index';
import { LoginComponent } from './firstcomponents/login/index';
import { ForgotComponent } from './firstcomponents/forgot/index';
import { RegisterComponent } from './firstcomponents/register/index';

import { AuthGuard } from './_guards/index';

/*Admin part*/

import {AdminLayoutComponent} from "./admin_components/admin-layout/admin-layout.component";
import {DashboardComponent} from "./admin_components/setup/dashboard/index";
import {Vendor_manageComponent} from "./admin_components/setup/vendor_manage/index";
import {Vendor_vieweditComponent} from "./admin_components/setup/vendor_viewedit/index";
import {PermissionComponent} from "./admin_components/setup/permission/index";
import {BillingComponent} from "./admin_components/setup/billing/index";


/*customer part*/

import {CustomerLayoutComponent} from "./customer_components/customer-layout/customer-layout.component";

import { MyjobsComponent } from './customer_components/setup/myjobs/index';
import { AlljobpostingComponent } from './customer_components/setup/alljobposting/index';
import { AllcontractsComponent } from './customer_components/setup/allcontracts/index';
import { PostjobComponent } from './customer_components/setup/postjob/index';

import { JobscreenComponent } from './customer_components/setup/jobscreen/index';

import { FindvendorsComponent } from './customer_components/setup/findvendors/index';
import { MyvendorsComponent } from './customer_components/setup/myvendors/index';

import { CustomerSettingComponent } from './customer_components/setup/setting/index';

import { CustomertransactionhistoryComponent } from './customer_components/setup/transactionhistory/index';

import { MakepaymentComponent } from './customer_components/setup/makepayment/index';
import { EndcontractComponent } from './customer_components/setup/endcontract/index';
import { DisputeboardComponent } from './customer_components/setup/disputeboard/index';
import { CustomerdisputehistoryComponent } from './customer_components/setup/disputehistory/index';

import { CinvoicelistComponent } from './customer_components/setup/cinvoicelist/index';
import { CmailboxComponent } from './customer_components/setup/cmailbox/index';
import { CchatboxComponent } from './customer_components/setup/cchatbox/index';

/*vendor part*/

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

import { MyprofileComponent } from './vendor_components/setup/myprofile/index';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'forgot', component: ForgotComponent },
    { path: '', component: LandinghomeComponent },
    { path: 'admin',
	  component: AdminLayoutComponent,
	  canActivate: [AuthGuard],
	  children: [
	  		{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
	  		{ path: 'vendor_manage', component: Vendor_manageComponent, canActivate: [AuthGuard] },
	  		{ path: 'vendor_viewedit', component: Vendor_vieweditComponent, canActivate: [AuthGuard] },
	  		{ path: 'permission', component: PermissionComponent, canActivate: [AuthGuard] },
	  		{ path: 'billing', component: BillingComponent, canActivate: [AuthGuard] }
	]},

    {
	    path: 'customer',
	    component: CustomerLayoutComponent,
	    canActivate: [AuthGuard],
	    children: [
	    	{ path: 'myjobs', component: MyjobsComponent, canActivate: [AuthGuard] },
	    	{ path: 'alljobposting', component: AlljobpostingComponent, canActivate: [AuthGuard] },
	    	{ path: 'allcontracts', component: AllcontractsComponent, canActivate: [AuthGuard] },
	    	{ path: 'postjob', component: PostjobComponent, canActivate: [AuthGuard] },

	    	{ path: 'jobscreen', component: JobscreenComponent, canActivate: [AuthGuard] },
	    	{ path: 'findvendors', component: FindvendorsComponent, canActivate: [AuthGuard] },
	    	{ path: 'myvendors', component: MyvendorsComponent, canActivate: [AuthGuard] },

	    	{ path: 'setting', component: CustomerSettingComponent, canActivate: [AuthGuard] },
	    	
	    	{ path: 'makepayment', component: MakepaymentComponent, canActivate: [AuthGuard] },
	    	{ path: 'endcontract', component: EndcontractComponent, canActivate: [AuthGuard] },
	    	{ path: 'disputeboard', component: DisputeboardComponent, canActivate: [AuthGuard] },
	    	{ path: 'disputehistory', component: CustomerdisputehistoryComponent, canActivate: [AuthGuard] },

	    	{ path: 'transactionhistory', component: CustomertransactionhistoryComponent, canActivate: [AuthGuard] },

	    	{ path: 'invoicelist', component: CinvoicelistComponent, canActivate: [AuthGuard] },
	    	{ path: 'mailbox', component: CmailboxComponent, canActivate: [AuthGuard] },
	    	{ path: 'chatbox', component: CchatboxComponent, canActivate: [AuthGuard] }
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

	      { path: 'myprofile', component: MyprofileComponent, canActivate: [AuthGuard] },
	      { path: 'vendor_event_detail', component: Vendor_event_detailComponent, canActivate: [AuthGuard] }
	    ]
	},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);