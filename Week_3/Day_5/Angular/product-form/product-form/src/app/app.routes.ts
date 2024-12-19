import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { DisplayComponent } from './display/display.component';
import { NavbarComponent } from './navbar/navbar.component';

export const routes: Routes = [
    {path:"", component:NavbarComponent},
    {path:"form", component:FormComponent},
    {path:"display", component:DisplayComponent}
];
