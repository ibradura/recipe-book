import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListAddComponent } from './shopping-list-add.component';

@NgModule({
    declarations:[ShoppingListComponent, ShoppingListAddComponent],
    imports: [SharedModule, FormsModule]
})
export class ShoppingListModule{

}
