import {Component, Input} from '@angular/core';
import {BeeBase} from "../classBee/bee-base";

@Component({
  selector: 'app-bee-type',
  templateUrl: './bee-type.component.html',
  styleUrl: './bee-type.component.scss'
})
export class BeeTypeComponent {
  @Input() type: string;
  @Input() bees: BeeBase[] = [];
}
