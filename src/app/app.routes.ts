import { Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TestingComponent } from './testing/testing.component';

export const routes: Routes = [
    {path:'', component: MainLayoutComponent,
        children: [
            {path: 'home', component: HomeComponent},
            {path: 'login', component: LoginComponent},
            {path: 'testing', component: TestingComponent}
        ]
    }
];
