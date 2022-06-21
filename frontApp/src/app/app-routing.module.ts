import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultComponent } from './consult/consult.component';
import { InsertComponent } from './insert/insert.component';

const routes: Routes = [
  {
    path: 'insert',
    component: InsertComponent,
  },
  {
    path: 'consult',
    component: ConsultComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
