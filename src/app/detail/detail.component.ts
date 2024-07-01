import { Component, Input} from '@angular/core';

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
  task:any
  
}
