import {BeeBase} from "./bee-base";

export class Worker extends BeeBase {
  constructor() {
    super(75, 10, 'Worker');
  }
}
