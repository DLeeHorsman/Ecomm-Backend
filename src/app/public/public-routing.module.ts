import { Routes } from "@angular/router";
import { LandingComponent } from "./landing/landing.component";

export const routes: Routes = [
  {
    path: '', children: [
      { path: 'landing', component: LandingComponent }
    ]
  }
];


export class PublicRoutingComponent {

}
