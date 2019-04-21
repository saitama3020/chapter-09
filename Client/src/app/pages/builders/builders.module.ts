import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuildersRoutingModule } from './builders-routing.module';
import { BuildersComponent } from './builders.component';
import { BuilderDetailComponent } from './builder-detail/builder-detail.component';
import { BuilderListComponent } from './builder-list/builder-list.component';

@NgModule({
  declarations: [BuildersComponent, BuilderDetailComponent, BuilderListComponent],
  imports: [
    CommonModule,
    BuildersRoutingModule
  ]
})
export class BuildersModule { }
