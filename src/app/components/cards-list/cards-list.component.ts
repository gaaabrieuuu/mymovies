import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Show } from 'src/app/models/show';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-cards-list',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent {
 @Input() shows: Show[] | undefined;
}
