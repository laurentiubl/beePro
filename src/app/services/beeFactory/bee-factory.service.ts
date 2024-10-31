import {Injectable} from '@angular/core';
import {BeeBase} from "../../shared/classBee/bee-base";
import {Queen} from "../../shared/classBee/queen";
import {Worker} from "../../shared/classBee/worker";
import {Drone} from "../../shared/classBee/drone";

@Injectable({
  providedIn: 'root'
})


export class BeeFactoryService {

  constructor() {
  }


  createSwarm(myConf: Record<string, number>): BeeBase[] {
    const arraySw: BeeBase[] = [];

    for (const type in myConf) {
      if (myConf.hasOwnProperty(type)) {
        const numbers = myConf[type];

        for (let i = 0; i < numbers; i++) {
          arraySw.push(this.makeNewBee(type));
        }
      }
    }

    return arraySw;
  }


  makeNewBee(type: string): BeeBase | null {
    switch (type) {
      case 'Queen':
        return new Queen();
      case 'Worker':
        return new Worker();
      case 'Drone':
        return new Drone();
      default:
        return null;
    }
  }
}
