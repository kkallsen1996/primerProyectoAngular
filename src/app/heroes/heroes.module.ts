import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from '../heroes/heroe/heroes.component';
import { ListadoComponent } from '../heroes/listado/listado.component';

@NgModule({
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    exports:[
        ListadoComponent
    ],
    imports:[
        CommonModule 
    ]
})
export class HeroesModule{

}