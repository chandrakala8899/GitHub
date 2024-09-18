import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenComponentComponent } from './template-driven-component/template-driven-component.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { MaskDirective } from './mask.directive';
import { AddressComponent } from './address/address.component';
import { UserComponent } from './user/user.component';
import { AddrestaurantComponent } from './addrestaurant/addrestaurant.component';
import { RatingComponent } from './rating/rating.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { CreateatmComponent } from './createatm/createatm.component';
import { TansferComponent } from './tansfer/tansfer.component';
import { AtmloginComponent } from './atmlogin/atmlogin.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { DepositComponent } from './deposit/deposit.component';
import { LoansearchComponent } from './loansearch/loansearch.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponentComponent,
    MaskDirective,
    AddressComponent,
    UserComponent,
    AddrestaurantComponent,
    RatingComponent,
    CreateaccountComponent,
    CreateatmComponent,
    TansferComponent,
    AtmloginComponent,
    WithdrawComponent,
    DepositComponent,
    LoansearchComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
HttpClientModule
   
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withInterceptorsFromDi()) 
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }


