import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-pranav',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: ` 
    <!-- <div *ngIf="name">

    </div>  
  {{ name? "": "" }} -->

  <button (click)="updateLastName()">updateLastName()</button> <br> <br>

  <strong>firstName:</strong>  {{ firstName() }} <br><br>

  <strong>lastName:</strong> {{ lastName() }} <br><br>

  <strong>fullName:</strong> {{ fullName() }} <br><br>
  
  <strong>oldFullName:</strong> {{ oldFullName }} <br>

  <!-- <p>home works!</p> -->
  `,
  styleUrl: './home.component.css',
})
export class HomeComponent {
  name: Array<any> = [];
  
  updateLastName() {
    this.lastName.set("Joshi");
  }

  firstName = signal("Pranav ");

  lastName = signal("Unknown");

  oldFullName = this.firstName() + this.lastName();

  fullName = computed(() => this.firstName() + this.lastName())

}
