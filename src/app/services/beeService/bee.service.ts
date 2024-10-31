import {Injectable} from '@angular/core';
import {BeeBase} from "../../shared/classBee/bee-base";
import {BeeFactoryService} from "../beeFactory/bee-factory.service";
import {Queen} from "../../shared/classBee/queen";
export interface hitDetail{
  type: string,
  damage: number
}
@Injectable({
  providedIn: 'root'
})

export class BeeService {

  public beesArray: BeeBase[] = [];

  gameOver: boolean = false;

  constructor(private factoryBee: BeeFactoryService) {

  }

  hitMethod():hitDetail{

    //daca toate albinele au 0
   const allBeesAreDead = this.beesArray.every(value => value.hp === 0);
    if(allBeesAreDead){
      this.gameOver = true;
    }
    console.log(this.beesArray[(Math.floor(Math.random() * this.beesArray.length))]);
    let selectedFromArray: BeeBase = this.beesArray[(Math.floor(Math.random() * this.beesArray.length))];
    selectedFromArray.damageToBee();

    if(selectedFromArray.type === 'Queen' && selectedFromArray.hp === 0){
      // game over
      this.gameOver = true;

    }

    return { type: selectedFromArray.type, damage: selectedFromArray.damage };
  }

  createSwarm(): void {
    this.gameOver = false;
    this.beesArray = this.factoryBee.createSwarm({
      Queen: 1,
      Worker: 5,
      Drone: 8,
    })
  }

}
