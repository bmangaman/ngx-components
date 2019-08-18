import { NgModule } from '@angular/core';

import { TabComponentModule } from './tab/tab.module';

import { TabviewComponent } from './tabview.component';
import { TabComponent } from './tab/tab.component';

@NgModule({
  declarations: [TabviewComponent],
  imports: [TabComponentModule],
  exports: [TabviewComponent, TabComponent]
})
export class TabviewComponentModule { }
