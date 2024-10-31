import {Component, OnInit} from '@angular/core';
import {BeeService, hitDetail} from "../services/beeService/bee.service";
import {BeeBase} from "../shared/classBee/bee-base";


@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  swarm: BeeBase[] = [];
  typesArr = ['Queen', 'Worker', 'Drone'];
  player: string = 'Laurentiu';
  recentHit: hitDetail = undefined;
  constructor(public beeService: BeeService) {
  }

  ngOnInit(): void {
    this.startGame();
  }

  startGame(): void {
    this.beeService.createSwarm();
    this.swarm = this.beeService.beesArray;
  }

  hitClick():void{
    this.recentHit = this.beeService.hitMethod();
  }


}
