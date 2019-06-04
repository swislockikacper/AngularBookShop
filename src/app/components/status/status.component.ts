import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
  @Input() step: number;

  constructor() { 
  }

  ngOnInit() {
  }

}
