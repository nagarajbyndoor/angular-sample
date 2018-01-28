import { Component, OnInit } from '@angular/core';
import { FilterPipe } from './filter.pipe';


@Component({
  moduleId: module.id,
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers:[FilterPipe]
})
export class SearchComponent implements OnInit {

  constructor() { }

  pizzas = [
    {name: "Chicken Cheese"},
    {name: "Veg corn"},
    {name: "Egg Cheese"},
    {name: "Mutton fruit"},
    {name: "Tomato Chicken"}
  ];
  ngOnInit() {
  }

}
