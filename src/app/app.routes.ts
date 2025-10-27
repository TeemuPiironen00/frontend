import { Routes } from '@angular/router';
import { HelloWorld } from './hello-world/hello-world';
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [{ path: 'error', component: PageNotFound }, 
                               { path: 'hello', component: HelloWorld} ];
