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

import {CustomerLayoutComponent} from './customer_components/customer-layout/customer-layout.component';
import { CustomerhomeComponent } from './customer_components/setup/customer-home/index';
import {AccountSetupComponent} from './customer_components/setup/account-setup/account-setup.component';
import {LocationSetupComponent} from './customer_components/setup/location-setup/location-setup.component';
import { StaticComponent } from './customer_components/widget/staticmenu/index';
import { ChartpanelComponent } from './customer_components/widget/chartpanel/index';
import { LivepanelComponent } from './customer_components/widget/livepanel/index';



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

import { Vendor_event_detailComponent } from './vendor_components/setup/vendor_event_detail/index';
import { MyckeditorComponent } from './vendor_components/widget/myckeditor/index';
import { Small_wratingComponent } from './vendor_components/widget/small_wrating/index';
import { Medium_wratingComponent } from './vendor_components/widget/medium_wrating/index';

import { environment } from '../environments/environment';

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
        TooltipModule.forRoot()
    ],
    declarations: [
        AppComponent,
        AlertComponent,

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

        CustomerhomeComponent,
        StaticComponent,
        ChartpanelComponent,
        LivepanelComponent,
        CustomerLayoutComponent,
        AccountSetupComponent,
        LocationSetupComponent,

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
        MyckeditorComponent,
        Small_wratingComponent,
        Medium_wratingComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,

        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }