import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';

import { LandinghomeComponent } from './firstcomponents/landinghome/index';
import { LoginComponent } from './firstcomponents/login/index';
import { RegisterComponent } from './firstcomponents/register/index';
import { ForgotComponent } from './firstcomponents/forgot/index';
import { FirstheaderComponent } from './firstcomponents/firstheader/index';
import { FirstfooterComponent } from './firstcomponents/firstfooter/index';
import { SliderComponent } from './firstcomponents/slider/index';
import { ReviewcardComponent } from './firstcomponents/reviewcard/index';
import { WratingComponent } from './firstcomponents/wrating/index';
import { HiworkcardComponent } from './firstcomponents/hiworkcard/index';
import { RadiotoggleComponent } from './firstcomponents/radiotoggle/index';

import { StickyNavModule } from 'ng2-sticky-nav';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { TabsModule } from 'ngx-bootstrap/tabs';
import {Ng2PageScrollModule} from 'ng2-page-scroll';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { RatingModule } from 'ngx-bootstrap/rating';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { NgProgressModule } from 'ngx-progressbar';
import {ProgressBarModule} from "ng2-progress-bar";
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';

import { ChartsModule } from 'ng2-charts';

import { CKEditorModule } from 'ng2-ckeditor';

import { AgmCoreModule } from '@agm/core';

import { ImageUploadModule } from "angular2-image-upload";

import { FullCalendarModule } from 'ng-fullcalendar';

import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';

import { DxVectorMapModule } from 'devextreme-angular';

import {SelectModule} from 'ng2-select';

/*Customer part*/

import { CustomerheaderComponent } from './customer_components/customerheader/index';
import {CustomerLayoutComponent} from './customer_components/customer-layout/customer-layout.component';
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

import { CinvoicelistComponent } from './customer_components/setup/cinvoicelist/index';
import { CmailboxComponent } from './customer_components/setup/cmailbox/index';
import { CchatboxComponent } from './customer_components/setup/cchatbox/index';

/*Vendor part*/

import {VendorLayoutComponent} from './vendor_components/vendor-layout/vendor-layout.component';
import { VendorheaderComponent } from './vendor_components/vendorheader/index';
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

import { MyprofileComponent } from './vendor_components/setup/myprofile/index';

import { Vendor_event_detailComponent } from './vendor_components/setup/vendor_event_detail/index';
import { MyckeditorComponent } from './vendor_components/widget/myckeditor/index';
import { Small_wratingComponent } from './vendor_components/widget/small_wrating/index';
import { Medium_wratingComponent } from './vendor_components/widget/medium_wrating/index';

import { environment } from '../environments/environment';

import { ModalComponent } from './global_components/modal/index';
import { ModalService } from './_services/index';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        StickyNavModule,
        Angular2FontawesomeModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        CarouselModule.forRoot(),
        RatingModule.forRoot(),
        ButtonsModule.forRoot(),
        TabsModule.forRoot(),
        Ng2PageScrollModule,
        NgProgressModule,
        ProgressBarModule,
        ProgressbarModule.forRoot(),
        ChartsModule,
        CKEditorModule,
        AgmCoreModule.forRoot({
              apiKey: 'AIzaSyB3DnR_cRYlKjuQZES_pIenqdnxfz76ibs',
              libraries: ["places"]
        }),
        ImageUploadModule.forRoot(),
        FullCalendarModule,
        BsDatepickerModule.forRoot(),
        TimepickerModule.forRoot(),
        BsDropdownModule.forRoot(),
        AngularMultiSelectModule,
        PaginationModule.forRoot(),
        TooltipModule.forRoot(),
        DxVectorMapModule,
        SelectModule
    ],
    declarations: [
        AppComponent,
        AlertComponent,

        ModalComponent,

        FirstheaderComponent,
        FirstfooterComponent,
        LandinghomeComponent,
        LoginComponent,
        ForgotComponent,
        RegisterComponent,
        SliderComponent,
        ReviewcardComponent,
        WratingComponent,
        HiworkcardComponent,
        RadiotoggleComponent,



/*customer part*/



        CustomerheaderComponent,

        CustomerLayoutComponent,

        MyjobsComponent,
        AlljobpostingComponent,
        AllcontractsComponent,
        PostjobComponent,

        JobscreenComponent,

        FindvendorsComponent,
        MyvendorsComponent,

        CustomerSettingComponent,

        CustomertransactionhistoryComponent,

        MakepaymentComponent,
        EndcontractComponent,

        CinvoicelistComponent,
        CmailboxComponent,
        CchatboxComponent,



/*vendor part*/



        VendorLayoutComponent,

        VendorheaderComponent,

        StorefrontComponent,
        SettingComponent,

        NeweventComponent,
        EventlistComponent,

        Listing_billComponent,
        Bill_previewComponent,

        BookinglistComponent,
        CalendarviewComponent,
        BookingnewComponent,
        InvoicelistComponent,

        MailboxComponent,
        ChatboxComponent,

        FindcustomersComponent,
        CustomersjobComponent,
        VsubmitproposalComponent,
        Vendor_event_detailComponent,

        MyprofileComponent,
        MyckeditorComponent,
        Small_wratingComponent,
        Medium_wratingComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        ModalService,

        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }