import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-tab',
  templateUrl: 'tab.component.html',
  styleUrls: ['tab.component.scss']
})
export class TabComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
