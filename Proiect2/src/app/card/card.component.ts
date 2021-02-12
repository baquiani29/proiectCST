import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Persoana } from '../app.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {

  @Input() persoana:Persoana | undefined;

  @Output() deleteEvent:EventEmitter<any>=new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {}

  delete(){

    this.deleteEvent.emit();

  }

}
