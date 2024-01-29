import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { PublicComponent } from "./public/public.component";
import { LandingComponent } from "./public/landing/landing.component";

export const routes: Routes = [
    {
        path: '', children: [
            { path: 'login', component: LoginComponent },
            {
                path: 'public', component: PublicComponent, children: [
                    { path: 'landing', component: LandingComponent }
                ]
            }
        ]
    }
];
export class AppRouteComponent {

}
