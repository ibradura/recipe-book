import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rb-recipe-start',
  template: `
    <p>
      Lütfen bir tarif seçin.
    </p>
  `,
  styles: []
})
export class RecipeStartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}