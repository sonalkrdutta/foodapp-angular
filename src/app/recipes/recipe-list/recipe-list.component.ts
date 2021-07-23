import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Text Recipe', 'This is simply a text', 'https://learnenglishteens.britishcouncil.org/sites/teens/files/a_recipe_1.jpg'),
    new Recipe('A Text Recipe', 'This is simply a text', 'https://www.adobe.com/express/create/media_101046379bb5a3c0a3366cc3b0170c9e8244f753d.png?width=2000&format=webply&optimize=medium')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
