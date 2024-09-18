import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateDrivenComponentComponent } from './template-driven-component/template-driven-component.component';
import { AddrestaurantComponent } from './addrestaurant/addrestaurant.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { CreateatmComponent } from './createatm/createatm.component';
import { AtmloginComponent } from './atmlogin/atmlogin.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { DepositComponent } from './deposit/deposit.component';
import { LoansearchComponent } from './loansearch/loansearch.component';

const routes: Routes = [{
  path:'register',
  component:TemplateDrivenComponentComponent
},
{path:'address',component:AddrestaurantComponent},
{
  path: 'forgotpassword',
  component: TemplateDrivenComponentComponent
},
{
  path:'addrestaurant',component:AddrestaurantComponent
},
{
  path:'createaccount',component:CreateaccountComponent
},
{path:'loansearch',component:LoansearchComponent},
{path:'createatm',component:CreateatmComponent},
{path:'atmlogin',component:AtmloginComponent},
{path:'withdraw',component:WithdrawComponent},
{path:'deposit',component:DepositComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
