import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WorkTestComponent } from './work-test/work-test.component'; 
const routes: Routes = [{ path: '', component: WorkTestComponent } 
                  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
