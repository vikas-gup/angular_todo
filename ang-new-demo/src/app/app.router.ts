import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { HelpComponent } from './about/help/help.component';
import { DetailComponent } from './about/detail/detail.component';


export const router: Routes = [
    //{ path: '', redirectTo: 'about', pathMatch: 'full' },
    { path: 'about/:id', component: AboutComponent,
	    children: [
	      { path: '', component: DetailComponent },	
	      { path: 'help', component: HelpComponent }
	    ]
	},
	{ path: 'my', component: MyNewComponentComponent }    
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);