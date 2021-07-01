import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroes.component.html'
})

export class HeroeComponent{
    nombre:string = "Ironman"
    edad:number = 45

    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }

    cambiarNombre():void{
        this.nombre = this.nombre = "Spiderman" ? "IronMan" : "SpiderMan";
    }

    cambiarEdad(): void{
        this.edad = 30
    }

    obtenerNombre():string{
        return `${this.nombre} - ${this.edad}`;
    }
}