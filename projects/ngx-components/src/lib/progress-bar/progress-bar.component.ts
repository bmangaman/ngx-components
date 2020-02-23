import { Component, HostBinding, Input } from '@angular/core';

import { SizeEnum } from '../shared/enums';
import { ProgressBarState } from './progress-bar.interface';

@Component({
  selector: 'ngx-progress-bar',
  templateUrl: 'ngx-progress-bar.component.html',
  styleUrls: ['ngx-progress-bar.component.scss'],
})
export class ProgressBarComponent {
  @Input() state: ProgressBarState;
  @Input() value: number;
  @Input() size: SizeEnum = SizeEnum.MEDIUM;
  @Input() isValueDisplayed = true;

  @HostBinding('class')
  setClassList(): string {
    let classList = 'ngx-progress-bar';

    if (this.state) {
      classList += ` ${this.state.replace(' ', '-')}`;
    }

    if (this.size) {
      classList += ` ${this.size}`;
    }

    return classList;
  };
}
