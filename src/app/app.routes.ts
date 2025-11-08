import { Routes } from '@angular/router';
import { HelloWorld } from './hello-world/hello-world';
import { PageNotFound } from './page-not-found/page-not-found';
import { Calculator } from './calculator/calculator';
import { Feedback } from './feedback/feedback';

export const routes: Routes = [{ path: '', component: HelloWorld},
                               { path: 'hello', component: HelloWorld},
                               { path: 'calculator', component: Calculator},
                               { path: 'feedback', component: Feedback},
                               { path: '**', component: PageNotFound}];
