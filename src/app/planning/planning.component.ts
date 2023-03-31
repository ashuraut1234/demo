import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent {
  constructor(private router: Router) {}
inGateClick() {
  this.router.navigateByUrl('/thank-ingate')
}
outGateClick() {
  this.router.navigateByUrl('/thank-outgate')
}

}
