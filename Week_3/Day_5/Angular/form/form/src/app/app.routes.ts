import { Routes } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { DisplayComponent } from './display/display.component';

export const routes: Routes = [
    {path:"form", component: UserFormComponent},
    {path:"display",component:DisplayComponent}
];
