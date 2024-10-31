export abstract class BeeBase{
  constructor(public hp: number, public damage: number, public type: string ) {
  }

  damageToBee():void{
    this.hp = Math.max(0, this.hp - this.damage);
  }
}
