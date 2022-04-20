import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MockFormComponent } from './component/mock-form/mock-form.component';
import { MockListComponent } from './component/mock-list/mock-list.component';

import { MockRoutingModule } from './mock-routing.module';


@NgModule({
  declarations: [
    MockListComponent,
    MockFormComponent
  ],
  imports: [
    CommonModule,
    MockRoutingModule,

  ]
})
export class MockModule { }
