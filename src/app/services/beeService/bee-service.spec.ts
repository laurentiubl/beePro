import {TestBed} from '@angular/core/testing';

import {BeeService} from './bee.service';
import {BeeFactoryService} from "../beeFactory/bee-factory.service";
import {Queen} from "../../shared/classBee/queen";
import {Drone} from "../../shared/classBee/drone";
import {Worker} from "../../shared/classBee/worker";
import {BeeBase} from "../../shared/classBee/bee-base";

describe('BeeService', () => {
  let service: BeeService;
  let serviceFactory: BeeFactoryService;
  beforeEach(() => {
    serviceFactory = new BeeFactoryService();
    service = new BeeService(serviceFactory);
    service.beesArray = [
      new Queen(),
      new Worker(),
      new Worker(),
      new Drone(),
      new Drone(),
      new Drone(),
    ];
    service.gameOver = false;
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  test('should set game over if Queen bee have 0 hp', () => {
    const queen = service.beesArray.find(bee => bee.type === 'Queen') as BeeBase;
    queen.hp = 0;
    service.hitMethod();
    expect(service.gameOver).toBe(true);
  });


  test('should return hit detailss', () => {
    const hitDetail = service.hitMethod();
    expect(hitDetail.type).toBeNull();
    expect(hitDetail.damage).toBeGreaterThan(0);
  });


  test('should mark game over if all bees are dead', () => {
    service.beesArray.forEach(bee => bee.hp = 0);
    service.hitMethod();
    expect(service.gameOver).toBe(true);
  });

});
