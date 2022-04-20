import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MockFormComponent } from './component/mock-form/mock-form.component';
import { MockListComponent } from './component/mock-list/mock-list.component';


const routes: Routes = [
  { path: '', component: MockListComponent },
  { path: 'adicionar', component: MockFormComponent },
  { path: 'altera:_id', component: MockFormComponent },
  { path: 'detalhar:_id', component: MockFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MockRoutingModule { }
