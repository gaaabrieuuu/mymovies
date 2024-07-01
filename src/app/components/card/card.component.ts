import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Show } from 'src/app/models/show';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
 @Input() show: Show | undefined;
}
