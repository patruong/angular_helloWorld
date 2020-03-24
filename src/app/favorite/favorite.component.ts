/*
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
*/
import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})

export class FavoriteComponent {
  @Input('isFavorite') isSelected: boolean;
  @Output('change') click = new EventEmitter();


  onClick() { 
    this.isSelected = !this.isSelected;
    this.click.emit({ newValue: this.isSelected });//({ newValue: this.isSelected});
  }
}

export interface FavoriteChangedEventArgs {
  newValue: boolean
}
