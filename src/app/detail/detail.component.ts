import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  taskitem:any

  @Input()
  deltask:any

  @Input()
  task:any

  @Input()
  index:any

  @Input()
  activecard:any
  
}
