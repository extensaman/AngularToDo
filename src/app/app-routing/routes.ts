import {Routes} from "@angular/router";
import {HorseComponent} from "../views/horse/horse.component";
import {CoachComponent} from "../views/coach/coach.component";

export const routes: Routes = [
  {path: 'horse', component: HorseComponent},
  {path: 'coach', component: CoachComponent},
  {path: '', redirectTo: '/horse', pathMatch: 'full'}
];
