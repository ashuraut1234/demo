import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanningComponent } from './planning/planning.component';
import { ThankYouIngateComponent } from './thank-you-ingate/thank-you-ingate.component';
import { ThankYouOutgateComponent } from './thank-you-outgate/thank-you-outgate.component';

const routes: Routes = [
  {
    path: '',
    component: PlanningComponent
  },
  {
    path: 'thank-ingate',
    component: ThankYouIngateComponent
  },
  {
    path: 'thank-outgate',
    component: ThankYouOutgateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
