import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes:string[] = [ 'goku', 'gohan', 'cell']
  heroeBorrado:string = '';

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
